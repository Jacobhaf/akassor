
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Sidan hittades inte</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha flyttats eller tagits bort.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                    Gå till startsidan
                </Link>
            </div>
        </div>
    );
}
