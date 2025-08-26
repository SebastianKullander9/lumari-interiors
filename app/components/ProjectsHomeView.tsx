import Image from "next/image";
import HeaderBlack from "../components/HeaderBlack";
import Footer from "../components/Footer";
import Link from "next/link";

const tempProjects = [
    {
        name: "project lili",
        textShort: "A luxury villa built entirely from scratch",
        image: "/testImages/1.jpeg",
        slug: "project-lili"
    },
    {
        name: "project lili",
        textShort: "A real estate office designed with premium furnishings.",
        image: "/testImages/9.jpeg",
        slug: "project-lili"
    },
    {
        name: "project s",
        textShort: "An apartment in the heart of stockholm.",
        image: "/testImages/project-r-5.jpeg",
        slug: "project-s"
    },
    {
        name: "project r",
        textShort: "An apartment in the heart of stockholm.",
        image: "/testImages/project-s-cropped.jpeg",
        slug: "project-r"
    }
]

export default function ProjectsHomeView() {
    return (
        <div className="w-screen min-h-screen bg-[var(--color-baby-powder)] lg:pt-4 pb-6 px-4 lg:px-8 xl:px-16">
            <div className="max-w-screen-2xl mx-auto">
                <h1 className="text-base font-semibold text-[var(--color-dusty-red)] py-2 pt-6 lg:pb-4">OUR WORK</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                    {tempProjects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`} key={index} className="cursor-pointer">
                            <div  className="aspect-[3/4] w-full relative">
                                <Image src={project.image} alt="" fill layout="object-cover"/>
                            </div>
                            <div className="pt-1 flex justify-between flex-col md:flex-row">
                                <h1 className="text-sm text-[var(--color-dusty-red)] font-semibold uppercase">{project.name}</h1>
                                <p className="text-xs text-gray-600">{project.textShort}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}