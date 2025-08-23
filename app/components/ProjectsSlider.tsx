"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import svgImage from "../../public/svgs/spark-solid.svg";

const slideContent = [
    {
        url: "/projects/project-lili.jpeg",
        name: "PROJECT LILI",
        text: "A luxury villa built entirely from scratch.",
        slug: "lili",
    },
    {
        url: "/projects/project-s.jpeg",
        name: "PROJECT S",
        text: "An apartment in the heart of Stockholm.",
        slug: "s",
    },

    {
        url: "/projects/project-r.jpeg",
        name: "PROJECT R",
        text: "A real estate office designed with premium furnishings.",
        slug: "r",
    },
    {
        url: "/projects/project-lili.jpeg",
        name: "PROJECT LILI",
        text: "A luxury villa built entirely from scratch.",
        slug: "lili",
    },
    {
        url: "/projects/project-s.jpeg",
        name: "PROJECT S",
        text: "An apartment in the heart of Stockholm.",
        slug: "s",
    },
    {
        url: "/projects/project-r.jpeg",
        name: "PROJECT R",
        text: "A real estate office designed with premium furnishings.",
        slug: "r",
    },
];

export default function ProjectsSlider() {
    const options: EmblaOptionsType = { loop: true };
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <section className="sm:w-screen h-[110vh] bg-[var(--color-baby-powder)] pt-[30vh]">
            <div className="flex gap-2 py-3 pl-8">
                <h1 className="text-base font-semibold">OUR WORK</h1>
            </div>
            <div className="overflow-hidden h-full" ref={emblaRef}>   
                <div className="flex touch-pan-y ml-[-1rem] h-full">
                    
                {slideContent.map((slide, index) => (
                    <div
                    key={index}
                    className="flex-[0_0_60%] md:flex-[0_0_55%] lg:flex-[0_0_45%] min-w-0 mr-12 pt-2"
                    >
                    <Link href={`/projects/${slide.slug}`}>
                        <div className="relative h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[65vh] flex items-center justify-center select-none hover:scale-101 transition-all duration-300 cursor-pointer">
                        <Image
                            src={slide.url}
                            fill
                            alt={slide.name}
                            className="object-cover"
                        />
                        </div>

                        {/* min-h-[20rem] md:min-h-[12rem] lg:min-h-[8rem] */}
                        <div className="pt-2 flex justify-between flex-col md:flex-row">
                            <h1 className="text-sm font-semibold">{slide.name}</h1>
                            <p className="text-xs text-gray-600">{slide.text}</p>
                        </div>
                    </Link>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}