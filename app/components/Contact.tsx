"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="w-screen h-[calc(100vh-64px)] flex justify-center lg:items-center bg-[var(--color-baby-powder)] px-4 lg:px-8 xl:px-16">
            <motion.div
                className="max-w-3xl text-center px-6"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.25 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h1
                    className="text-xs mb-6 font-semibold uppercase text-black pt-16"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                >
                    Contact us
                </motion.h1>
                <motion.p
                    className="text-xs md:text-sm text-gray-600 mb-12"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                >
                    We take on select projects in interior architecture and design. Reach out to start the conversation.
                </motion.p>
                <motion.a
                    href="mailto:info@lumari.se"
                    className="inline-block px-4 py-4 border-2 border-[var(--color-dusty-red)] text-[var(--color-dusty-red)] text-xs md:text-sm font-medium hover:bg-[var(--color-dusty-red)] hover:text-white transition-colors duration-300"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                >
                    info@lumari.se
                </motion.a>
            </motion.div>
        </section>
    );
}
