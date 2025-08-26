import Image from "next/image";
import HeaderBlack from "../components/HeaderBlack";
import Footer from "../components/Footer";

const tempProjects = [
    {
        name: "project lili",
        textShort: "A luxury villa built entirely from scratch",
        image: "/testImages/1.jpeg"
    },
    {
        name: "project lili",
        textShort: "A real estate office designed with premium furnishings.",
        image: "/testImages/9.jpeg"
    },
    {
        name: "project s",
        textShort: "An apartment in the heart of stockholm.",
        image: "/testImages/project-r-5.jpeg"
    },
    {
        name: "project r",
        textShort: "An apartment in the heart of stockholm.",
        image: "/testImages/project-s-cropped.jpeg"
    }
]

export default function Home() {
    return (
        <>
            <HeaderBlack />
                <div className="w-screen min-h-screen bg-[var(--color-baby-powder)] p-8 lg:p-16 pt-8 lg:pt-8">
                    <div className="max-w-screen-2  xl mx-auto ">
                        <h1 className="text-base font-semibold text-[var(--color-dusty-red)] pb-4">OUR WORK</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {tempProjects.map((project, index) => (
                                <div key={index}>
                                    <div  className="aspect-[3/4] w-full relative">
                                        <Image src={project.image} alt="" fill layout="object-cover"/>
                                    </div>
                                    <div className="pt-1 flex justify-between flex-col md:flex-row">
                                        <h1 className="text-sm font-semibold uppercase">{project.name}</h1>
                                        <p className="text-xs text-gray-600">{project.textShort}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            <HeaderBlack />
        </>

    );
}