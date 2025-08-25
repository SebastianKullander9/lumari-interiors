import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute top-[6] left-[20] z-50">
        <Hamburger
            toggled={open}
            toggle={setOpen}
            size={26}
            label="Show menu"
            distance="lg"
        />

        <AnimatePresence>
            {open && (
            <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-[var(--color-dusty-red)]/75 backdrop-blur-xl z-40 flex flex-col items-center justify-center p-8"
            >
                <div className="absolute top-6 right-6 text-[var(--color-baby-powder)]">
                <Hamburger toggled={open} toggle={setOpen} size={26} rounded />
                </div>
                <ul className="space-y-8 text-lg text-[var(--color-baby-powder)] text-center">
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
                        Our work
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
                <div className="mt-16 text-sm text-[var(--color-baby-powder)] absolute bottom-0 pb-8">
                © {new Date().getFullYear()} Lumari Interiors
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
}
