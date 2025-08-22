"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const slideContent = [
    {
        url: "/projects/project-s.jpeg",
        name: "PROJECT S",
        text: "An apartment in the heart of Stockholm, featuring a variety of custom designs. We blended the apartment’s historic charm with modern elements to create a harmonious and stylish living space.",
        slug: "s",
    },
    {
        url: "/projects/project-lili.jpeg",
        name: "PROJECT LILI",
        text: "A luxury villa built entirely from scratch, inspired by the warm and inviting aesthetics of Southern Europe, located in the stunning Swedish archipelago.",
        slug: "lili",
    },
    {
        url: "/projects/project-r.jpeg",
        name: "PROJECT R",
        text: "A real estate office designed with premium furnishings and a style that reflects the company’s unique personality and commitment to quality.",
        slug: "r",
    },
        {
        url: "/projects/project-s.jpeg",
        name: "PROJECT S",
        text: "An apartment in the heart of Stockholm, featuring a variety of custom designs. We blended the apartment’s historic charm with modern elements to create a harmonious and stylish living space.",
        slug: "s",
    },
    {
        url: "/projects/project-lili.jpeg",
        name: "PROJECT LILI",
        text: "A luxury villa built entirely from scratch, inspired by the warm and inviting aesthetics of Southern Europe, located in the stunning Swedish archipelago.",
        slug: "lili",
    },
    {
        url: "/projects/project-r.jpeg",
        name: "PROJECT R",
        text: "A real estate office designed with premium furnishings and a style that reflects the company’s unique personality and commitment to quality.",
        slug: "r",
    },
];

export default function ProjectsSlider() {
    const options: EmblaOptionsType = { loop: true };
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <section className="sm:w-screen h-screen">
            <div className="overflow-hidden h-full" ref={emblaRef}>
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

                        <div className="pt-4 min-h-[20rem] md:min-h-[12rem] lg:min-h-[8rem]">
                        <h1 className="text-xl font-semibold">{slide.name}</h1>
                        <p className="text-lg text-gray-600">{slide.text}</p>
                        </div>
                    </Link>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}