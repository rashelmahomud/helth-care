import React from 'react';
import { HeartPulse } from "lucide-react";
const loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-100">
            {/* Background Glow */}
            <div className="absolute h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

            {/* Content */}
            <div className="relative flex flex-col items-center">
                {/* Outer Ring */}
                <div className="relative flex h-40 w-40 items-center justify-center">
                    {/* Rotating Ring */}
                    <div className="absolute h-full w-full animate-spin rounded-full border-[6px] border-cyan-100 border-t-cyan-600" />

                    {/* Pulsing Ring */}
                    <div className="absolute h-28 w-28 animate-ping rounded-full border border-cyan-300 opacity-30" />

                    {/* Logo */}
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-600 shadow-2xl">
                        <HeartPulse className="h-10 w-10 text-white" />
                    </div>
                </div>

                {/* Brand */}
                <h2 className="mt-8 text-3xl font-bold text-slate-800">
                    MediCare
                </h2>

                <p className="mt-2 text-slate-500">
                    Preparing your healthcare experience...
                </p>

                {/* Loading Dots */}
                <div className="mt-8 flex gap-2">
                    <span
                        className="h-3 w-3 animate-bounce rounded-full bg-cyan-600"
                        style={{ animationDelay: "0ms" }}
                    />
                    <span
                        className="h-3 w-3 animate-bounce rounded-full bg-cyan-600"
                        style={{ animationDelay: "150ms" }}
                    />
                    <span
                        className="h-3 w-3 animate-bounce rounded-full bg-cyan-600"
                        style={{ animationDelay: "300ms" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default loading;