"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderBlack from "../components/HeaderBlack";
import Footer from "../components/Footer";
import NavButtons from "../components/NavButtons";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const viewContent = [
    {
        bigImage: "/our-work/s/bathroom.jpeg",
        smallImage: "/our-work/s/bed.jpeg",
        name: "PROJECT S",
        text: "A central Stockholm apartment where historic charm meets modern design, creating a stylish and harmonious living space.",
        slug: "s",
    },
    {
        bigImage: "/our-work/lili/outside.jpeg",
        smallImage: "/our-work/lili/stool.jpeg",
        name: "PROJECT LILI",
        text: "A luxury villa built entirely from scratch, inspired by the warm and inviting aesthetics of Southern Europe, located in the stunning Swedish archipelago.",
        slug: "lili",
    },
    {
        bigImage: "/our-work/r/room.jpeg",
        smallImage: "/our-work/r/furnishings.jpeg",
        name: "PROJECT R",
        text: "A real estate office designed with premium furnishings and a style that reflects the company’s unique personality and commitment to quality.",
        slug: "r",
    },
];

export default function OurWork() {
    const [view, setView] = useState(0);

    const onPrev = () => {
        setView((prev) => (prev === 0 ? viewContent.length - 1 : prev - 1));
    };

    const onNext = () => {
        setView((prev) => (prev === viewContent.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-screen h-screen">
            <HeaderBlack />
            <div className="w-full flex pl-8 py-3">
                <h1 className="font-semibold text-base">SHOWCASE OF OUR WORK</h1>
            </div>
            <div className="md:h-screen ">
                <div className="w-full h-[calc(100vh-112px)] flex flex-row px-8 pb-8 md:pr-10">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-1/2 h-full md:pr-4 md:overflow-hidden">
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
                                        src={viewContent[view].bigImage}
                                        alt=""
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex flex-row">
                            <div className="w-full lg:w-1/2 md:px-4 overflow-hidden flex flex-col justify-between h-full">
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
                                        className="flex flex-col lg:justify-between h-full"
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
                                        <h1 className="font-semibold text-base pt-4 md:pt-0">{viewContent[view].name}</h1>
                                        <p className="text-sm text-gray-600 w-full md:w-4/5">{viewContent[view].text}</p>
                                    </motion.div>
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                            exit: { opacity: 0, transition: { duration: 0.2 } }
                                            }}
                                        >
                                        <Link href={`/projects/${viewContent[view].slug}`}>
                                            <p className="text-sm text text-gray-600 pt-4 md:pt-4 hover:text-gray-900 transition-color duration-300">
                                                Click <span className="text-black font-bold underline">here</span> to view the gallery
                                            </p>
                                        </Link>
                                    </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="w-1/2 hidden lg:flex h-full pl-4 flex-col justify-center relative">
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
                                            src={viewContent[view].smallImage}
                                            alt=""
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="flex gap-4 justify-end absolute bottom-0 right-0">
                                    <NavButtons onPrev={onPrev} onNext={onNext} />
                                </div>
                            </div>   
                        </div>
                        <div className="flex justify-center gap-4 pt-8 md:hidden">
                            <NavButtons onPrev={onPrev} onNext={onNext} />
                        </div> 
                    </div>
                </div>
                <div className="w-full justify-center gap-4 hidden md:flex lg:hidden">
                    <NavButtons onPrev={onPrev} onNext={onNext} />
                </div> 
            </div>
            <Footer />
        </section>
    );
}