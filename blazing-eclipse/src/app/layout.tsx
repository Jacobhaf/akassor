import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hitta rätt a-kassa för ditt yrke",
    description: "Jämför a-kassor och hitta den som passar ditt yrke bäst.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sv" className="scroll-smooth">
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-grow bg-gray-50 text-gray-900">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
