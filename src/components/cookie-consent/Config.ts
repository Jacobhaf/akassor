const config = {
    revision: 1, // Force re-consent if config changes
    gui_options: {
        consent_modal: {
            layout: 'bar',
            position: 'bottom',
            equal_weight_buttons: true,
            flip_buttons: false,
        },
        preferences_modal: {
            layout: 'box',
            position: 'right',
            equal_weight_buttons: true,
            flip_buttons: false,
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
                consent_modal: {
                    title: 'Vi använder kakor',
                    description:
                        'Vi använder kakor för att förbättra din upplevelse på vår webbplats. Läs mer i vår <a href="/cookies" class="cc-link">cookiepolicy</a>.',
                    primary_btn: {
                        text: 'Godkänn alla',
                        role: 'accept_all',
                    },
                    secondary_btn: {
                        text: 'Neka',
                        role: 'accept_necessary',
                    },
                },
                preferences_modal: {
                    title: 'Inställningar för kakor',
                    accept_all_btn: 'Godkänn alla',
                    reject_all_btn: 'Neka alla',
                    save_btn: 'Spara inställningar',
                    close_btn_label: 'Stäng',
                    sections: [
                        {
                            title: 'Nödvändiga kakor',
                            description:
                                'Dessa kakor är nödvändiga för att webbplatsen ska fungera korrekt.',
                            linked_category: 'necessary',
                        },
                        {
                            title: 'Analys',
                            description:
                                'Dessa kakor hjälper oss att förstå hur besökare använder webbplatsen.',
                            linked_category: 'analytics',
                        },
                    ],
                },
            },
        },
    },
} as any;

export default config;
