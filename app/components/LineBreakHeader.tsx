export default function LineBreakHeader({ title }: { title: string }) {
    return (
        <section className="w-screen h-[15vh] flex items-end justify-center">
            <h1 className="uppercase text-4xl font-semibold">{title}</h1>
        </section>
    );
}