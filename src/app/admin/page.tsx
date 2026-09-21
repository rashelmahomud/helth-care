
import Link from "next/link";
import {
    Activity,
    CalendarDays,
    CreditCard,
    Menu,
    Stethoscope,
    UserRound,
    Users,
} from "lucide-react";




export default function AdminPage() {

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
                                Manage your healthcare system
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
                            Here's what's happening in your hospital today.
                        </p>

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">

                        <StatCard
                            title="Total Patients"
                            value="1,248"
                            icon={<Users />}
                            change="+12%"
                        />

                        <StatCard
                            title="Total Doctors"
                            value="48"
                            icon={<Stethoscope />}
                            change="+4%"
                        />

                        <StatCard
                            title="Appointments"
                            value="326"
                            icon={<CalendarDays />}
                            change="+18%"
                        />

                        <StatCard
                            title="Total Revenue"
                            value="$24,850"
                            icon={<CreditCard />}
                            change="+21%"
                        />

                    </div>

                    {/* Bottom cards */}
                    <div className="mt-6 grid gap-6 md:grid-cols-3">

                        <InfoCard
                            title="Pending Appointments"
                            value="18"
                            description="Need confirmation"
                            icon={<CalendarDays />}
                        />

                        <InfoCard
                            title="Patients Admitted"
                            value="32"
                            description="Currently in hospital"
                            icon={<Activity />}
                        />

                        <InfoCard
                            title="Pending Payments"
                            value="$4,820"
                            description="Outstanding amount"
                            icon={<CreditCard />}
                        />

                    </div>

                </main>

            </div>

        </div>
    );
}


/* =========================
   STAT CARD
========================= */

function StatCard({
    title,
    value,
    icon,
    change,
}: {
    title: string;
    value: string;
    icon: React.ReactNode;
    change: string;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

            <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                    {icon}
                </div>

                <span className="text-xs font-semibold text-green-600">
                    {change}
                </span>

            </div>

            <p className="mt-5 text-sm text-slate-500">
                {title}
            </p>

            <h3 className="mt-1 text-2xl font-bold">
                {value}
            </h3>

        </div>
    );
}

function InfoCard({
    title,
    value,
    description,
    icon,
}: {
    title: string;
    value: string;
    description: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                {icon}
            </div>

            <div>

                <p className="text-sm text-slate-500">
                    {title}
                </p>

                <p className="mt-1 text-xl font-bold">
                    {value}
                </p>

                <p className="text-xs text-slate-400">
                    {description}
                </p>

            </div>

        </div>
    );
}
