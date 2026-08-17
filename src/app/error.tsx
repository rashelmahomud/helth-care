"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorPage({
    error,
    reset,
}: ErrorPageProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
            <div className="w-full max-w-lg text-center">

                {/* Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                    <AlertTriangle
                        size={48}
                        className="text-red-500"
                    />
                </div>

                {/* Heading */}
                <h1 className="mt-8 text-4xl font-bold text-slate-900">
                    Something Went Wrong
                </h1>

                <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-slate-500">
                    We&apos;re sorry, but something unexpected happened.
                    Please try again or return to the homepage.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                    <button
                        onClick={() => reset()}
                        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
                    >
                        <RefreshCw size={18} />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                        <Home size={18} />
                        Back Home
                    </Link>

                </div>

                {/* Support */}
                <p className="mt-8 text-sm text-slate-400">
                    If the problem continues, please contact our support team.
                </p>

            </div>
        </main>
    );
}