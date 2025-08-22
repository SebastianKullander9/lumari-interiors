"use client";

import { motion } from "framer-motion";

type ContactProps = {
    animate?: boolean;
};

export default function Contact({ animate = false }: ContactProps) {
    if (animate) {
        return (
            <section className="w-screen h-screen flex items-center justify-center bg-white">
                <motion.div
                    className="max-w-3xl text-center px-6"
                    initial="hidden"
                    whileInView="show"
                    transition={{ staggerChildren: 0.25 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.h1
                        className="text-4xl mb-6 font-semibold"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        Let’s create something extraordinary together
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 mb-12"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        We take on select projects in interior architecture and design. Reach out to start the conversation.
                    </motion.p>
                    <motion.a
                        href="mailto:info@lumari.com"
                        className="inline-block px-8 py-4 border border-black text-black text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        info@lumari.com
                    </motion.a>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="w-screen h-screen flex items-center justify-center bg-white">
            <div className="max-w-3xl text-center px-6">
                <h1 className="text-4xl mb-6 font-semibold">Let’s create something extraordinary together</h1>
                <p className="text-lg text-gray-600 mb-12">
                    We take on select projects in interior architecture and design. Reach out to start the conversation.
                </p>
                <a
                    href="mailto:info@lumari.com"
                    className="inline-block px-8 py-4 border border-black text-black text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
                >
                    info@lumari.com
                </a>
            </div>
        </section>
    );
}