import { CookieConsentConfig } from "vanilla-cookieconsent";

const config: CookieConsentConfig = {
    revision: 1,
    guiOptions: {
        consentModal: {
            layout: 'bar', position: 'bottom',
            equalWeightButtons: true,
            flipButtons: false,
        },
        preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false,
        },
    },
    categories: {
        necessary: {
            readOnly: true,
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/,
                    },
                    {
                        name: '_gid',
                    },
                ],
            },
        },
    },
    language: {
        default: 'sv',
        autoDetect: 'browser',
        translations: {
            sv: {
                consentModal: {
                    title: 'Vi använder kakor',
                    description:
                        'Vi använder kakor för att förbättra din upplevelse på vår webbplats. Läs mer i vår <a href="/cookies" class="cc-link">cookiepolicy</a>.',
                    acceptAllBtn: 'Godkänn alla',
                    acceptNecessaryBtn: 'Neka',
                    showPreferencesBtn: 'Inställningar',
                },
                preferencesModal: {
                    title: 'Inställningar för kakor',
                    acceptAllBtn: 'Godkänn alla',
                    acceptNecessaryBtn: 'Neka alla',
                    savePreferencesBtn: 'Spara inställningar',
                    closeIconLabel: 'Stäng',
                    sections: [
                        {
                            title: 'Nödvändiga kakor',
                            description:
                                'Dessa kakor är nödvändiga för att webbplatsen ska fungera korrekt.',
                            linkedCategory: 'necessary',
                        },
                        {
                            title: 'Analys',
                            description:
                                'Dessa kakor hjälper oss att förstå hur besökare använder webbplatsen.',
                            linkedCategory: 'analytics',
                        },
                    ],
                },
            },
        },
    },
};

export default config;

