"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AboutProps = {
    animate?: boolean;
};

export default function About({ animate = false }: AboutProps) {
    return (
        <section className="flex flex-col">
            <div className="">
                <div className="container mx-auto flex w-screen h-screen items-center gap-8 flex-col lg:flex-row sm:flex-col px-4 justify-center">
                
                {animate ? (
                    <motion.div
                    className="flex flex-col gap-6 lg:w-1/2"
                    initial="hidden"
                    whileInView="show"
                    transition={{ staggerChildren: 0.25 }}
                    viewport={{ once: true, amount: 0.5 }}
                    >
                    <motion.h1
                        className="text-4xl uppercase font-semibold text-center lg:text-start"
                        variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        About us
                    </motion.h1>
                    {[
                        "We create personalized interior environments with a keen eye for detail. Our mission is to design spaces that combine character and functionality, whether for private homes or commercial environments.",
                        "At Lumari Interiors, we transform spaces to reflect our clients’ unique style and business needs. We work closely with you at every stage—from concept and planning to procurement, styling, and project completion—ensuring a seamless and tailored experience.",
                        "Whether your project is small or large, our services include concept development, space planning, material selection, interior design, lighting design, and styling.",
                        "Additionally, we collaborate with talented landscapers and gardeners, providing recommendations or support throughout the process to make your experience as effortless as possible.",
                    ].map((text, i) => (
                        <motion.p
                        key={i}
                        className="text-lg text-gray-600 lg:max-w-prose"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                        >
                        {text}
                        </motion.p>
                    ))}
                    </motion.div>
                ) : (
                    <div className="flex flex-col gap-6 lg:w-1/2">
                    <h1 className="text-4xl uppercase font-semibold text-center lg:text-start">
                        About us
                    </h1>
                    {[
                        "We create personalized interior environments with a keen eye for detail. Our mission is to design spaces that combine character and functionality, whether for private homes or commercial environments.",
                        "At Lumari Interiors, we transform spaces to reflect our clients’ unique style and business needs. We work closely with you at every stage—from concept and planning to procurement, styling, and project completion—ensuring a seamless and tailored experience.",
                        "Whether your project is small or large, our services include concept development, space planning, material selection, interior design, lighting design, and styling.",
                        "Additionally, we collaborate with talented landscapers and gardeners, providing recommendations or support throughout the process to make your experience as effortless as possible.",
                    ].map((text, i) => (
                        <p key={i} className="text-lg text-gray-600 lg:max-w-prose">
                        {text}
                        </p>
                    ))}
                    </div>
                )}

                {animate ? (
                    <motion.div
                    className="relative md:w-1/2 hidden lg:block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    >
                    <Image
                        className="relative z-2"
                        width={500}
                        height={400}
                        src="/about/living-room.jpg"
                        alt="image of a living room"
                        layout="responsive"
                    />
                    <div className="absolute top-6 left-6 bg-orange-100 h-full w-full"></div>
                    </motion.div>
                ) : (
                    <div className="relative md:w-1/2 hidden lg:block">
                    <Image
                        className="relative z-2"
                        width={500}
                        height={400}
                        src="/about/living-room.jpg"
                        alt="image of a living room"
                        layout="responsive"
                    />
                    <div className="absolute top-6 left-6 bg-orange-100 h-full w-full"></div>
                    </div>
                )}

                </div>
            </div>
        </section>
    );
}