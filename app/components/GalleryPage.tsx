"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";
import HeaderBlack from "@/app/components/HeaderBlack";
import Footer from "@/app/components/Footer";

export interface Project {
    name: string;
    textShort: string;
    textLong: string;
    location: string;
    imageCarousel: string;
    bigImage: string;
    smallImage: string;
    gallery: string[];
    slug: string;
    bigImageUrl: string;
    smallImageUrl: string;
}

export default function ProjectPage({ projects, slug }: { projects: Project[], slug: string }) {
    function getProjectGalleryAndName(slug: string): { images: string[]; name: string } {
        const project = projects.find((p) => p.slug === slug);
        if (!project) {
            return { images: [], name: "" };
        }

        return {
            images: project.gallery,
            name: project.name,
        };
    }

    const { images, name } = getProjectGalleryAndName(slug);

    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        640: 1,
    };

    return (
        <section>
            <HeaderBlack />
            <div className="w-screen max-w-screen-2xl mx-auto min-h-screen bg-[var(--color-baby-powder)] px-4 lg:px-8 xl:px-16">
                <div className="w-full py-3">
                    <h1 className="uppercase text-sm text-black font-semibold">{name}</h1>
                </div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex -ml-8 w-auto"
                    columnClassName="pl-8 bg-clip-padding"
                >
                    {images.map((src: string, i:number) => (
                        <div key={i} className="mb-4 md:mb-8">
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