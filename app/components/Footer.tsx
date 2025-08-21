import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="md:w-screen bg-orange-100">
            <div className="relative container mx-auto flex flex-col md:flex-row h-full items-center md:pt-8">
                <div className="w-full md:w-1/3  pt-8 flex flex-col items-center">
                    <h1 className="text-xl font-semibold">CONTACT US</h1>
                    <a className="text-lg text-gray-600 hover:text-gray-800" href="mailto:info@lumari.se">info@lumari.se</a>
                </div>
                <div className="w-full md:w-1/3 pt-8 flex flex-col items-center">
                    <h1 className="text-xl font-semibold">FOLLOW OUR SOCIALS</h1>
                    <a
                        href="https://www.instagram.com/lumari_interiors/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                    >
                        <div className="flex items-center gap-1 text-gray-600 hover:text-gray-800"><FaInstagram size={20} /><p className="text-lg">instagram</p></div>
                    </a>
                </div>
                <div className="w-full md:w-1/3 pt-8 flex flex-col items-center">
                    <h1 className="text-xl font-semibold">Navigation</h1>
                    <ul className="text-sm text-gray-600">
                        <Link href="/our-work">
                            <li className="text-lg hover:text-gray-800 cursor-pointer">
                                Our work
                            </li>
                        </Link>
                        <Link href="/about">
                            <li className="text-lg hover:text-gray-800 cursor-pointer">
                                About
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className="text-lg hover:text-gray-800 cursor-pointer">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>
                    <div className="pt-8 flex justify-center pb-8 md:pb-4 md:pt-16">
                    <p className="text-xs text-gray-700">© {new Date().getFullYear()} Lumari Interiors. All rights reserved.</p>
                </div>
        </footer>
    )
}