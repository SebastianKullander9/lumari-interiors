"use client";
import { useState, useEffect } from "react";

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
        <nav className={`fixed w-screen h-16 z-10 ${scrollY > 0 ? "bg-white" : ""} transition-colors duration-300`}>
            <div className={`container mx-auto h-full relative flex items-center ${scrollY > 0 ? "text-black" : "text-white"} transition-colors duration-300`}>
                <ul className="flex space-x-4">
                    <li>PROJECTS</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>

                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl">
                    LUMARI INTERIORS
                </h1>
            </div>
        </nav>
    );
}