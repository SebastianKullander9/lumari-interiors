"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
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

export default function ProjectsSliderDesktop({ projects }: { projects: Project[] }) {
    const options: EmblaOptionsType = { loop: true };
    const [emblaRef] = useEmblaCarousel(options);

    const duplicatedProjects = [...projects, ...projects];

    return (
        <section className="sm:w-screen h-[100vh] bg-[var(--color-baby-powder)]">
            <div className="flex gap-2 py-3 pl-8 pt-[10vh]">
                                <h1 className="text-base font-semibold pt-10">OUR WORK</h1>
            </div>
            <div className="overflow-hidden h-full" ref={emblaRef}>   

                <div className="flex touch-pan-y ml-[-1rem] h-full">
                    
                {duplicatedProjects.map((project, index) => (
                    <div
                    key={index}
                    className="flex-[0_0_60%] md:flex-[0_0_55%] lg:flex-[0_0_45%] min-w-0 mr-12 pt-2"
                    >
                    <Link href={`/projects/${project.slug}`}>
                        <div className="relative h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[65vh] flex items-center justify-center select-none hover:scale-101 transition-all duration-300 cursor-pointer">
                            <Image
                                src={project.imageCarousel}
                                fill
                                alt={project.name}
                                className="object-cover"
                            />
                        </div>

                        {/* min-h-[20rem] md:min-h-[12rem] lg:min-h-[8rem] */}
                        <div className="pt-2 flex justify-between flex-col md:flex-row">
                            <h1 className="text-sm font-semibold uppercase">{project.name}</h1>
                            <p className="text-xs text-gray-600">{project.textShort}</p>
                        </div>
                    </Link>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}