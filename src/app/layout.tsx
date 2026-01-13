import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

// 👉 Google Analytics & Vercel Analytics imports
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.valjaakassa.se'),
    title: {
        default: "Hitta rätt a-kassa för ditt yrke | Välja A-kassa",
        template: "%s | Välja A-kassa",
    },
    description: "Jämför Sveriges alla a-kassor och hitta rätt kassa för ditt yrke. Snabb jämförelse, tydliga rekommendationer och uppdaterad information.",
    openGraph: {
        type: "website",
        locale: "sv_SE",
        url: "https://www.valjaakassa.se",
        siteName: "Välja A-kassa",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Välja A-kassa - Hitta rätt a-kassa",
            },
        ],
    },
    icons: {
        icon: "/icon.svg",
        apple: "/icon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sv" className="scroll-smooth">
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-X0RQ33563X"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-X0RQ33563X');
                    `}
                </Script>
            </head>
            <body className={inter.className}>
                <CookieConsent />
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-grow bg-gray-50 text-gray-900">
                        {children}
                    </main>
                    <Footer />
                </div>

                {/* 👉 Vercel Analytics – placed just before </body> */}
                <Analytics />
            </body>
        </html>
    );
}
