"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import SlideshowDots from "./SlideshowDots";

const MotionDiv = motion.div;

const images = [
    ["/1.jpeg","/6.jpeg"],
    ["/project-r-3.jpeg","/project-r-5.jpeg"],
    ["/project-s.jpeg","/home-background-no-arm.jpg"]
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
    }, [overlayControls]);

    return (
        <section className="w-screen h-screen relative overflow-hidden">
            {images.map((imagePair, i) => {
                return <MotionDiv
                    key={i}
                    initial={false}
                    animate={{
                        opacity: i === index ? 1 : 0,
                    }}
                    transition={{ duration: 2.1 }}
                    className="absolute inset-0 w-full h-full flex flex-row"
                >
                    <div className="w-1/2 h-full relative">
                        <Image
                            src={imagePair[0]}
                            alt=""
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="w-1/2 h-full relative">
                        <Image
                            src={imagePair[1]}
                            alt=""
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </MotionDiv>
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