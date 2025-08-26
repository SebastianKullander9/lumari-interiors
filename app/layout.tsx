import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "LUMARI INTERIORS",
    description: "Discover inspired interior design tailored to you. From modern makeovers to cozy spaces, Lumari Interiors brings beauty, comfort, and creativity into every project.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
