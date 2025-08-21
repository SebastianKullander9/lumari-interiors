export default function Contact() {
    return (
        <section className="w-screen h-screen flex items-center justify-center bg-white">
            <div className="max-w-3xl text-center px-6">
                <h1 className="text-4xl mb-6 font-semibold">Let’s create something extraordinary together</h1>
                <p className="text-lg text-gray-600 mb-12">We take on select projects in interior architecture and design. Reach out to start the conversation.</p>
                <a href="mailto:info@lumari.com "className="inline-block px-8 py-4 border border-black text-black text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300">
                    info@lumari.com
                </a>
            </div>
        </section>
    );
}