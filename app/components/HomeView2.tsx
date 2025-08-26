"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import SlideshowDots from "./SlideshowDots";

const MotionImage = motion(Image);

const images = [
    "/home-background-no-arm.jpg",
    "/1.jpeg",
    "/9.jpeg",
    "/project-r-5.jpeg",
];

export default function HomeView2() {
    const [index, setIndex] = useState(0);
    const overlayControls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            overlayControls.start({
                opacity: [0, 0.05, 0],
                transition: { duration: 0.5, ease: "easeInOut" }
            });

            setIndex((prev) => (prev + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-screen h-[100dvh] relative overflow-hidden">
            {images.map((src, i) => {
                
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