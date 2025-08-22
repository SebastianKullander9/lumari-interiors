"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
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
        <nav className={`fixed w-screen h-16 z-3 ${scrollY > 0 ? "bg-white" : ""} transition-colors duration-300`}>
            <div className={`lg:container mx-auto h-full relative flex items-center ${scrollY > 0 ? "text-black" : "text-white"} transition-colors duration-300`}>   
                <div className="hidden lg:block">
                    <Link className="p-4 text-lg" href="/our-work">OUR WORK</Link>
                    <Link className="p-4 text-lg" href="/about">ABOUT</Link>
                    <Link className="p-4 text-lg" href="/contact">CONTACT</Link>
                </div>
                <div className="block lg:hidden">
                    <HamburgerMenu />
                </div>

                <Link className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xl font-semibold" href="/">
                    <h1>
                        LUMARI INTERIORS
                    </h1>
                </Link>
            </div>
        </nav>
    );
}

//