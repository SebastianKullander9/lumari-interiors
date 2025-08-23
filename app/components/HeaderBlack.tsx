"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function HeaderBlack() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <nav className={`w-screen h-16 z-10 bg-[var(--color-baby-powder)] transition-colors duration-300`}>
            <div className={`h-full relative flex justify-between items-center px-8 text-black transition-colors duration-300`}>
                <div className="hidden lg:block">
                    <Link className="py-4 pr-4 text-xs" href="/our-work">OUR WORK</Link>
                    <Link className="p-4 text-xs" href="/about">ABOUT</Link>
                    <Link className="p-4 text-xs" href="/contact">CONTACT</Link>
                </div>
                <div className="block lg:hidden">
                    <HamburgerMenu />
                </div>

                <Link className="whitespace-nowrap text-xl font-semibold" href="/">
                    <h1 className="font-[var(--font-pppangaia)]">LUMARI INTERIORS</h1>
                </Link>
            </div>
        </nav>
    );
}