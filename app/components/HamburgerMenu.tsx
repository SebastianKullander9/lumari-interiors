import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`absolute top-[6] left-[9] z-50 ${open ? "text-black" : "text-[var(--color-baby-powder)]"}`}>
                <Hamburger
                    toggled={open}
                    toggle={setOpen}
                    size={26}
                    label="Show menu"
                    distance="lg"
                />
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 bg-white/75 backdrop-blur-xs flex flex-col items-center justify-center p-8 z-40"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setOpen(false);
                            }
                        }}
                    >
                        <ul className="space-y-8 text-lg text-black text-center">
                            <li>
                                <Link
                                    className="hover:underline underline-offset-4"
                                    href="/"
                                    onClick={() => setOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline underline-offset-4"
                                    href="/our-work"
                                    onClick={() => setOpen(false)}
                                >
                                    Our creations
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline underline-offset-4"
                                    href="/about"
                                    onClick={() => setOpen(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline underline-offset-4"
                                    href="/contact"
                                    onClick={() => setOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-16 text-sm text-black absolute bottom-0 pb-8">
                            © {new Date().getFullYear()} Lumari Interiors
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}