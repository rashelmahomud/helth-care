"use client";

import Link from "next/link";
import {
    Activity,
    ArrowRight,
    Bell,
    CalendarDays,
    ChevronRight,
    Clock3,
    CreditCard,
    FileText,
    HeartPulse,
    Home,
    LogOut,
    Menu,
    MessageCircle,
    Pill,
    Plus,
    Settings,
    ShieldCheck,
    Stethoscope,
    User,
    X,
} from "lucide-react";
import { useState } from "react";
import useLogout from "@/src/hooks/useLogout";

const menuItems = [
    {
        name: "Overview",
        href: "/dashboard",
        icon: Home,
    },
    {
        name: "Appointments",
        href: "/dashboard/appointments",
        icon: CalendarDays,
    },
    {
        name: "Doctors",
        href: "/dashboard/doctors",
        icon: Stethoscope,
    },
    {
        name: "Medicines",
        href: "/dashboard/medicines",
        icon: Pill,
    },
    {
        name: "Medical Records",
        href: "/dashboard/records",
        icon: FileText,
    },
    {
        name: "Hospital Stay",
        href: "/dashboard/hospital",
        icon: Activity,
    },
    {
        name: "Payments",
        href: "/dashboard/payments",
        icon: CreditCard,
    },
    {
        name: "Messages",
        href: "/dashboard/messages",
        icon: MessageCircle,
    },
];

const quickActions = [
    {
        title: "Book Doctor",
        icon: Stethoscope,
        href: "/doctors",
    },
    {
        title: "Upload Report",
        icon: Plus,
        href: "/dashboard/records",
    },
    {
        title: "Add Medicine",
        icon: Pill,
        href: "/dashboard/medicines",
    },
    {
        title: "Pay Bill",
        icon: CreditCard,
        href: "/dashboard/payments",
    },
];

const medicines = [
    {
        name: "Amoxicillin",
        dose: "500mg",
        time: "After Breakfast",
        taken: true,
    },
    {
        name: "Vitamin D",
        dose: "1000 IU",
        time: "After Lunch",
        taken: false,
    },
    {
        name: "Paracetamol",
        dose: "500mg",
        time: "Before Sleep",
        taken: false,
    },
];

const records = [
    {
        title: "Blood Test",
        date: "Aug 25, 2026",
        icon: Activity,
    },
    {
        title: "X-Ray Report",
        date: "Aug 23, 2026",
        icon: FileText,
    },
    {
        title: "Prescription",
        date: "Aug 20, 2026",
        icon: Pill,
    },
];

