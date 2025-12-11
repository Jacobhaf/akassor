
import { ChevronDown } from "lucide-react";

export type SortOrder = "relevance" | "popular" | "price";

interface Props {
    value: SortOrder;
    onChange: (value: SortOrder) => void;
}

export default function SortDropdown({ value, onChange }: Props) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as SortOrder)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
                <option value="relevance">Sortera: Relevans</option>
                <option value="popular">Sortera: Populärast</option>
                <option value="price">Sortera: Pris/månad (lägst)</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
    );
}
