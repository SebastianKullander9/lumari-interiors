"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderBlack from "../components/HeaderBlack";
import Footer from "../components/Footer";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import { motion, AnimatePresence } from "motion/react";

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
            <div className="w-full h-[calc(20%-64px)] flex flex-col items-center justify-center">
                <p className="text-gray-500">PORTFOLIO</p>
                <h1 className="font-semibold text-4xl">SHOWCASE OF OUR WORK</h1>
            </div>
            <div className="w-full max-h-8/10 min-h-8/10 flex flex-row p-8 pr-10">
                <div className="flex flex-row w-full">
                    {/* Left Big Image */}
                    <div className="w-1/2 h-full pr-4 overflow-hidden">
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
                    <div className="w-1/2 h-full flex flex-row">
                        <div className="w-1/2 px-4 overflow-hidden flex flex-col justify-between h-full">
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
                                    <p className="text-sm text-gray-500">Stockholm, 2025</p>
                                </motion.div>
                                <motion.div
                                    variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                            exit: { opacity: 0, transition: { duration: 0.2 } }
                                        }}
                                        className="flex flex-col gap-4 min-h-[40vh]"
                                    >
                                    <h1 className="font-semibold text-2xl">{viewContent[view].name}</h1>
                                    <p className="text-base text-gray-500 w-4/5">
                                    {viewContent[view].text}
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                        exit: { opacity: 0, transition: { duration: 0.2 } }
                                        }}
                                    >
                                    <p className="text-md text-gray-500">
                                    Click here to view our gallery of this project
                                    </p>
                                </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="w-1/2 h-full pl-4 flex flex-col justify-center relative">
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
                                <button
                                    onClick={onPrev}
                                    className="p-4 rounded-full border-2 hover:bg-orange-100 border-orange-100 cursor-pointer transition-colors duration-300"
                                >
                                    <ArrowLeft />
                                </button>
                                <button
                                    onClick={onNext}
                                    className="p-4 rounded-full border-2 hover:bg-orange-100 border-orange-100 cursor-pointer transition-colors duration-300"
                                >
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}