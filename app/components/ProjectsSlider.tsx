"use client";
import React, { useState, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const slideContent = [
    { url: "/projects/project-s.jpeg", 
        name: "PROJECT S", 
        text: "An apartment in the heart of Stockholm, featuring a variety of custom designs. We blended the apartment’s historic charm with modern elements to create a harmonious and stylish living space.",
        slug: "s"
    },
	{ url: "/projects/project-lili.jpeg", 
        name: "PROJECT LILI", 
        text: "A luxury villa built entirely from scratch, inspired by the warm and inviting aesthetics of Southern Europe, located in the stunning Swedish archipelago.",
        slug: "lili"
    },
    { url: "/projects/project-r.jpeg", 
        name: "PROJECT R", 
        text: "A real estate office designed with premium furnishings and a style that reflects the company’s unique personality and commitment to quality.",
        slug: "r"
    },
        { url: "/projects/project-s.jpeg", 
        name: "PROJECT S", 
        text: "An apartment in the heart of Stockholm, featuring a variety of custom designs. We blended the apartment’s historic charm with modern elements to create a harmonious and stylish living space.",
        slug: "s"
    },
	{ url: "/projects/project-lili.jpeg", 
        name: "PROJECT LILI", 
        text: "A luxury villa built entirely from scratch, inspired by the warm and inviting aesthetics of Southern Europe, located in the stunning Swedish archipelago.",
        slug: "lili"
    },
    { url: "/projects/project-r.jpeg", 
        name: "PROJECT R", 
        text: "A real estate office designed with premium furnishings and a style that reflects the company’s unique personality and commitment to quality.",
        slug: "r"
    },
]

export default function ProjectsSlider() {
    const SLIDE_COUNT = slideContent.length;
	const slides = Array.from(Array(SLIDE_COUNT).keys());
    const options = { loop: true }
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <section className="sm:w-screen h-screen">
            <motion.div
                className="overflow-hidden h-full"
                ref={emblaRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex touch-pan-y ml-[-1rem] h-full items-center">
                {slideContent.map((slide, index) => (
                    <div
                    key={index}
                    className="flex-[0_0_60%] md:flex-[0_0_55%] lg:flex-[0_0_45%] min-w-0 mr-12"
                    >
                    <Link href={`/projects/${slide.slug}`}>
                        <div className="relative h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[65vh] flex items-center justify-center select-none hover:scale-103 transition-all duration-300 cursor-pointer">
                        <Image
                            src={slide.url}
                            fill
                            alt={slide.name}
                            className="object-cover"
                        />
                        </div>
                        <motion.div
                            className="pt-4 min-h-[20rem] md:min-h-[12rem] lg:min-h-[8rem]"
                            initial="hidden"
                            whileInView="show"
                            transition={{ staggerChildren: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <motion.h1
                                className="text-xl font-semibold"
                                variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                                }}
                            >
                                {slide.name}
                            </motion.h1>

                            <motion.p
                                className="text-lg text-gray-600"
                                variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                                }}
                            >
                                {slide.text}
                            </motion.p>
                        </motion.div>
                    </Link>
                    </div>
                ))}
                </div>
            </motion.div>
        </section>
    );
}

//flex-[0_0_60%] md:flex-[0_0_55%] lg:flex-[0_0_45%] min-w-0 mr-12