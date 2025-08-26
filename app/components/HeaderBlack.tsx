"use client";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export default function HeaderBlack() {
    const pathname = usePathname();

    useEffect(() => {
        let bgColor = "var(--color-baby-powder)";

        if (pathname.startsWith("/our-work") || pathname.startsWith("/about") || pathname.startsWith("/contact")) {
            bgColor = "var(--color-dusty-red)";
        }

        document.body.style.backgroundColor = bgColor;
    }, [pathname]);

    return (
        <nav className={`w-screen mx-auto h-16 z-10 bg-[var(--color-dusty-red)] transition-colors duration-300`}>
            <div className={`h-full max-w-screen-2xl mx-auto relative flex justify-between items-center text-[var(--color-baby-powder)] transition-colors duration-300 px-4 lg:px-8 xl:px-16`}>
                <div className="hidden lg:block">
                    <Link href="/our-work" className="py-4 pr-4 text-xs relative inline-block">
                        <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:bottom-[-8] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                            OUR WORK
                        </span>
                    </Link>
                    <Link href="/about" className="p-4 text-xs relative inline-block">
                        <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:bottom-[-8] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                            ABOUT
                        </span>
                    </Link>
                    <Link href="/contact" className="p-4 text-xs relative inline-block">
                        <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:bottom-[-8] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                            CONTACT
                        </span>
                    </Link>
                </div>
                
                <div className="block lg:hidden">
                    <HamburgerMenu />
                </div>

                <Link className="whitespace-nowrap text-xl font-semibold " href="/">
                    <h1 className="font-[var(--font-pppangaia)]">LUMARI INTERIORS</h1>
                </Link>
            </div>
        </nav>
    );
}