export default function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = useLogout();


    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-0 z-50 flex h-screen w-72
                    flex-col border-r border-slate-200 bg-white
                    transition-transform duration-300
                    dark:border-slate-800 dark:bg-slate-900
                    lg:translate-x-0
                    ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >

                {/* Logo */}
                <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6 dark:border-slate-800">

                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-200">
                            <HeartPulse className="h-6 w-6 text-white" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold">
                                MediCare
                            </h1>

                            <p className="text-xs text-slate-500">
                                Patient Portal
                            </p>
                        </div>
                    </Link>

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden"
                    >
                        <X />
                    </button>
                </div>

                {/* Profile */}
                <div className="m-4 rounded-2xl bg-cyan-50 p-4 dark:bg-cyan-950/30">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-600 text-white">
                            <User size={21} />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate font-semibold">
                                Md Rashel
                            </p>

                            <p className="truncate text-xs text-slate-500">
                                Patient
                            </p>
                        </div>

                    </div>
                </div>





                {/* Navigation */}
                <nav className="flex-1 space-y-1 overflow-y-auto px-4">

                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Main Menu
                    </p>

                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`
                                    group flex items-center gap-3
                                    rounded-xl px-4 py-3
                                    text-sm font-medium
                                    text-slate-600
                                    transition
                                    hover:bg-cyan-50
                                    hover:text-cyan-600
                                    dark:text-slate-400
                                    dark:hover:bg-slate-800
                                    dark:hover:text-cyan-400
                                    ${item.name === "Overview"
                                        ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400"
                                        : ""
                                    }
                                `}
                            >
                                <Icon size={19} />

                                <span>{item.name}</span>

                                {item.name === "Messages" && (
                                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                                        3
                                    </span>
                                )}
                            </Link>
                        );
                    })}

                    <p className="mb-3 mt-7 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Account
                    </p>

                    <Link
                        href="/profile"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                    >
                        <User size={19} />
                        Profile
                    </Link>

                    <Link
                        href="/settings"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                    >
                        <Settings size={19} />
                        Settings
                    </Link>

                </nav>




                {/* Logout */}
                <div className="border-t border-slate-100 p-4 dark:border-slate-800">

                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                        <LogOut size={19} />
                        Logout
                    </button>

                </div>

            </aside>

            {/* Main */}
            <div className="lg:pl-72">

                {/* Header */}
                <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 sm:px-8">

                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
                    >
                        <Menu />
                    </button>

                    <div className="hidden lg:block">
                        <p className="text-sm text-slate-500">
                            Patient Dashboard
                        </p>

                        <h2 className="font-semibold">
                            Healthcare Overview
                        </h2>
                    </div>

                    <div className="ml-auto flex items-center gap-3">

                        {/* Notification */}
                        <button className="relative rounded-full p-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">

                            <Bell size={20} />

                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

                        </button>

                        {/* User */}
                        <Link
                            href="/profile"
                            className="flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                        >

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white">
                                MR
                            </div>

                            <div className="hidden text-left sm:block">
                                <p className="text-sm font-semibold">
                                    Md Rashel
                                </p>

                                <p className="text-xs text-slate-500">
                                    Patient
                                </p>
                            </div>

                        </Link>

                    </div>
                </header>

                {/* Content */}
                <main className="mx-auto max-w-[1600px] p-5 sm:p-8">

                    {/* Welcome */}
                    <section className="mb-8">

                        <p className="text-sm font-medium text-cyan-600">
                            Tuesday, August 25, 2026
                        </p>

                        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            Good Morning, Rashel 👋
                        </h1>

                        <p className="mt-2 text-slate-500 dark:text-slate-400">
                            Here's your healthcare journey at a glance.
                        </p>

                    </section>

                    {/* Health Score */}
                    <section className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 p-6 text-white shadow-xl shadow-cyan-100 dark:shadow-none sm:p-8">

                        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                            <div>

                                <div className="flex items-center gap-2 text-cyan-100">
                                    <HeartPulse size={20} />
                                    <span className="text-sm font-semibold uppercase tracking-wider">
                                        Health Score
                                    </span>
                                </div>

                                <div className="mt-4 flex items-end gap-3">

                                    <span className="text-5xl font-bold">
                                        92
                                    </span>

                                    <span className="mb-1 text-xl text-cyan-100">
                                        / 100
                                    </span>

                                </div>

                                <p className="mt-2 text-cyan-100">
                                    Excellent health condition
                                </p>

                            </div>

                            <div className="w-full max-w-md">

                                <div className="mb-3 flex justify-between text-sm text-cyan-100">
                                    <span>Health Progress</span>
                                    <span>92%</span>
                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-white/20">
                                    <div className="h-full w-[92%] rounded-full bg-white" />
                                </div>

                                <p className="mt-3 text-sm text-cyan-100">
                                    Keep maintaining your healthy routine.
                                </p>

                            </div>

                            <div className="hidden h-24 w-24 items-center justify-center rounded-full border-8 border-white/20 md:flex">
                                <ShieldCheck size={40} />
                            </div>

                        </div>

                    </section>

                    {/* Stats */}
                    <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">

                        <StatCard
                            icon={<CalendarDays />}
                            title="Appointments"
                            value="04"
                            description="2 upcoming"
                        />

                        <StatCard
                            icon={<Pill />}
                            title="Medicines"
                            value="08"
                            description="3 today"
                        />

                        <StatCard
                            icon={<Activity />}
                            title="Hospital Stay"
                            value="03"
                            description="Days admitted"
                        />

                        <StatCard
                            icon={<CreditCard />}
                            title="Current Bill"
                            value="$650"
                            description="Payment due"
                            danger
                        />

                    </section>

                    {/* Quick Actions */}
                    <section className="mt-8">

                        <div className="mb-4 flex items-center justify-between">

                            <h2 className="text-xl font-bold">
                                Quick Actions
                            </h2>

                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

                            {quickActions.map((action) => {
                                const Icon = action.icon;

                                return (
                                    <Link
                                        key={action.title}
                                        href={action.href}
                                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                                    >

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400">
                                            <Icon size={21} />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold">
                                                {action.title}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-500">
                                                Get started
                                            </p>
                                        </div>

                                        <ArrowRight
                                            size={16}
                                            className="ml-auto transition group-hover:translate-x-1"
                                        />

                                    </Link>
                                );
                            })}

                        </div>

                    </section>

                    {/* Main Grid */}
                    <section className="mt-8 grid gap-6 xl:grid-cols-3">

                        {/* Appointment */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">

                            <div className="mb-6 flex items-center justify-between">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                                        Next Appointment
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold">
                                        Your upcoming visit
                                    </h2>
                                </div>

                                <Link
                                    href="/dashboard/appointments"
                                    className="text-sm font-semibold text-cyan-600"
                                >
                                    View All
                                </Link>

                            </div>

                            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-2xl dark:bg-cyan-950/50">
                                        👩‍⚕️
                                    </div>

                                    <div className="flex-1">

                                        <h3 className="text-lg font-bold">
                                            Dr. Sarah Johnson
                                        </h3>

                                        <p className="text-sm text-cyan-600">
                                            Cardiologist
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">

                                            <span className="flex items-center gap-1.5">
                                                <CalendarDays size={15} />
                                                Tomorrow
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <Clock3 size={15} />
                                                10:30 AM
                                            </span>

                                        </div>

                                    </div>

                                    <Link
                                        href="/dashboard/appointments"
                                        className="rounded-xl bg-cyan-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-cyan-700"
                                    >
                                        View Details
                                    </Link>

                                </div>

                                <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-700">
                                    <span>🏥</span>
                                    City Care Hospital
                                </div>

                            </div>

                        </div>

                        {/* Hospital Stay */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                                        Hospital Stay
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold">
                                        Room B-204
                                    </h2>
                                </div>

                                <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600 dark:bg-cyan-950/40">
                                    <Activity size={20} />
                                </div>

                            </div>

                            <div className="mt-6 space-y-4">

                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">
                                        Admission
                                    </span>

                                    <span className="font-semibold">
                                        Aug 24, 2026
                                    </span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">
                                        Expected Discharge
                                    </span>

                                    <span className="font-semibold">
                                        Aug 29, 2026
                                    </span>
                                </div>

                                <div>

                                    <div className="mb-2 flex justify-between text-sm">
                                        <span>
                                            Hospital stay
                                        </span>

                                        <span className="font-semibold text-cyan-600">
                                            3 / 5 Days
                                        </span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                                        <div className="h-full w-[60%] rounded-full bg-cyan-600" />
                                    </div>

                                </div>

                                <div className="rounded-xl bg-cyan-50 p-4 dark:bg-cyan-950/30">

                                    <p className="text-xs text-slate-500">
                                        Room Type
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        Deluxe AC Room
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* Bottom Grid */}
                    <section className="mt-8 grid gap-6 xl:grid-cols-3">

                        {/* Hospital Bill */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">

                            <div className="mb-6 flex items-center justify-between">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                                        Hospital Expenses
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold">
                                        Current Bill
                                    </h2>
                                </div>

                                <Link
                                    href="/dashboard/payments"
                                    className="text-sm font-semibold text-cyan-600"
                                >
                                    Full Bill
                                </Link>

                            </div>

                            <div className="space-y-4">

                                <BillRow
                                    name="Room / Bed"
                                    price="$300"
                                />

                                <BillRow
                                    name="Doctor Consultation"
                                    price="$150"
                                />

                                <BillRow
                                    name="Medicine"
                                    price="$200"
                                />

                                <BillRow
                                    name="Laboratory"
                                    price="$100"
                                />

                                <BillRow
                                    name="Food & Nutrition"
                                    price="$50"
                                />

                                <BillRow
                                    name="OT Service"
                                    price="$400"
                                />

                                <div className="border-t border-slate-200 pt-5 dark:border-slate-700">

                                    <div className="flex items-center justify-between">

                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Total Bill
                                            </p>

                                            <p className="mt-1 text-2xl font-bold">
                                                $1,200
                                            </p>
                                        </div>

                                        <div className="text-right">

                                            <p className="text-sm text-slate-500">
                                                Amount Due
                                            </p>

                                            <p className="mt-1 text-2xl font-bold text-red-500">
                                                $650
                                            </p>

                                        </div>

                                    </div>

                                    <Link
                                        href="/dashboard/payments"
                                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 py-3.5 font-semibold text-white transition hover:shadow-lg"
                                    >
                                        <CreditCard size={18} />
                                        Pay $650 Now
                                    </Link>

                                </div>

                            </div>

                        </div>

                        {/* Medicines */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

                            <div className="mb-6 flex items-center justify-between">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                                        Medication
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold">
                                        Today's Medicines
                                    </h2>
                                </div>

                                <Pill className="text-cyan-600" />

                            </div>

                            <div className="space-y-3">

                                {medicines.map((medicine) => (

                                    <div
                                        key={medicine.name}
                                        className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60"
                                    >

                                        <div className="flex items-start gap-3">

                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-950/50">
                                                <Pill size={17} />
                                            </div>

                                            <div className="flex-1">

                                                <p className="font-semibold">
                                                    {medicine.name}
                                                </p>

                                                <p className="text-xs text-slate-500">
                                                    {medicine.dose} • {medicine.time}
                                                </p>

                                            </div>

                                            {medicine.taken ? (
                                                <span className="text-xs font-semibold text-green-600">
                                                    ✓ Taken
                                                </span>
                                            ) : (
                                                <span className="text-xs font-semibold text-amber-500">
                                                    Pending
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                ))}

                            </div>

                            <Link
                                href="/dashboard/medicines"
                                className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-cyan-600"
                            >
                                Manage Medicines
                                <ChevronRight size={16} />
                            </Link>

                        </div>

                    </section>

                    {/* Records + Activity */}
                    <section className="mt-8 grid gap-6 xl:grid-cols-2">

                        {/* Medical Records */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

                            <div className="mb-6 flex items-center justify-between">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                                        Medical Records
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold">
                                        Recent Reports
                                    </h2>
                                </div>

                                <Link
                                    href="/dashboard/records"
                                    className="text-sm font-semibold text-cyan-600"
                                >
                                    View All
                                </Link>

                            </div>

                            <div className="space-y-3">

                                {records.map((record) => {
                                    const Icon = record.icon;

                                    return (
                                        <Link
                                            href="/dashboard/records"
                                            key={record.title}
                                            className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-cyan-200 hover:bg-cyan-50/50 dark:border-slate-800 dark:hover:bg-slate-800"
                                        >

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                                                <Icon size={20} />
                                            </div>

                                            <div className="flex-1">

                                                <p className="font-semibold">
                                                    {record.title}
                                                </p>

                                                <p className="text-xs text-slate-500">
                                                    {record.date}
                                                </p>

                                            </div>

                                            <ChevronRight
                                                size={18}
                                                className="text-slate-400"
                                            />

                                        </Link>
                                    );
                                })}

                            </div>

                        </div>

                        {/* Health Activity */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

                            <div className="mb-6">

                                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                                    Recent Activity
                                </p>

                                <h2 className="mt-1 text-xl font-bold">
                                    Your Health Journey
                                </h2>

                            </div>

                            <div className="space-y-6">

                                <ActivityItem
                                    icon="✓"
                                    title="Blood Test Report Added"
                                    date="Today • 10:30 AM"
                                />

                                <ActivityItem
                                    icon="💳"
                                    title="Hospital payment of $300 completed"
                                    date="Yesterday • 04:15 PM"
                                />

                                <ActivityItem
                                    icon="📅"
                                    title="Appointment booked with Dr. Johnson"
                                    date="Aug 23 • 11:20 AM"
                                />

                                <ActivityItem
                                    icon="💊"
                                    title="Prescription updated"
                                    date="Aug 20 • 09:45 AM"
                                />

                            </div>

                        </div>

                    </section>

                </main>
            </div>
        </div>
    );
}


/* =========================
   STAT CARD
========================= */

function StatCard({
    icon,
    title,
    value,
    description,
    danger = false,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
    description: string;
    danger?: boolean;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

            <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400">
                    {icon}
                </div>

                <ArrowRight
                    size={17}
                    className="text-slate-400"
                />

            </div>

            <p className="mt-5 text-sm text-slate-500">
                {title}
            </p>

            <p
                className={`mt-1 text-2xl font-bold ${danger ? "text-red-500" : ""
                    }`}
            >
                {value}
            </p>

            <p className="mt-1 text-xs text-slate-400">
                {description}
            </p>

        </div>
    );
}


/* =========================
   BILL ROW
========================= */

function BillRow({
    name,
    price,
}: {
    name: string;
    price: string;
}) {
    return (
        <div className="flex items-center justify-between text-sm">

            <span className="text-slate-500">
                {name}
            </span>

            <span className="font-semibold">
                {price}
            </span>

        </div>
    );
}


/* =========================
   ACTIVITY ITEM
========================= */

function ActivityItem({
    icon,
    title,
    date,
}: {
    icon: string;
    title: string;
    date: string;
}) {
    return (
        <div className="flex gap-4">

            <div className="relative">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-sm dark:bg-cyan-950/40">
                    {icon}
                </div>

            </div>

            <div className="flex-1">

                <p className="text-sm font-semibold">
                    {title}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    {date}
                </p>

            </div>

        </div>
    );
}