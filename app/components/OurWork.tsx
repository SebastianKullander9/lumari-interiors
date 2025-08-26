"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderBlack from "../components/HeaderBlack";
import Footer from "../components/Footer";
import NavButtons from "../components/NavButtons";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export interface Project {
    name: string;
    textShort: string;
    textLong: string;
    location: string;
    imageCarousel: string;
    bigImage: string;
    smallImage: string;
    gallery: string[];
    slug: string;
    bigImageUrl: string;
    smallImageUrl: string;
}

export default function OurWork({ projects }: { projects: Project[] }) {
    const [view, setView] = useState(0);

    const onPrev = () => {
        setView((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const onNext = () => {
        setView((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <section>
            <HeaderBlack />
            <div className="w-screen md:max-h-[calc(100svh-32px)] min-h-[calc(100svh-32px)] bg-[var(--color-baby-powder)] flex md:items-center">
                <div className="max-w-screen-2xl mx-auto h-full relative flex flex-col pb-8 px-4 lg:px-8 xl:px-16">
                    <div className="w-full flex py-3 pt-10">
                        <h1 className="font-semibold text-xs">SHOWCASE OF OUR WORK</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-10 md:gap-6 h-full">
                        <div className="aspect-32/27 relative md:col-span-7 lg:col-span-5 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={view}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={projects[view].bigImage}
                                        alt={projects[view].name}
                                        fill
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-col justify-between md:col-span-3 lg:col-span-3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={view + "-texts"}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        visible: {
                                            transition: { staggerChildren: 0.3 },
                                        },
                                        hidden: {},
                                        exit: {
                                            transition: {
                                                staggerChildren: 0.1,
                                                staggerDirection: -1,
                                            },
                                        },
                                    }}
                                    className="flex flex-col justify-between h-full"
                                >
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { duration: 0.4 },
                                            },
                                            exit: { opacity: 0, transition: { duration: 0.2 } },
                                        }}
                                    >
                                        <p className="text-xs md:text-sm text-gray-500 hidden md:block">
                                            Stockholm, 2025
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { duration: 0.4 },
                                            },
                                            exit: { opacity: 0, transition: { duration: 0.2 } },
                                        }}
                                        className="flex flex-col md:gap-4 md:min-h-[35vh]"
                                    >
                                        <h1 className="font-semibold text-xs pt-4 md:pt-0 uppercase">
                                            {projects[view].name}
                                        </h1>
                                        <p className="text-xs md:text-sm text-gray-600 w-full md:w-4/5">
                                            {projects[view].textLong}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { duration: 0.4 },
                                            },
                                            exit: { opacity: 0, transition: { duration: 0.2 } },
                                        }}
                                    >
                                        <Link href={`/projects/${projects[view].slug}`}>
                                            <p className="text-xs md:text-sm text text-gray-600 pt-4 md:pt-4 hover:text-gray-900 transition-color duration-300">
                                                Click{" "}
                                                <span className="text-black font-bold underline">
                                                    here
                                                </span>{" "}
                                                to view the gallery
                                            </p>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="hidden lg:flex items-center lg:col-span-2 relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={view + "-small"}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        width={500}
                                        height={500}
                                        src={projects[view].smallImage}
                                        alt={projects[view].name}
                                        className="object-contain"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Nav buttons for desktop */}
                    <div className="hidden lg:flex gap-4 justify-end absolute bottom-8 right-4 lg:right-8 xl:right-16">
                        <NavButtons onPrev={onPrev} onNext={onNext} />
                    </div>
                </div>
                {/* Nav buttons for mobile */}
                <div className="hidden md:flex lg:hidden gap-4 justify-center pb-8 md:pb-0 md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <NavButtons onPrev={onPrev} onNext={onNext} />
                </div>
                <div className="flex md:hidden lg:hidden gap-4 justify-center pb-4 md:pb-0 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translatet-1/2">
                    <NavButtons onPrev={onPrev} onNext={onNext} />
                </div>
            </div>

            
            <Footer />
        </section>
    );
}