import Image from "next/image";

export default function About() {
    return (
        <section className="flex flex-col">
            <div className="">
                <div className="container mx-auto flex w-screen h-screen items-center gap-8 flex-col lg:flex-row  sm:flex-col px-4 justify-center">
                    <div className="flex flex-col gap-6  lg:w-1/2">
                        <h1 className="text-4xl uppercase font-semibold text-center lg:text-start">About us</h1>
                        <p className="text-lg text-gray-600 lg:max-w-prose">
                            We create personalized interior environments with a keen eye for detail. Our mission is to design spaces that combine character and functionality, whether for private homes or commercial environments.
                        </p>
                        <p className="text-lg text-gray-600 lg:max-w-prose">
                            At Lumari Interiors, we transform spaces to reflect our clients’ unique style and business needs. We work closely with you at every stage—from concept and planning to procurement, styling, and project completion—ensuring a seamless and tailored experience.
                        </p>
                        <p className="text-lg text-gray-600 lg:max-w-prose">
                            Whether your project is small or large, our services include concept development, space planning, material selection, interior design, lighting design, and styling.
                        </p>
                        <p className="text-lg text-gray-600 lg:max-w-prose">
                            Additionally, we collaborate with talented landscapers and gardeners, providing recommendations or support throughout the process to make your experience as effortless as possible.
                        </p>
                    </div>
                    <div className="relative md:w-1/2 hidden lg:block">
                        <Image className="relative z-2" width={500} height={400} layout="responsive" src="/about/living-room.jpg" alt="image of a living room" />
                        <div className="absolute top-6 left-6 bg-orange-100 h-full w-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}