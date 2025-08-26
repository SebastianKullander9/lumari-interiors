import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="md:w-screen bg-[var(--color-dusty-red)]">
            <div className="relative max-w-screen-2xl mx-auto flex flex-col sm:flex-row h-full items-center justify-between md:pt-8 px-4 lg:px-8 xl:px-16">
                <div className=" pt-8 flex flex-col items-center">
                    <h1 className="text-xs md:text-base font-semibold text-[var(--color-baby-powder)] pb-4">CONTACT US</h1>
                    <a className="text-xs text-[var(--color-d5a9ab)] hover:text-[var(--color-baby-powder)]" href="mailto:info@lumari.se">info@lumari.se</a>
                </div>
                <div className="pt-8 flex flex-col items-center">
                    <h1 className="text-xs md:text-base font-semibold text-[var(--color-baby-powder)] pb-4">FOLLOW OUR SOCIALS</h1>
                    <a
                        href="https://www.instagram.com/lumari_interiors/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                    >
                        <div className="flex items-center gap-1 text-[var(--color-d5a9ab)] hover:text-[var(--color-baby-powder)]"><FaInstagram size={20} /><p className="text-sm">instagram</p></div>
                    </a>
                </div>
                <div className="pt-8 flex flex-col items-center">
                    <h1 className="text-xs md:text-base font-semibold text-[var(--color-baby-powder)] pb-4">NAVIGATION</h1>
                    <ul className="text-sm text-[var(--color-d5a9ab)] flex flex-col items-center">
                        <Link href="/our-work">
                            <li className="text-xs hover:text-[var(--color-baby-powder)] pb-2 cursor-pointer">
                                Our work
                            </li>
                        </Link>
                        <Link href="/about">
                            <li className="text-xs hover:text-[var(--color-baby-powder)] pb-2 cursor-pointer">
                                About
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className="text-xs hover:text-[var(--color-baby-powder)] cursor-pointer">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>
                    <div className="pt-8 flex justify-center pb-8 md:pb-4 md:pt-16">
                    <p className="text-xs text-[var(--color-d5a9ab)]">© {new Date().getFullYear()} Lumari Interiors. All rights reserved.</p>
                </div>
        </footer>
    )
}