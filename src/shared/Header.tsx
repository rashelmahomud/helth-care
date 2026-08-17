"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    HeartPulse,
    Search,
    Bell,
    User,
    LayoutDashboard,
    Settings,
    ShieldCheck,
    LogOut,
    CalendarDays,
    ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const profileRef = useRef<HTMLDivElement>(null);

    const { user, logout } = useAuth();
    const router = useRouter();

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target as Node)
            ) {
                setProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    // Close mobile menu when screen becomes desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await logout();

            setProfileOpen(false);
            setOpen(false);

            router.push("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleMobileLink = () => {
        setOpen(false);
    };

    const userImage =
        user?.photoURL || "/images/doctor.png";

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ================= HEADER ================= */}
                <div className="flex h-20 items-center justify-between">

                    {/* ================= LOGO ================= */}
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="group flex shrink-0 items-center gap-3"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-200 transition duration-300 group-hover:rotate-6 group-hover:scale-105 sm:h-12 sm:w-12">
                            <HeartPulse className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                        </div>

                        <div className="hidden xs:block">
                            <h2 className="text-lg font-bold text-slate-800 sm:text-xl">
                                MediCare
                            </h2>

                            <p className="text-[10px] text-slate-500 sm:text-xs">
                                Health Solution
                            </p>
                        </div>
                    </Link>

                    {/* ================= DESKTOP NAV ================= */}
                    <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-sm font-medium text-slate-600 transition hover:text-cyan-600 xl:text-[15px] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* ================= DESKTOP RIGHT ================= */}
                    <div className="hidden items-center gap-2 lg:flex">

                        {/* Search */}
                        <button
                            type="button"
                            aria-label="Search"
                            className="rounded-full p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-cyan-600"
                        >
                            <Search size={20} />
                        </button>

                        {/* Notification */}
                        <button
                            type="button"
                            aria-label="Notifications"
                            className="relative rounded-full p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-cyan-600"
                        >
                            <Bell size={20} />

                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                        </button>

                        {/* User */}
                        {user ? (
                            <div
                                ref={profileRef}
                                className="relative ml-1"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setProfileOpen(
                                            !profileOpen
                                        )
                                    }
                                    className="flex items-center gap-2 rounded-full p-1 transition hover:bg-slate-100"
                                    aria-expanded={profileOpen}
                                >
                                    <Image
                                        src={userImage}
                                        alt={
                                            user.displayName ||
                                            "User"
                                        }
                                        width={42}
                                        height={42}
                                        className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm ring-2 ring-cyan-100"
                                    />

                                    <ChevronDown
                                        size={16}
                                        className={`text-slate-500 transition-transform ${profileOpen
                                            ? "rotate-180"
                                            : ""
                                            }`}
                                    />
                                </button>

                                {/* ================= PROFILE DROPDOWN ================= */}
                                {profileOpen && (
                                    <div className="absolute right-0 top-14 w-72 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">

                                        {/* User Info */}
                                        <div className="border-b border-slate-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-4">
                                            <div className="flex items-center gap-3">

                                                <Image
                                                    src={userImage}
                                                    alt={
                                                        user.displayName ||
                                                        "User"
                                                    }
                                                    width={52}
                                                    height={52}
                                                    className="h-13 w-13 rounded-full border-2 border-white object-cover shadow"
                                                />

                                                <div className="min-w-0">
                                                    <h3 className="truncate font-semibold text-slate-800">
                                                        {user.displayName ||
                                                            "Healthcare User"}
                                                    </h3>

                                                    <p className="truncate text-sm text-slate-500">
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Menu */}
                                        <div className="p-2">

                                            <Link
                                                href="/profile"
                                                onClick={() =>
                                                    setProfileOpen(
                                                        false
                                                    )
                                                }
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                                            >
                                                <User
                                                    size={18}
                                                />

                                                <span>
                                                    My Profile
                                                </span>
                                            </Link>

                                            <Link
                                                href="/dashboard"
                                                onClick={() =>
                                                    setProfileOpen(
                                                        false
                                                    )
                                                }
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                                            >
                                                <LayoutDashboard
                                                    size={18}
                                                />

                                                <span>
                                                    Dashboard
                                                </span>
                                            </Link>

                                            <Link
                                                href="/admin"
                                                onClick={() =>
                                                    setProfileOpen(
                                                        false
                                                    )
                                                }
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                                            >
                                                <ShieldCheck
                                                    size={18}
                                                />

                                                <span>
                                                    Admin Panel
                                                </span>
                                            </Link>

                                            <Link
                                                href="/settings"
                                                onClick={() =>
                                                    setProfileOpen(
                                                        false
                                                    )
                                                }
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                                            >
                                                <Settings
                                                    size={18}
                                                />

                                                <span>
                                                    Settings
                                                </span>
                                            </Link>

                                            <div className="my-2 border-t border-slate-100" />

                                            <button
                                                type="button"
                                                onClick={
                                                    handleLogout
                                                }
                                                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
                                            >
                                                <LogOut
                                                    size={18}
                                                />

                                                <span>
                                                    Logout
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Login */
                            <Link
                                href="/login"
                                className="rounded-xl border border-cyan-600 px-4 py-2.5 text-sm font-semibold text-cyan-600 transition hover:bg-cyan-50"
                            >
                                Login
                            </Link>
                        )}

                        {/* Book Now */}
                        <Link
                            href="/appointment"
                            className="ml-1 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-100 transition hover:-translate-y-0.5 hover:shadow-lg xl:px-5"
                        >
                            <CalendarDays size={18} />
                            <span>Book Now</span>
                        </Link>
                    </div>

                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? (
                            <X size={26} />
                        ) : (
                            <Menu size={26} />
                        )}
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${open
                    ? "max-h-[900px] opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 pb-5 sm:px-6">

                    {/* Mobile User */}
                    {user && (
                        <div className="mt-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 p-4">
                            <div className="flex items-center gap-3">

                                <Image
                                    src={userImage}
                                    alt={
                                        user.displayName ||
                                        "User"
                                    }
                                    width={52}
                                    height={52}
                                    className="h-13 w-13 rounded-full border-2 border-white object-cover shadow"
                                />

                                <div className="min-w-0">
                                    <h3 className="truncate font-semibold text-slate-800">
                                        {user.displayName ||
                                            "Healthcare User"}
                                    </h3>

                                    <p className="truncate text-sm text-slate-500">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile Navigation */}
                    <nav className="mt-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={
                                    handleMobileLink
                                }
                                className="block border-b border-slate-100 px-2 py-4 text-[15px] font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile User Actions */}
                    {user ? (
                        <div className="mt-4 grid grid-cols-2 gap-3">

                            <Link
                                href="/profile"
                                onClick={
                                    handleMobileLink
                                }
                                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                <User size={17} />
                                Profile
                            </Link>

                            <Link
                                href="/dashboard"
                                onClick={
                                    handleMobileLink
                                }
                                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                <LayoutDashboard
                                    size={17}
                                />
                                Dashboard
                            </Link>

                            <Link
                                href="/admin"
                                onClick={
                                    handleMobileLink
                                }
                                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                <ShieldCheck size={17} />
                                Admin
                            </Link>

                            <Link
                                href="/settings"
                                onClick={
                                    handleMobileLink
                                }
                                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                <Settings size={17} />
                                Settings
                            </Link>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-red-50 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            onClick={
                                handleMobileLink
                            }
                            className="mt-4 flex w-full items-center justify-center rounded-xl border border-cyan-600 py-3 font-semibold text-cyan-600 transition hover:bg-cyan-50"
                        >
                            Login
                        </Link>
                    )}

                    {/* Mobile Book Appointment */}
                    <Link
                        href="/appointment"
                        onClick={
                            handleMobileLink
                        }
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-100"
                    >
                        <CalendarDays size={18} />
                        Book Appointment
                    </Link>
                </div>
            </div>
        </header>
    );
}