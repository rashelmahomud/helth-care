'use client'
import { Activity, CalendarDays, CreditCard, FileText, Home, Menu, Pill, Settings, Stethoscope, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
    {
        name: "Overview",
        href: "/admin",
        icon: Home,
    },
    {
        name: "Paitents",
        href: "/admin/payment",
        icon: CalendarDays,
    },
    {
        name: "Doctor Add",
        href: "/admin/addDoctor",
        icon: Stethoscope,
    },
    {
        name: "Medicines",
        href: "/admin/medicines",
        icon: Pill,
    },
    {
        name: "Medical Records",
        href: "/admin/records",
        icon: FileText,
    },
    {
        name: "Hospital Stay",
        href: "/admin/hospital",
        icon: Activity,
    },
    {
        name: "Payments",
        href: "/admin/payments",
        icon: CreditCard,
    }

];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="min-h-screen dark:bg-slate-900 lg:grid lg:grid-cols-4 lg:gap-10 lg:p-2">

            {/* Mobile top bar */}
            <div className="flex items-center justify-between border-b border-slate-200 p-3 dark:border-slate-800 lg:hidden">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Admin Panel
                </span>
                <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open menu"
                    className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                    <Menu size={22} />
                </button>
            </div>

            {/* Mobile backdrop */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}

            {/* Sidebar: drawer on mobile, static column on desktop */}
            <nav
                className={`
                    fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-white px-4 py-4
                    transition-transform duration-200 ease-in-out
                    dark:bg-slate-900
                    lg:static lg:z-auto lg:w-auto lg:translate-x-0 lg:bg-transparent lg:px-4 lg:py-0
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="mb-3 flex items-center justify-between px-3 lg:mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Main Menu
                    </p>
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close menu"
                        className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 p-4 shadow-sm dark:border-cyan-900/40 dark:bg-cyan-950/30">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white ring-2 ring-cyan-200 dark:ring-cyan-800">
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

                <div className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                aria-current={isActive ? "page" : undefined}
                                className={`
                                        group relative flex items-center gap-3
                                        rounded-xl px-4 py-3
                                        text-sm font-medium
                                        text-slate-600
                                        transition-colors duration-150
                                        hover:bg-cyan-50
                                        hover:text-cyan-600
                                        dark:text-slate-400
                                        dark:hover:bg-slate-800
                                        dark:hover:text-cyan-400
                                        ${isActive
                                        ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400"
                                        : ""
                                    }
                                    `}
                            >
                                {isActive && (
                                    <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-cyan-600 dark:bg-cyan-400" />
                                )}

                                <Icon size={19} className="shrink-0" />

                                <span className="truncate">{item.name}</span>

                                {item.name === "Messages" && (
                                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                                        3
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>

            </nav>

            {/* main items here  */}

            <div className="col-span-3 p-4">
                {children}
            </div>

        </div>
    );
};

export default AdminLayout;