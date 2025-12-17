"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import config from "./cookie-consent/Config";

export default function CookieConsentComponent() {
    useEffect(() => {
        CookieConsent.run(config);
    }, []);

    return null;
}
