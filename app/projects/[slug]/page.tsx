"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Masonry from "react-masonry-css";
import HeaderBlack from "@/app/components/HeaderBlack";
import Footer from "@/app/components/Footer";

const imgUrl = (project: string, imgName: string) =>
    `/project-gallery/${project}/${imgName}.jpeg`;

const galleries: Record<string, string[]> = {
    s: [imgUrl("s", "1"), imgUrl("s", "2"), imgUrl("s", "3")],
    lili: [
        imgUrl("lili", "1"),
        imgUrl("lili", "2"),
        imgUrl("lili", "3"),
        imgUrl("lili", "4"),
        imgUrl("lili", "5"),
        imgUrl("lili", "6"),
        imgUrl("lili", "7"),
        imgUrl("lili", "8"),
        imgUrl("lili", "9"),
        imgUrl("lili", "10"),
    ],
    r: [imgUrl("r", "1"), imgUrl("r", "2"), imgUrl("r", "3"), imgUrl("r", "4"), imgUrl("r", "5")],
};

export default function ProjectPage() {
    const params = useParams();
    const slug = params?.slug as string;

    if (!slug) return null;

    const images = galleries[slug] || [];

    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        640: 1,
    };

    return (
        <section>
            <HeaderBlack />
            <div className="w-screen min-h-screen px-8 pb-8">
                <div className="w-full h-[15vh] flex flex-col items-center justify-center">
                    <p className="text-gray-600">GALLERY</p>
                    <h1 className="uppercase text-3xl font-semibold">project {slug}</h1>
                </div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex -ml-4 w-auto"
                    columnClassName="pl-4 bg-clip-padding"
                >
                    {images.map((src, i) => (
                        <div key={i} className="mb-4">
                            <Image
                                src={src}
                                alt={`${slug} image ${i}`}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
            <Footer />
        </section>
    );
}