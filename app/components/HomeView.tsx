export default function HomeView() {
    return (
        <section>
            <div
                style={{ backgroundImage: "url('/home-background-no-arm.jpg')" }}
                className="w-screen h-screen bg-cover bg-center md:bg-fixed relative z-[-2]"
            >
                <div className="md:fixed w-screen h-screen flex items-center md:items-end z-[-1] text-[15vw] md:text-[10.8vw] bg-black/35">
                </div>
            </div>
        </section>
    );
}