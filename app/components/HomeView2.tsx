"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import SlideshowDots from "./SlideshowDots";

const MotionImage = motion(Image);

const images = [
    "/1.jpeg",
    "/6.jpeg",
    "/project-s.jpeg",
    "/project-r-5.jpeg",
    "/project-r-3.jpeg"
];

export default function HomeView2() {
    const [index, setIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const overlayControls = useAnimation();

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            overlayControls.start({
                opacity: [0, 0.23, 0],
                transition: { duration: 1.85, ease: "easeInOut" }
            });

            setIndex((prev) => (prev + 1) % images.length);
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-screen h-screen relative overflow-hidden">
            {images.map((src, i) => {
                const isVisible = i === index || (i === (index + 1) % images.length && isLargeScreen);
                console.log(isVisible)

                return <MotionImage
                    key={src}
                    src={src}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    initial={false}
                    animate={{
                        opacity: i === index ? 1 : 0,
                    }}
                    transition={{ duration: 2.1 }}
                    className="absolute inset-0"
                />
            })}

            <motion.div
                className="absolute inset-0 bg-white pointer-events-none"
                animate={overlayControls}
                initial={{ opacity: 0 }}
            />

            <SlideshowDots images={images} indexProp={index} />
        </section>
    );
}