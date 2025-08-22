export default function HomeView() {
    return(
        <section>
            <div style={{ backgroundImage: "url('/home-background.jpg')" }}
                 className="w-screen h-screen bg-cover bg-[center_70%] relative"
            >
                <div className="absolute w-screen h-screen flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center sm:block sm:w-[60vw] md:w-[80vw] lg:w-[60vw]">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white tracking-widest font-semibold">WE CREATE</h1>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white tracking-widest font-semibold flex justify-end">PERSONALITY</h1>
                    </div>
                </div>
            </div>
        </section>
)
}