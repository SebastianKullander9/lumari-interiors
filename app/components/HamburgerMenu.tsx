import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <Hamburger
                toggled={open}
                toggle={setOpen}
                size={26}
                label="Show menu"
                distance="lg"
            />

            <AnimatePresence>
                {open && (
                <>
                    <motion.button
                    key="overlay"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    />

                    <motion.nav
                    id="mobile-drawer"
                    key="drawer"
                    role="dialog"
                    aria-modal="true"
                    className="fixed right-0 top-0 h-dvh w-[55vw] z-10 text-black max-w-xs
                                bg-white/75 backdrop-blur-xl
                                shadow-2xl p-8 pt-16 flex flex-col"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ damping: 30 }}
                    >
                    <div className="absolute right-0 top-0">
                        <Hamburger toggled={open} toggle={setOpen} size={26} rounded />
                    </div>

                    <ul className="space-y-8 text-lg">
                        <li>
                            <Link className="hover:underline underline-offset-4" href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline underline-offset-4" href="/our-work">
                                Our work
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline underline-offset-4" href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline underline-offset-4" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-auto text-sm text-gray-600 flex justify-center">
                        © {new Date().getFullYear()} Lumari Interiors
                    </div>
                    </motion.nav>
                </>
                )}
            </AnimatePresence>
        </div>
    );
}