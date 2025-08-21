"use client";
import React, { useState, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

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

    return(
        <section className="sm:w-screen sm:h-screen mt-30">
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex touch-pan-y ml-[-1rem] h-full items-center">
                    {slides.map((index) => (
                        <div
                            key={index}
                            className="flex-[0_0_60%] md:flex-[0_0_55%] lg:flex-[0_0_45%] min-w-0 mr-12"
                        >   
                            <Link href={`/projects/${slideContent[index].slug}`}>
                                <div className="relative  h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[65vh] flex items-center justify-center select-none hover:scale-103 transition-all duration-300 cursor-pointer">
                                    <Image
                                    src={slideContent[index].url}
                                    fill
                                    alt={slideContent[index].name}
                                    className="object-cover"
                                    />
                                </div>
                                <div className="pt-4 min-h-[20rem] md:min-h-[12rem] lg:min-h-[8rem]">
                                    <h1 className="text-xl font-semibold">{slideContent[index].name}</h1>
                                    <p className="text-lg text-gray-600">{slideContent[index].text}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}