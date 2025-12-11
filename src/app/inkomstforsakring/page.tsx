
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Clock, ShieldAlert, Briefcase } from "lucide-react";
import { akassor } from "@/data/akassor";

export const metadata = {
    title: "Inkomstförsäkring – komplett guide med a-kassa & fack 2025 | Välja A-kassa",
    description: "Lär dig hur inkomstförsäkring fungerar med a-kassan. När lönar det sig, vilka villkor gäller och hur ser det ut hos Unionen, Akademikernas, Kommunal, Handels, Seko m.fl.?",
};

export default function InkomstforsakringPage() {
    return (
        <main className="bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative bg-[#0B1B3F] text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/assets/images/inkomstforsakring-hero.png"
                        alt="Inkomstförsäkring Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Inkomstförsäkring – så funkar den med a-kassa och fackförbund
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        En inkomstförsäkring är ett extra skydd som fyller på ersättningen från a-kassan när du blir arbetslös. För dig som tjänar mer än a-kassans tak kan den vara avgörande.
                    </p>
                </div>
            </section>

            {/* 2. INTRO / WHAT IS IT */}
            <section className="py-16 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Vad är en inkomstförsäkring?</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        <strong>Enkelt förklarat:</strong> A-kassan ersätter upp till en viss lön (taket), med en viss procentsats, under ett visst antal dagar. Inkomstförsäkringen fyller på mellanskillnaden mellan a-kassans tak och din faktiska lön – upp till en viss maxlön och ett visst antal dagar.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                        <h3 className="font-bold text-lg mb-2 text-blue-900">Tre sätt att teckna:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-blue-800">
                            <li>Via fackförbundet (vanligast – ingår ofta i medlemskapet).</li>
                            <li>Via privat försäkringsbolag (specialiserade inkomstförsäkringar).</li>
                            <li>Gruppförsäkring via andra lösningar.</li>
                        </ul>
                    </div>
                </div>
                <div className="relative h-80 lg:h-[500px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/assets/images/inkomstforsakring-what.png"
                        alt="Diagram som visar hur inkomstförsäkring fyller glappet"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* 3. WHEN IS IT WORTH IT & HOW IT WORKS */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                        När är det värt att ha inkomstförsäkring?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* 1. Salary over ceiling */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mt-1">1. Du tjänar över a-kassans tak</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Om du tjänar runt eller över a-kassans tak (cirka 33–34 000 kr/mån före skatt) får du inte 80 % av hela din lön från a-kassan – bara 80 % upp till taket. En inkomstförsäkring täcker glappet mellan taket och din faktiska lön.
                            </p>
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <p className="font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2">Exempel (avrundat):</p>
                                <div className="space-y-1 font-mono text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <span>Lön:</span>
                                        <span>50 000 kr/mån</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>A-kassa:</span>
                                        <span>≈ 27 200 kr/mån</span>
                                    </div>
                                    <div className="flex justify-between text-green-600 font-bold bg-green-50 px-2 py-1 -mx-2 rounded">
                                        <span>Inkomstförsäkring:</span>
                                        <span>+ 12 800 kr</span>
                                    </div>
                                    <div className="flex justify-between font-bold pt-2 border-t border-gray-200 mt-1">
                                        <span>Total:</span>
                                        <span>≈ 80% av 50 000 kr</span>
                                    </div>
                                    <div className="text-xs text-gray-500 text-right mt-1">
                                        Dvs 40 000 kr med inkomstförsäkring.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Longer Duration */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mt-1">2. Du vill ha längre ersättning</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                En full a-kasseperiod är normalt 300 dagar. Många inkomstförsäkringar ger extra trygghet i t.ex. 100, 200 eller 300 dagar, och kan ofta förlängas med tillägg.
                            </p>
                        </div>

                        {/* 3. Vulnerable Industry */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                                    <ShieldAlert className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mt-1">3. Utsatt bransch</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Jobbar du inom handel, transport, eller kultur? Risken för arbetslöshet kan vara högre. Då är extra skydd för dina fasta kostnader (lån, hyra, barn) avgörande.
                            </p>
                        </div>

                        {/* 4. Specialist / Boss */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                                    <Briefcase className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mt-1">4. Chef, specialist eller egenföretagare</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2.5 flex-shrink-0"></span>
                                    <p className="text-gray-700">
                                        <strong>Chefer & specialister:</strong> Har ofta hög lön vilket skapar ett stort glapp utan försäkring.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2.5 flex-shrink-0"></span>
                                    <p className="text-gray-700">
                                        <strong>Egenföretagare:</strong> Kan behöva skydd vid konkurs eller likvidation.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.5 COMPARISON BLOCK */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Exempel på inkomstförsäkringar
                    </h2>
                    <div className="flex flex-col gap-4">
                        {/* JobbGarant */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                            <div className="w-full lg:w-48 flex justify-center lg:justify-start">
                                <span className="text-xl font-bold text-orange-500">JobbGarant™</span>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center lg:text-left">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max månadslön</p>
                                    <p className="font-bold text-gray-900 text-lg">100 000 kr</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättning</p>
                                    <p className="font-bold text-gray-900 text-lg">80 % <span className="text-sm font-normal text-gray-500">av lönen</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättningstid</p>
                                    <p className="font-bold text-gray-900 text-lg">264 <span className="text-sm font-normal text-gray-500">dagar</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Månadskostnad</p>
                                    <p className="font-bold text-gray-900 text-lg">82-995 <span className="text-sm font-normal text-gray-500">kr</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Akademikerförbundet SSR (Link to AEA) */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <Link href="/akassa/aea" className="absolute inset-0 z-10"><span className="sr-only">Läs mer om Akademikernas a-kassa</span></Link>
                            <div className="w-full lg:w-48 flex justify-center lg:justify-start">
                                <span className="text-lg font-bold text-gray-900">Akademikerförbundet SSR</span>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center lg:text-left">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max månadslön</p>
                                    <p className="font-bold text-gray-900 text-lg">100 000 kr</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättning</p>
                                    <p className="font-bold text-gray-900 text-lg">80 % <span className="text-sm font-normal text-gray-500">av lönen</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättningstid</p>
                                    <p className="font-bold text-gray-900 text-lg">140 <span className="text-sm font-normal text-gray-500">dagar</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Månadskostnad</p>
                                    <p className="font-bold text-gray-900 text-lg">146-260 <span className="text-sm font-normal text-gray-500">kr</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Sveriges Ingenjörer (Link to AEA) */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <Link href="/akassa/aea" className="absolute inset-0 z-10"><span className="sr-only">Läs mer om Akademikernas a-kassa</span></Link>
                            <div className="w-full lg:w-48 flex justify-center lg:justify-start">
                                <span className="text-lg font-bold text-gray-900">Sveriges Ingenjörer</span>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center lg:text-left">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max månadslön</p>
                                    <p className="font-bold text-gray-900 text-lg">100 000 kr</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättning</p>
                                    <p className="font-bold text-gray-900 text-lg">80 % <span className="text-sm font-normal text-gray-500">av lönen</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättningstid</p>
                                    <p className="font-bold text-gray-900 text-lg">150 <span className="text-sm font-normal text-gray-500">dagar</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Månadskostnad</p>
                                    <p className="font-bold text-gray-900 text-lg">65-265 <span className="text-sm font-normal text-gray-500">kr</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Kommunal */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <Link href="/akassa/kommunal" className="absolute inset-0 z-10"><span className="sr-only">Läs mer om Kommunals a-kassa</span></Link>
                            <div className="w-full lg:w-48 flex justify-center lg:justify-start relative h-10">
                                <Image src="/logos/kommunal.png" alt="Kommunal" fill className="object-contain object-left" />
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center lg:text-left">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max månadslön</p>
                                    <p className="font-bold text-gray-900 text-lg">45 000 kr</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättning</p>
                                    <p className="font-bold text-gray-900 text-lg">80 % <span className="text-sm font-normal text-gray-500">av lönen</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättningstid</p>
                                    <p className="font-bold text-gray-900 text-lg">150 <span className="text-sm font-normal text-gray-500">dagar</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Månadskostnad</p>
                                    <p className="font-bold text-gray-900 text-lg">138-495 <span className="text-sm font-normal text-gray-500">kr</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <Link href="/akassa/vision" className="absolute inset-0 z-10"><span className="sr-only">Läs mer om Vision a-kassa</span></Link>
                            <div className="w-full lg:w-48 flex justify-center lg:justify-start relative h-10">
                                <Image src="/logos/vision.png" alt="Vision" fill className="object-contain object-left" />
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center lg:text-left">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max månadslön</p>
                                    <p className="font-bold text-gray-900 text-lg">100 000 kr</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättning</p>
                                    <p className="font-bold text-gray-900 text-lg">80 % <span className="text-sm font-normal text-gray-500">av lönen</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättningstid</p>
                                    <p className="font-bold text-gray-900 text-lg">160 <span className="text-sm font-normal text-gray-500">dagar</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Månadskostnad</p>
                                    <p className="font-bold text-gray-900 text-lg">47–260 <span className="text-sm font-normal text-gray-500">kr</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Unionen */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <Link href="/akassa/unionen" className="absolute inset-0 z-10"><span className="sr-only">Läs mer om Unionens a-kassa</span></Link>
                            <div className="w-full lg:w-48 flex justify-center lg:justify-start relative h-10">
                                <Image src="/logos/unionen.png" alt="Unionen" fill className="object-contain object-left" />
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center lg:text-left">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max månadslön</p>
                                    <p className="font-bold text-gray-900 text-lg">60 000 kr</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättning</p>
                                    <p className="font-bold text-gray-900 text-lg">80 % <span className="text-sm font-normal text-gray-500">av lönen</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Max ersättningstid</p>
                                    <p className="font-bold text-gray-900 text-lg">150 <span className="text-sm font-normal text-gray-500">dagar</span></p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Månadskostnad</p>
                                    <p className="font-bold text-gray-900 text-lg">50–235 <span className="text-sm font-normal text-gray-500">kr</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. REQUIREMENTS & COMPARE */}
            <section className="py-16 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                <div className="relative h-96 lg:h-auto min-h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                    <Image
                        src="/assets/images/inkomstforsakring-compare.png"
                        alt="Jämförelse av villkor"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">När har man rätt till ersättning?</h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</span>
                            <div>
                                <h4 className="font-bold text-gray-900">Medlemskap i a-kassa</h4>
                                <p className="text-gray-600 text-sm">Du måste vara medlem i en svensk a-kassa för att inkomstförsäkringen ska gälla.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</span>
                            <div>
                                <h4 className="font-bold text-gray-900">Kvalifikationstid</h4>
                                <p className="text-gray-600 text-sm">Ofta krävs att du varit medlem i försäkringen i 12 månader innan arbetslösheten.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</span>
                            <div>
                                <h4 className="font-bold text-gray-900">Ofrivillig arbetslöshet</h4>
                                <p className="text-gray-600 text-sm">Gäller i regel vid uppsägning från arbetsgivaren, ej om du säger upp dig själv utan giltiga skäl.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h4 className="font-bold text-yellow-800 mb-1">A-kassa vs Inkomstförsäkring</h4>
                        <p className="text-sm text-yellow-800">
                            <strong>A-kassa:</strong> Grundtrygghet upp till taket. <br />
                            <strong>Inkomstförsäkring:</strong> Fyller på över taket. Kräver a-kassa i botten.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. A-KASSA SPECIFIC SECTIONS */}
            <section className="bg-white py-16 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Inkomstförsäkring hos olika a-kassor & fack</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                        Här går vi igenom vad som gäller för några av branschens största aktörer. Kom ihåg att inkomstförsäkringen oftast ligger hos fackförbundet, kopplat till a-kassan.
                    </p>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                        {/* Unionen */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/unionen.png" alt="Unionen" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Unionens</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                För sökningen "inkomstförsäkring Unionens a-kassa hur funkar det": Unionen har en av Sveriges mest populära inkomstförsäkringar för tjänstemän. Den ingår i fackmedlemskapet och kompletterar ersättningen från <Link href="/akassa/unionen" className="text-blue-600 hover:underline">Unionens a-kassa</Link>.
                            </p>
                            <p className="text-sm text-gray-500">
                                Täcker ofta löner upp till höga belopp (t.ex. 60 000 kr/mån i basutförande) och kan förlängas med tilläggsförsäkring.
                            </p>
                        </div>

                        {/* Akademikernas */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/aea.png" alt="AEA" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Akademikernas</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Inkomstförsäkring kopplad till <Link href="/akassa/aea" className="text-blue-600 hover:underline">Akademikernas a-kassa (AEA)</Link> går oftast via Saco-förbund som Akavia, Sveriges Ingenjörer eller SSR.
                            </p>
                            <p className="text-sm text-gray-500">
                                Dessa försäkringar är skräddarsydda för akademiker med högre lönenivåer och erbjuder ofta marknadens bästa villkor gällande kvalifikationstid och tak.
                            </p>
                        </div>

                        {/* Kommunal */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/kommunal.png" alt="Kommunal" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Kommunals</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Många medlemmar i <Link href="/akassa/kommunal" className="text-blue-600 hover:underline">Kommunals a-kassa</Link> tror att de tjänar för lite för inkomstförsäkring, men taket passeras snabbt med ob-tillägg och övertid.
                            </p>
                            <p className="text-sm text-gray-500">
                                Kommunals inkomstförsäkring ingår i fackavgiften och ger extra trygghet för t.ex. undersköterskor och barnskötare.
                            </p>
                        </div>

                        {/* Seko */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/seko.png" alt="Seko" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Seko</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                För medlemmar i <Link href="/akassa/seko" className="text-blue-600 hover:underline">Seko a-kassa</Link>, t.ex. lokförare och brevbärare, erbjuder Seko en inkomstförsäkring som fyller på ersättningen. Viktigt för dig med rörliga tillägg som höjer snittlönen.
                            </p>
                        </div>

                        {/* Alfa-kassan */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/alfa.png" alt="Alfa" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Alfa-kassan</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                <Link href="/akassa/alfa" className="text-blue-600 hover:underline">Alfa-kassan</Link> har ingen egen inkomstförsäkring. Är du medlem här får du vända dig till privata försäkringsbolag eller se om ditt fack godkänner Alfa-kassan som grund.
                            </p>
                        </div>

                        {/* Handels */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/handels.png" alt="Handels" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Handels</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Butiksanställda och lagerarbetare i <Link href="/akassa/handels" className="text-blue-600 hover:underline">Handels a-kassa</Link> kan via facket få ersättning som täcker upp när lönen överstiger taket, vilket är vanligt vid heltidstjänster i handeln.
                            </p>
                        </div>

                        {/* Ledarna */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/ledarna.png" alt="Ledarna" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Ledarnas</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Chefer har ofta högst lön och störst fallhöjd. <Link href="/akassa/ledarna" className="text-blue-600 hover:underline">Ledarnas a-kassa</Link> kombineras med Ledarnas inkomstförsäkring som har höga tak och långa ersättningsperioder anpassade för karriärväxling.
                            </p>
                        </div>

                        {/* IF Metall */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/ifmetall.png" alt="IF Metall" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring IF Metalls</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Industriarbetare drabbas ofta av varsel. För medlemmar i <Link href="/akassa/ifmetall" className="text-blue-600 hover:underline">IF Metalls a-kassa</Link> ingår inkomstförsäkring i fackavgiften, vilket ger trygghet vid konjunktursvängningar.
                            </p>
                        </div>

                        {/* Vision */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/vision.png" alt="Vision" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Vision</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                För dig i <Link href="/akassa/vision" className="text-blue-600 hover:underline">Vision a-kassa</Link> är inkomstförsäkringen via Vision en viktig förmån. Den täcker ofta hela din lön upp till höga nivåer och skyddar din levnadsstandard som tjänsteman i välfärden.
                            </p>
                        </div>

                        {/* Byggnads */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 relative flex-shrink-0">
                                    <Image src="/logos/byggnads.png" alt="Byggnads" fill className="object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Inkomstförsäkring Byggnads</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Byggbranschen är ryckig. Som medlem i <Link href="/akassa/byggnads" className="text-blue-600 hover:underline">Byggnads a-kassa</Link> och facket får du ett skydd som täcker ackordslöner och övertid när projekten tar slut.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-gray-500 italic">
                            * Notera att villkor för inkomstförsäkringar ändras löpande. Kontakta respektive fackförbund eller försäkringsbolag för exakta och dagsaktuella villkor.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. WHO IS IT BEST FOR */}
            <section className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Vilken inkomstförsäkring är bäst för dig?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Tjänstemän</h3>
                            <p className="text-sm text-gray-600">Unionen, Vision och ST är populära val med breda försäkringar som täcker de flesta kontorsyrken.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Akademiker</h3>
                            <p className="text-sm text-gray-600">AEA (a-kassan) i kombination med Saco-förbund ger ofta marknadens högsta tak och längsta ersättningstid.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Chefer</h3>
                            <p className="text-sm text-gray-600">Ledarna specialiserar sig på chefer och erbjuder karriärcoachning samt höga ersättningsnivåer.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Egenföretagare</h3>
                            <p className="text-sm text-gray-600">Småföretagarnas (SmåA) och Unionen Egenföretagare erbjuder lösningar som täcker även vid konkurs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Vanliga frågor</h2>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Måste jag vara med i a-kassan för att få inkomstförsäkring?</h4>
                        <p className="text-gray-600 mt-2">Ja, i praktiken alltid. Inkomstförsäkringen betalas bara ut om du samtidigt får ersättning från din a-kassa.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Gäller inkomstförsäkring om jag säger upp mig själv?</h4>
                        <p className="text-gray-600 mt-2">Som huvudregel nej. Den gäller vid ofrivillig arbetslöshet. Undantag finns vid synnerliga skäl (t.ex. hälsoskäl styrkt av läkare).</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Kan jag ha inkomstförsäkring utan fackförbund?</h4>
                        <p className="text-gray-600 mt-2">Ja, det finns privata alternativ (t.ex. via Accept) som tecknas separat. De kräver dock fortfarande att du är med i en a-kassa.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Behöver jag detta om jag tjänar under 33 000 kr?</h4>
                        <p className="text-gray-600 mt-2">Just nu täcker a-kassan upp till ca 33 000 kr. Tjänar du under det får du oftast 80% ändå. Men lön och tak ändras, så det kan vara en investering för framtiden.</p>
                    </div>
                </div>
            </section>

            {/* 8. CTA */}
            <section className="bg-[#0B1B3F] py-16 text-center text-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Redo att säkra din inkomst?</h2>
                    <p className="text-blue-100 text-lg mb-10">
                        Börja med att välja rätt a-kassa. Utan a-kassa fungerar ingen inkomstförsäkring.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/yrken"
                            className="bg-green-500 text-white font-bold py-4 px-8 rounded-full hover:bg-green-600 transition-colors shadow-lg text-lg"
                        >
                            Hitta a-kassa för ditt yrke
                        </Link>
                        <Link
                            href="/"
                            className="bg-white text-[#0B1B3F] font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg"
                        >
                            Se alla a-kassor
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
