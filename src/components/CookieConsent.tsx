"use client";

import Script from "next/script";

export default function CookieConsent() {
    const CBID = "4e4fca99-a807-4906-bfa6-ede56a2a3e20";

    return (
        <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid={CBID}
            data-blockingmode="auto"
            strategy="afterInteractive"
        />
    );
}
