
import Link from "next/link";
import {

    Menu,
    UserRound,
    Users,
} from "lucide-react";
import { getDoctors } from "@/src/api/doctorApi";
import { DoctorsType } from "@/src/types/doctors";

export const dynamic = "force-dynamic";


export default async function AdminPage() {


    let totalDoctors: DoctorsType[] = [];
    try {
        totalDoctors = await getDoctors();
    } catch {
        // page still renders, count shows 0
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">

            {/* Main */}
            <div className="">

                {/* Header */}
                <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 sm:px-8">

                    <div className="flex items-center gap-3">

                        <button
                            className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
                        >
                            <Menu />
                        </button>

                        <div>
                            <h2 className="font-bold">
                                Admin Dashboard
                            </h2>

                            <p className="text-xs text-slate-500">
                                Manage your healthcare systems
                            </p>
                        </div>

                    </div>

                    <Link
                        href="/profile"
                        className="flex items-center gap-3"
                    >

                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-semibold">
                                Administrator
                            </p>

                            <p className="text-xs text-slate-500">
                                admin@medicare.com
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white">
                            <UserRound size={19} />
                        </div>

                    </Link>

                </header>

                {/* Content */}
                <main className="p-5 sm:p-8">

                    {/* Heading */}
                    <div className="mb-8">

                        <p className="text-sm font-medium text-cyan-600">
                            Overview
                        </p>

                        <h1 className="mt-1 text-3xl font-bold">
                            Welcome back, Admin 👋
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Here&apos;s what&apos;s happening in your hospital today.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                                <Users size={22} />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Doctors</h4>
                                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    {totalDoctors.length}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                                <Users size={22} />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Doctors</h4>
                                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    {totalDoctors.length}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                                <Users size={22} />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Doctors</h4>
                                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    {totalDoctors.length}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                                <Users size={22} />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Doctors</h4>
                                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    {totalDoctors.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </main>

            </div>

        </div>
    );
}

