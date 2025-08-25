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
            <div className="w-screen md:max-h-[calc(100vh-64px)] min-h-[calc(100vh-64px)]">
                <div className="w-full flex pl-8 py-3">
                    <h1 className="font-semibold text-base">SHOWCASE OF OUR WORK</h1>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-6/10 lg:w-1/2 px-8 md:pl-8 md:pr-0 pb-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={view}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    width={1000}
                                    height={400}
                                    layout="responsive"
                                    src={projects[view].bigImage}
                                    alt=""
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="w-full md:w-4/10 lg:1/2">
                        <div className="flex flex-col justify-between h-full pb-8 px-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={view + "-texts"}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        visible: {
                                        transition: { staggerChildren: 0.3 }
                                        },
                                        hidden: {},
                                        exit: {
                                        transition: { staggerChildren: 0.1, staggerDirection: -1 }
                                        }
                                    }}
                                    className="flex flex-col justify-between h-full"
                                >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                        exit: { opacity: 0, transition: { duration: 0.2 } }
                                        }}
                                    >
                                    <p className="text-sm text-gray-500 hidden md:block">Stockholm, 2025</p>
                                </motion.div>
                                <motion.div
                                    variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                            exit: { opacity: 0, transition: { duration: 0.2 } }
                                        }}
                                        className="flex flex-col gap-4 md:min-h-[35vh]"
                                    >
                                    <h1 className="font-semibold text-base pt-4 md:pt-0 uppercase">{projects[view].name}</h1>
                                    <p className="text-sm text-gray-600 w-full md:w-4/5">{projects[view].textLong}</p>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                        exit: { opacity: 0, transition: { duration: 0.2 } }
                                        }}
                                    >
                                    <Link href={`/projects/${projects[view].slug}`}>
                                        <p className="text-sm text text-gray-600 pt-4 md:pt-4 hover:text-gray-900 transition-color duration-300">
                                            Click <span className="text-black font-bold underline">here</span> to view the gallery
                                        </p>
                                    </Link>
                                </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="w-1/4 hidden lg:block">
                        <div className="pr-8 flex h-full pl-4 flex-col justify-center relative">
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
                                        layout="responsive"
                                        src={projects[view].smallImage}
                                        alt=""
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="flex gap-4 justify-end absolute bottom-8 right-8">
                            <NavButtons onPrev={onPrev} onNext={onNext} />
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden gap-4 justify-center pb-8 md:pb-0 md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <NavButtons onPrev={onPrev} onNext={onNext} />
                </div>
            </div>
            <Footer />
        </section>
    );
}