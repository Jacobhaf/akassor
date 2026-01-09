"use client";

import React, { useReducer, useState } from 'react';
import { MasterProfile, MasterProfileSchema, GeneratorSettings, GeneratedDocuments } from '@/lib/cv/schemas';
import PersonalStep from './PersonalStep';
import ExperienceStep from './ExperienceStep';
import EducationSkillsStep from './EducationSkillsStep';
import JobContextStep from './JobContextStep';
import DocumentPreview from './DocumentPreview';
import { normalizeProfile } from '@/lib/cv/ai-service'; // We won't call this directly from client usually, but for mock usage we could. Better to use API.

// Initial State
const initialProfile: MasterProfile = {
    personal: { name: "", email: "", phone: "", city: "", linkedinUrl: "", portfolioUrl: "" },
    summary: "",
    experience: [],
    education: [],
    skills: { hard: [], soft: [], languages: [] }
};

const initialSettings: GeneratorSettings = {
    tone: "formal",
    length: "standard",
    language: "sv",
    template: "modern"
};

type State = {
    step: number;
    profile: MasterProfile;
    settings: GeneratorSettings;
    generatedInfo: GeneratedDocuments | null;
    isGenerating: boolean;
};

type Action =
    | { type: 'NEXT_STEP' }
    | { type: 'PREV_STEP' }
    | { type: 'UPDATE_PROFILE', payload: Partial<MasterProfile> }
    | { type: 'UPDATE_SETTINGS', payload: Partial<GeneratorSettings> }
    | { type: 'SET_GENERATED', payload: GeneratedDocuments }
    | { type: 'SET_GENERATING', payload: boolean };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'NEXT_STEP': return { ...state, step: state.step + 1 };
        case 'PREV_STEP': return { ...state, step: Math.max(0, state.step - 1) };
        case 'UPDATE_PROFILE': return { ...state, profile: { ...state.profile, ...action.payload } };
        case 'UPDATE_SETTINGS': return { ...state, settings: { ...state.settings, ...action.payload } };
        case 'SET_GENERATED': return { ...state, generatedInfo: action.payload, isGenerating: false, step: 4 }; // jump to preview
        case 'SET_GENERATING': return { ...state, isGenerating: action.payload };
        default: return state;
    }
}

export default function CvWizard() {
    const [state, dispatch] = useReducer(reducer, {
        step: 0,
        profile: initialProfile,
        settings: initialSettings,
        generatedInfo: null,
        isGenerating: false
    });

    const generateDocuments = async () => {
        dispatch({ type: 'SET_GENERATING', payload: true });
        try {
            const res = await fetch('/api/cv/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ profile: state.profile, settings: state.settings })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            dispatch({ type: 'SET_GENERATED', payload: data });
        } catch (e) {
            console.error(e);
            alert("Något gick fel vid genereringen.");
            dispatch({ type: 'SET_GENERATING', payload: false });
        }
    };

    const steps = [
        { title: "Personuppgifter", component: <PersonalStep profile={state.profile} update={(p) => dispatch({ type: 'UPDATE_PROFILE', payload: p })} /> },
        { title: "Erfarenhet", component: <ExperienceStep profile={state.profile} update={(p) => dispatch({ type: 'UPDATE_PROFILE', payload: p })} /> },
        { title: "Kompetens & Utbildning", component: <EducationSkillsStep profile={state.profile} update={(p) => dispatch({ type: 'UPDATE_PROFILE', payload: p })} /> },
        {
            title: "Jobbmatchning",
            component: <JobContextStep
                settings={state.settings}
                update={(s) => dispatch({ type: 'UPDATE_SETTINGS', payload: s })}
                onGenerate={generateDocuments}
                isGenerating={state.isGenerating}
            />
        },
        {
            title: "Granska & Exportera",
            component: <DocumentPreview documents={state.generatedInfo} profile={state.profile} settings={state.settings} />
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
            {/* Progress Bar */}
            <div className="bg-gray-50 border-b border-gray-100 flex">
                {steps.map((s, idx) => (
                    <div
                        key={idx}
                        className={`flex-1 py-4 text-center text-sm font-medium border-b-2 transition-colors
              ${state.step === idx ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400'}
              ${idx < state.step ? 'text-green-600 border-green-500' : ''}
            `}
                    >
                        <span className="hidden md:inline">{idx + 1}. {s.title}</span>
                        <span className="md:hidden">{idx + 1}</span>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-10 overflow-auto">
                {steps[state.step].component}
            </div>

            {/* Navigation Footer (hidden on last step or handling inside components) */}
            {state.step < 4 && (
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between">
                    <button
                        onClick={() => dispatch({ type: 'PREV_STEP' })}
                        disabled={state.step === 0}
                        className="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                        Tillbaka
                    </button>

                    {state.step < 3 && (
                        <button
                            onClick={() => dispatch({ type: 'NEXT_STEP' })}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-md hover:shadow-lg transition-transform transform active:scale-95"
                        >
                            Nästa steg
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
