import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    HeartPulse,
    Home,
    Search,
    Stethoscope,
} from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50">

            {/* Background Decorations */}
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-16">

                <div className="w-full max-w-3xl text-center">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="mx-auto inline-flex items-center gap-3"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-200">
                            <HeartPulse
                                className="text-white"
                                size={25}
                            />
                        </div>

                        <div className="text-left">
                            <h2 className="text-xl font-bold text-slate-800">
                                MediCare
                            </h2>

                            <p className="text-xs text-slate-500">
                                Health Solution
                            </p>
                        </div>
                    </Link>

                    {/* 404 Illustration */}
                    <div className="relative mx-auto mt-12 flex h-64 items-center justify-center">

                        {/* Circle */}
                        <div className="absolute h-56 w-56 rounded-full border-[18px] border-cyan-100" />

                        <div className="relative flex items-center justify-center">

                            <span className="text-[130px] font-black leading-none tracking-tighter text-slate-200">
                                404
                            </span>

                            {/* Center Medical Icon */}
                            <div className="absolute flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl shadow-cyan-100">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600">
                                    <Stethoscope
                                        size={32}
                                        className="text-white"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4">

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                            <Search size={16} />
                            Page Not Found
                        </div>

                        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                            Oops! This page needs
                            <span className="block text-cyan-600">
                                medical attention.
                            </span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-500">
                            The page you&apos;re looking for may have been
                            moved, removed, or the URL might be incorrect.
                            Let&apos;s get you back on track.
                        </p>

                    </div>

                    {/* Actions */}
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <Link
                            href="/"
                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-700 hover:shadow-xl sm:w-auto"
                        >
                            <Home size={19} />

                            Go to Homepage

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>

                        <button
                            // onClick={() => window.history.back()}
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-md sm:w-auto"
                        >
                            <ArrowLeft size={18} />

                            Go Back
                        </button>

                    </div>

                    {/* Quick Links */}
                    <div className="mt-12 border-t border-slate-200 pt-8">

                        <p className="mb-4 text-sm font-medium text-slate-400">
                            You may be looking for
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">

                            <Link
                                href="/doctors"
                                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                Find a Doctor
                            </Link>

                            <Link
                                href="/services"
                                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                Our Services
                            </Link>

                            <Link
                                href="/appointment"
                                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                Book Appointment
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                Contact Us
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}