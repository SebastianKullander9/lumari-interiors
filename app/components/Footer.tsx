import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="h-[33vh] bg-orange-100">
            <div className="relative container mx-auto flex h-full items-center">
                <div className="w-1/3 flex flex-col items-center">
                    <h1 className="text-lg font-semibold">CONTACT US</h1>
                    <a className="text-sm text-gray-700" href="mailto:info@lumari.se">info@lumari.se</a>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                    <h1 className="text-lg font-semibold">FOLLOW OUR SOCIALS</h1>
                    <a
                        href="https://www.instagram.com/lumari_interiors/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                    >
                        <div className="flex items-center gap-1 text-gray-700"><FaInstagram /><p className="text-sm">instagram</p></div>
                    </a>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                    <h1 className="text-lg font-semibold">Navigation</h1>
                    <ul className="text-sm text-gray-700">
                        <li>
                            Projects
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <p className="text-xs text-gray-700">© {new Date().getFullYear()} Lumari Interiors. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}