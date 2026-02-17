"use client";

import { useEffect } from "react";
import { run } from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import config from "./cookie-consent/Config";

export default function CookieConsentComponent() {
    useEffect(() => {
        run(config);
    }, []);

    return null;
}

