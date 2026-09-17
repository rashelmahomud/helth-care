
import Link from "next/link";
import {
    Activity,
    CalendarDays,
    ChevronRight,
    CreditCard,
    Menu,
    Stethoscope,
    UserRound,
    Users,
} from "lucide-react";


const appointments = [
    {
        patient: "John Smith",
        doctor: "Dr. Sarah Johnson",
        date: "Aug 29, 2026",
        time: "10:30 AM",
        status: "Confirmed",
    },
    {
        patient: "Michael Brown",
        doctor: "Dr. David Wilson",
        date: "Aug 29, 2026",
        time: "11:30 AM",
        status: "Pending",
    },
    {
        patient: "Emma Davis",
        doctor: "Dr. Sarah Johnson",
        date: "Aug 30, 2026",
        time: "09:30 AM",
        status: "Confirmed",
    },
    {
        patient: "Robert Miller",
        doctor: "Dr. James Anderson",
        date: "Aug 30, 2026",
        time: "02:00 PM",
        status: "Cancelled",
    },
];

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

                    {/* Main grid */}
                    <div className="mt-8 grid gap-6 xl:grid-cols-3">

                        {/* Appointments */}
                        <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">

                            <div className="flex items-center justify-between border-b border-slate-100 p-5 dark:border-slate-800">

                                <div>
                                    <h2 className="font-bold">
                                        Recent Appointments
                                    </h2>

                                    <p className="mt-1 text-xs text-slate-500">
                                        Latest patient appointments
                                    </p>
                                </div>

                                <Link
                                    href="/admin/appointments"
                                    className="flex items-center gap-1 text-sm font-semibold text-cyan-600"
                                >
                                    View All
                                    <ChevronRight size={16} />
                                </Link>

                            </div>

                            <div className="overflow-x-auto">

                                <table className="w-full min-w-[650px]">

                                    <thead>
                                        <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400 dark:border-slate-800">
                                            <th className="px-5 py-4">
                                                Patient
                                            </th>

                                            <th className="px-5 py-4">
                                                Doctor
                                            </th>

                                            <th className="px-5 py-4">
                                                Date
                                            </th>

                                            <th className="px-5 py-4">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {appointments.map((appointment) => (
                                            <tr
                                                key={`${appointment.patient}-${appointment.date}`}
                                                className="border-b border-slate-100 last:border-0 dark:border-slate-800"
                                            >

                                                <td className="px-5 py-4">

                                                    <div className="flex items-center gap-3">

                                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                                                            <UserRound size={17} />
                                                        </div>

                                                        <span className="text-sm font-medium">
                                                            {appointment.patient}
                                                        </span>

                                                    </div>

                                                </td>

                                                <td className="px-5 py-4 text-sm text-slate-500">
                                                    {appointment.doctor}
                                                </td>

                                                <td className="px-5 py-4">

                                                    <p className="text-sm font-medium">
                                                        {appointment.date}
                                                    </p>

                                                    <p className="text-xs text-slate-500">
                                                        {appointment.time}
                                                    </p>

                                                </td>

                                                <td className="px-5 py-4">

                                                    <Status
                                                        status={appointment.status}
                                                    />

                                                </td>

                                            </tr>
                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                        {/* Quick Management */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

                            <h2 className="font-bold">
                                Quick Management
                            </h2>

                            <p className="mt-1 text-xs text-slate-500">
                                Frequently used admin actions
                            </p>

                            <div className="mt-5 space-y-3">

                                <QuickAction
                                    href="/admin/doctors"
                                    icon={<Stethoscope />}
                                    title="Manage Doctors"
                                />

                                <QuickAction
                                    href="/admin/patients"
                                    icon={<Users />}
                                    title="Manage Patients"
                                />

                                <QuickAction
                                    href="/admin/appointments"
                                    icon={<CalendarDays />}
                                    title="Appointments"
                                />

                                <QuickAction
                                    href="/admin/payments"
                                    icon={<CreditCard />}
                                    title="Payment Records"
                                />

                            </div>

                        </div>

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


/* =========================
   STATUS
========================= */

function Status({
    status,
}: {
    status: string;
}) {
    const styles = {
        Confirmed:
            "bg-green-50 text-green-600 dark:bg-green-950/30",
        Pending:
            "bg-amber-50 text-amber-600 dark:bg-amber-950/30",
        Cancelled:
            "bg-red-50 text-red-600 dark:bg-red-950/30",
    };

    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status as keyof typeof styles]
                }`}
        >
            {status}
        </span>
    );
}


/* =========================
   QUICK ACTION
========================= */

function QuickAction({
    href,
    icon,
    title,
}: {
    href: string;
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-cyan-200 hover:bg-cyan-50 dark:border-slate-800 dark:hover:bg-slate-800"
        >

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40">
                {icon}
            </div>

            <span className="flex-1 text-sm font-semibold">
                {title}
            </span>

            <ChevronRight
                size={17}
                className="text-slate-400"
            />

        </Link>
    );
}


/* =========================
   INFO CARD
========================= */

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
