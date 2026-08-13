"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, HeartPulse, SearchAlert, BellDot } from "lucide-react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const navItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Doctors",
        href: "/doctors",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Departments",
        href: "/departments",
    },
    {
        name: "Appointment",
        href: "/appointment",
    },
    {
        name: "Contact",
        href: "/contact",
    },
    {
        name: "Login",
        href: "/login",

    },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const { user } = useAuth();


    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}

                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-200 transition group-hover:rotate-6">
                            <HeartPulse className="h-6 w-6 text-white" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800">
                                MediCare
                            </h2>

                            <p className="text-xs text-slate-500">
                                Health Solution
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}

                    <nav className="hidden lg:flex items-center gap-8">

                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-[15px] font-medium text-slate-600 transition hover:text-cyan-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full"
                            >
                                {item.name}
                            </Link>
                        ))}

                    </nav>

                    {/* Right */}

                    <div className="hidden lg:flex items-center gap-3">
                        <button className="rounded-full p-3 hover:bg-slate-100 transition">
                            <SearchAlert className="text-blue-500" size={20} />
                        </button>

                        <button className="relative rounded-full p-3 hover:bg-slate-100 transition">
                            <BellDot className="text-blue-500" size={20} />
                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                        </button>

                        {
                            user?.email ? <Image
                                src="/images/doctor.png"
                                alt="User"
                                width={40}
                                height={40}
                                className="rounded-full border"
                            /> : ""
                        }


                        <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white font-semibold transition hover:scale-105">
                            Book Now
                        </button>
                    </div>

                    {/* Mobile */}

                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-blue-500"
                    >
                        {open ? <X /> : <Menu />}
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}

            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                <div className="border-t bg-white">

                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block border-b px-5 py-4 text-slate-700 hover:bg-cyan-50"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="p-5">
                        <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white">
                            Book Appointment
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}