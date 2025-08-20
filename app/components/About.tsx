import Image from "next/image";

export default function About() {
    return (
        <section className="flex flex-col">
            <div className=" bg-white">
                <div className="container mx-auto flex flex-row w-screen h-screen items-center">
                    <div className="w-1/2 flex flex-col gap-6">
                        <h1 className="text-4xl uppercase">About us</h1>
                        <p className="text-sm text-gray-700 max-w-prose">
                            We create personalized interior environments with a keen eye for detail. 
                            Our mission is to design spaces that combine character and functionality, 
                            whether for private homes or commercial environments. At Lumari Interiors, 
                            we transform spaces to reflect our clients’ unique style and business needs. 
                            We work closely with you at every stage—from concept and planning to procurement, 
                            styling, and project completion—ensuring a seamless and tailored experience. 
                            Whether your project is small or large, our services include concept development, 
                            space planning, material selection, interior design, lighting design, and styling. 
                            Additionally, we collaborate with talented landscapers and gardeners, 
                            providing recommendations or support throughout the process to make your experience as 
                            effortless as possible.
                        </p>
                    </div>
                    <div className="relative w-1/2">
                        <Image className="relative z-2" width={500} height={400} layout="responsive" src="/about/living-room.jpg" alt="image of a living room" />
                        <div className="absolute top-6 left-6 bg-orange-100 h-full w-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}