"use client";
import { motion } from "framer-motion";

type AboutProps = {
    animate?: boolean;
};

export default function About({ animate = false }: AboutProps) {
    return (
        <section className="flex flex-col bg-[var(--color-baby-powder)]">
            <div className="">
                <div className="flex w-screen h-[calc(100vh-64px)] items-center justify-center gap-8 flex-col lg:flex-row sm:flex-col px-8">
                
                {animate ? (
                    <motion.div
                        className="flex flex-col gap-6"
                        initial="hidden"
                        whileInView="show"
                        transition={{ staggerChildren: 0.25 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                    <motion.h1
                        className="text-base uppercase font-semibold text-start text-[var(--color-dusty-red)]"
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
                        className="text-sm text-gray-600 lg:max-w-prose"
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
                    <h1 className="text-base uppercase font-semibold text-center lg:text-start">
                        About us
                    </h1>
                    {[
                        "We create personalized interior environments with a keen eye for detail. Our mission is to design spaces that combine character and functionality, whether for private homes or commercial environments.",
                        "At Lumari Interiors, we transform spaces to reflect our clients’ unique style and business needs. We work closely with you at every stage—from concept and planning to procurement, styling, and project completion—ensuring a seamless and tailored experience.",
                        "Whether your project is small or large, our services include concept development, space planning, material selection, interior design, lighting design, and styling.",
                        "Additionally, we collaborate with talented landscapers and gardeners, providing recommendations or support throughout the process to make your experience as effortless as possible.",
                    ].map((text, i) => (
                        <p key={i} className="text-sm text-gray-600 lg:max-w-prose">
                        {text}
                        </p>
                    ))}
                    </div>
                )}
                </div>
            </div>
        </section>
    );
}