export default function HomeView() {
    return(
        <section>
            <div style={{ backgroundImage: "url('/home-background.jpg')" }}
                 className="w-screen h-screen bg-cover bg-[center_70%] relative"
            >
                <div className="absolute w-screen h-screen flex justify-center items-center">
                    <h1 className="text-4xl text-white tracking-widest font-semibold">WE CREATE PERSONALITY</h1>
                </div>
            </div>
        </section>
)
}