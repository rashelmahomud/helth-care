'use client'
import { Activity, CalendarDays, CreditCard, FileText, Home, LogOut, MessageCircle, Pill, Settings, Stethoscope, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
    {
        name: "Overview",
        href: "/dashboard",
        icon: Home,
    },
    {
        name: "Paitents",
        href: "/dashboard/paitents",
        icon: CalendarDays,
    },
    {
        name: "Doctor Add",
        href: "/dashboard/addDoctor",
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

const DeshbordLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="grid grid-cols-4 gap-10 p-2 dark:bg-slate-900">

            <nav className="flex-1 space-y-1 overflow-y-auto px-4">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Main Menu
                </p>

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
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-cyan-50 hover:text-cyan-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                >
                    <Settings size={19} />
                    Settings
                </Link>

                <div className="my-3 border-t border-slate-100 dark:border-slate-800" />

                <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition-colors duration-150 hover:bg-red-50 dark:hover:bg-red-950/30"
                >
                    <LogOut size={19} />
                    Log out
                </button>

            </nav>



            {/* main items here  */}

            <div className="col-span-3 p-4">
                {children}
            </div>

        </div>
    );
};

export default DeshbordLayout;