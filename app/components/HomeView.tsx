export default function HomeView() {
    return (
        <section>
            <div
                style={{ backgroundImage: "url('/home-background-no-arm.jpg')" }}
                className="w-screen h-screen bg-cover bg-center md:bg-fixed relative z-[-2]"
            >
                <div className="md:fixed w-screen h-screen flex items-center md:items-end z-[-1] text-[15vw] md:text-[10.8vw] bg-black/35">
                    <div className="w-full flex flex-col md:flex-row justify-between absolute leading-[1] md:leading-[0.55] p-8 text-[var(--color-baby-powder)]">
                        <h1>LUMARI</h1>
                        <h1>INTERIORS</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}