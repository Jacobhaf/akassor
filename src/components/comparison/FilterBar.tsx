
import { EmployerType } from "@/types";
import { X } from "lucide-react";

interface Props {
    selectedTypes: EmployerType[];
    onToggleType: (type: EmployerType) => void;
    onReset: () => void;
}

const FILTERS: { id: EmployerType; label: string }[] = [
    { id: "kommun_region", label: "Kommun/region" },
    { id: "privat_borsnoterat", label: "Privat/börsnoterat" },
    { id: "myndighet", label: "Myndighet" },
    { id: "eget_foretag", label: "Eget företag" },
];

export default function FilterBar({ selectedTypes, onToggleType, onReset }: Props) {
    return (
        <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
                <span className="text-sm font-semibold text-gray-900">
                    Jag jobbar inom:
                </span>
                <div className="flex flex-wrap gap-3">
                    {FILTERS.map((filter) => (
                        <label
                            key={filter.id}
                            className="flex cursor-pointer items-center gap-2 select-none"
                        >
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="peer h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                    checked={selectedTypes.includes(filter.id)}
                                    onChange={() => onToggleType(filter.id)}
                                />
                            </div>
                            <span className="text-sm text-gray-700">{filter.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button
                onClick={onReset}
                className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-blue-600 disabled:opacity-50"
                disabled={selectedTypes.length === 0}
            >
                <X className="h-4 w-4" />
                Rensa
            </button>
        </div>
    );
}
