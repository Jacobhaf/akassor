"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courts } from "../data/courts";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCourts = useMemo(() => {
    return courts.filter((court) =>
      court.name.toLowerCase().includes(search.toLowerCase()) ||
      court.cities.some((city) => city.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sveriges Domstolar – Adresser, Kontakt och Öppettider
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Hitta rätt tingsrätt och information för din kommun.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Sök på domstol eller stad (t.ex. Alingsås)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* List */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourts.map((court) => (
            <Link
              key={court.slug}
              href={`/${court.slug}`}
              className="block bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow hover:border-blue-300 group"
            >
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-2">
                {court.name}
              </h2>
              <p className="text-gray-600 mb-4">{court.address}</p>
              <div className="flex flex-wrap gap-2">
                {court.cities.slice(0, 3).map((city) => (
                  <span key={city} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded text-gray-500">
                    {city}
                  </span>
                ))}
                {court.cities.length > 3 && (
                  <span className="text-xs text-gray-400 self-center">
                    +{court.cities.length - 3} till
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredCourts.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            Inga domstolar hittades för din sökning.
          </div>
        )}
      </div>
    </main>
  );
}
