"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
    /*const [scrollY, setScrollY] = useState(0);*/

    /*useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        if (scrollY > 0) {
            document.body.style.backgroundColor = "var(--color-dusty-red)";
        } else {
            document.body.style.backgroundColor = "var(--color-baby-powder)";
        }
    }, [scrollY]);*/

    return (
        <nav className={`fixed w-screen h-16 z-3 transition-colors duration-300 `}>
            <div className={`max-w-screen-2xl mx-auto h-full relative flex justify-between items-center text-white transition-colors duration-300 px-4 lg:px-8 xl:px-16`}>   
                <div className="hidden lg:block">
                    <Link href="/our-work" className="py-4 pr-4 text-sm relative inline-block">
                        <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:bottom-[-8] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                        OUR WORK
                        </span>
                    </Link>
                    <Link href="/about" className="p-4 text-sm relative inline-block">
                        <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:bottom-[-8] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                        ABOUT
                        </span>
                    </Link>
                    <Link href="/contact" className="p-4 text-sm relative inline-block">
                        <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:bottom-[-8] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                        CONTACT
                        </span>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <HamburgerMenu />
                </div>

                <Link className="whitespace-nowrap text-lg font-semibold" href="/">
                    <h1 className="font-[var(--font-pppangaia)]">LUMARI INTERIORS</h1>
                </Link>
            </div>
        </nav>
    );
}

//