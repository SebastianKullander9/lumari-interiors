"use client";
import React, { useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
    name: string;
    textShort: string;
    image: string;
}

export default function ProjectsSlider({ projects }: { projects: Project[] }) {
    const options: EmblaOptionsType = { loop: true };
    const [emblaRef, embla] = useEmblaCarousel(options);

    const duplicatedProjects = [...projects, ...projects];

    const autoplay = useCallback(() => {
        if (!embla) return;

        const interval = setInterval(() => {
            if (!embla) return;

            embla.scrollNext();
        }, 4000);

        return () => clearInterval(interval);
     }, [embla]);

    useEffect(() => {
        const clear = autoplay();
        return () => clear && clear();
    }, [autoplay]);

    return (
        <section className="w-screen min-h-screen bg-[var(--color-baby-powder)] py-8 flex flex-col justify-center">
            <div>
                <div className="px-8 mb-4">
                    <h1 className="text-base font-semibold text-[var(--color-dusty-red)]">OUR WORK</h1>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                    {duplicatedProjects.map((project, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                        <Link href={`/projects/${project.name}`}>
                            <div className="relative w-full aspect-[6/9] sm:aspect-[12/9]">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                </div>
                            <div className="px-4 pt-2 flex justify-between flex-col md:flex-row">
                            <h1 className="text-sm font-semibold uppercase text-[var(--color-dusty-red)]">{project.name}</h1>
                            <p className="text-xs text-gray-600">{project.textShort}</p>
                            </div>
                        </Link>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}