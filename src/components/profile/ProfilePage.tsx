"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    BedDouble,
    Clock3,
    Edit3,
    Save,
    X,
    CreditCard,
    Wallet,
    CheckCircle2,
    AlertCircle,
    Stethoscope,
    Pill,
    Utensils,
    Droplets,
    Wind,
    Sparkles,
    Activity,
    FlaskConical,
    Syringe,
    Building2,
    Receipt,
} from "lucide-react";

import useAuth from "@/src/hooks/useAuth";
import { HospitalCost, PatientInfo } from "@/src/types/profileTypes";


export default function ProfilePage() {
    const { user } = useAuth();

    const [editing, setEditing] = useState(false);

    const [patient, setPatient] = useState<PatientInfo>({
        name: user?.displayName || "John Doe",
        email: user?.email || "john@example.com",
        phone: "+880 1234-567890",
        gender: "Male",
        age: 32,
        bloodGroup: "O+",
        location: "Dhaka, Bangladesh",
    });

    const [editForm, setEditForm] = useState(patient);

    const [costs] = useState<HospitalCost[]>([
        {
            id: 1,
            name: "Bed / Room Charge",
            description: "Hospital bed and room accommodation",
            price: 12000,
            icon: BedDouble,
        },
        {
            id: 2,
            name: "Doctor Consultation",
            description: "Doctor visit and consultation",
            price: 8000,
            icon: Stethoscope,
        },
        {
            id: 3,
            name: "Medicine",
            description: "Prescribed medicines and drugs",
            price: 6500,
            icon: Pill,
        },
        {
            id: 4,
            name: "Nursing Service",
            description: "Nursing and patient care service",
            price: 4500,
            icon: Activity,
        },
        {
            id: 5,
            name: "Food / Eating",
            description: "Patient meals and food service",
            price: 3200,
            icon: Utensils,
        },
        {
            id: 6,
            name: "Water",
            description: "Drinking water and patient water service",
            price: 800,
            icon: Droplets,
        },
        {
            id: 7,
            name: "AC Charge",
            description: "Air conditioning service",
            price: 2500,
            icon: Wind,
        },
        {
            id: 8,
            name: "Cleaning Service",
            description: "Room and bed cleaning service",
            price: 1500,
            icon: Sparkles,
        },
        {
            id: 9,
            name: "Laboratory Test",
            description: "Blood, urine and other laboratory tests",
            price: 5500,
            icon: FlaskConical,
        },
        {
            id: 10,
            name: "Operation / OT",
            description: "Operation theater and surgical service",
            price: 18000,
            icon: Syringe,
        },
        {
            id: 11,
            name: "Emergency Service",
            description: "Emergency medical support",
            price: 4000,
            icon: AlertCircle,
        },
        {
            id: 12,
            name: "Hospital Service",
            description: "General hospital service charge",
            price: 2500,
            icon: Building2,
        },
    ]);

    const paidAmount = 30000;

    const totalCost = useMemo(() => {
        return costs.reduce((total, item) => total + item.price, 0);
    }, [costs]);

    const dueAmount = Math.max(totalCost - paidAmount, 0);

    const hospitalDays = 8;

    const handleEdit = () => {
        setEditForm(patient);
        setEditing(true);
    };

    const handleCancel = () => {
        setEditForm(patient);
        setEditing(false);
    };

    const handleSave = () => {
        setPatient(editForm);
        setEditing(false);
    };

    const handleChange = (
        field: keyof PatientInfo,
        value: string
    ) => {
        setEditForm((prev) => ({
            ...prev,
            [field]:
                field === "age"
                    ? Number(value)
                    : value,
        }));
    };

    const formatMoney = (amount: number) => {
        return new Intl.NumberFormat("en-BD", {
            style: "currency",
            currency: "BDT",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <main className="min-h-screen bg-slate-50 py-10">
            <div className="mx-auto max-w-7xl px-5">

                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <p className="font-semibold text-cyan-600">
                                Patient Dashboard
                            </p>

                            <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
                                My Profile
                            </h1>

                            <p className="mt-2 text-slate-500">
                                Manage your personal information and hospital expenses.
                            </p>
                        </div>

                        <Link
                            href="/appointment"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-100 transition hover:-translate-y-0.5"
                        >
                            <CalendarDays size={18} />
                            Book Appointment
                        </Link>
                    </div>
                </div>

                {/* Patient Profile */}
                <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                    <div className="h-32 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700" />

                    <div className="-mt-14 px-6 pb-7 md:px-8">

                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                            <div className="flex flex-col items-center gap-5 md:flex-row md:items-end">

                                <div className="relative h-28 w-28 overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-xl">
                                    <Image
                                        src={
                                            user?.photoURL ||
                                            "/images/doctor.png"
                                        }
                                        alt="Patient"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="text-center md:pb-1 md:text-left">
                                    <div className="flex items-center justify-center gap-2 md:justify-start">
                                        <h2 className="text-2xl font-bold text-slate-900">
                                            {patient.name}
                                        </h2>

                                        <CheckCircle2
                                            size={20}
                                            className="fill-cyan-500 text-white"
                                        />
                                    </div>

                                    <p className="mt-1 text-slate-500">
                                        Patient ID: #MC-2026-00125
                                    </p>

                                    <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                                        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                                            {patient.gender}
                                        </span>

                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                            {patient.age} Years
                                        </span>

                                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                                            Blood: {patient.bloodGroup}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {!editing ? (
                                <button
                                    onClick={handleEdit}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
                                >
                                    <Edit3 size={17} />
                                    Edit Profile
                                </button>
                            ) : (
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleCancel}
                                        className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold text-slate-600"
                                    >
                                        <X size={17} />
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleSave}
                                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
                                    >
                                        <Save size={17} />
                                        Save
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Information */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            {[
                                {
                                    icon: Mail,
                                    label: "Email",
                                    value: patient.email,
                                    field: "email" as keyof PatientInfo,
                                },
                                {
                                    icon: Phone,
                                    label: "Phone",
                                    value: patient.phone,
                                    field: "phone" as keyof PatientInfo,
                                },
                                {
                                    icon: MapPin,
                                    label: "Location",
                                    value: patient.location,
                                    field: "location" as keyof PatientInfo,
                                },
                                {
                                    icon: User,
                                    label: "Gender",
                                    value: patient.gender,
                                    field: "gender" as keyof PatientInfo,
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="rounded-2xl bg-slate-50 p-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                                                <Icon size={18} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs text-slate-400">
                                                    {item.label}
                                                </p>

                                                {editing ? (
                                                    <input
                                                        value={
                                                            editForm[item.field] as string
                                                        }
                                                        onChange={(e) =>
                                                            handleChange(
                                                                item.field,
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm outline-none focus:border-cyan-500"
                                                    />
                                                ) : (
                                                    <p className="truncate text-sm font-semibold text-slate-700">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Hospital Summary */}
                <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    <SummaryCard
                        icon={CalendarDays}
                        title="Admission"
                        value="01 Aug 2026"
                        subtitle="10:30 AM"
                    />

                    <SummaryCard
                        icon={CalendarDays}
                        title="Discharge"
                        value="08 Aug 2026"
                        subtitle="04:00 PM"
                    />

                    <SummaryCard
                        icon={BedDouble}
                        title="Bed Number"
                        value="ICU-204"
                        subtitle="Private Cabin"
                    />

                    <SummaryCard
                        icon={Clock3}
                        title="Hospital Stay"
                        value={`${hospitalDays} Days`}
                        subtitle="01 - 08 Aug"
                    />
                </section>

                {/* Billing */}
                <section className="mt-8">

                    <div className="mb-5">
                        <p className="font-semibold text-cyan-600">
                            Hospital Billing
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-slate-900">
                            Complete Cost Breakdown
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            All hospital services and expenses are listed below.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

                        {/* Cost List */}
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                            <div className="border-b border-slate-100 p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                                        <Receipt size={21} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Service & Cost List
                                        </h3>

                                        <p className="text-sm text-slate-500">
                                            {costs.length} hospital services
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="divide-y divide-slate-100">

                                {costs.map((cost) => {
                                    const Icon = cost.icon;

                                    return (
                                        <div
                                            key={cost.id}
                                            className="flex items-center justify-between gap-4 p-5 transition hover:bg-slate-50"
                                        >
                                            <div className="flex min-w-0 items-center gap-4">

                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                                                    <Icon size={20} />
                                                </div>

                                                <div className="min-w-0">
                                                    <h4 className="font-semibold text-slate-800">
                                                        {cost.name}
                                                    </h4>

                                                    <p className="mt-1 text-xs text-slate-400">
                                                        {cost.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="shrink-0 font-bold text-slate-900">
                                                {formatMoney(cost.price)}
                                            </p>
                                        </div>
                                    );
                                })}

                            </div>

                            {/* Total */}
                            <div className="border-t bg-slate-50 p-5">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-slate-600">
                                        Total Hospital Cost
                                    </span>

                                    <span className="text-2xl font-bold text-slate-900">
                                        {formatMoney(totalCost)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Card */}
                        <div className="h-fit rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl">

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-400">
                                        Total Bill
                                    </p>

                                    <h3 className="mt-1 text-3xl font-bold">
                                        {formatMoney(totalCost)}
                                    </h3>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                                    <CreditCard />
                                </div>
                            </div>

                            <div className="my-6 h-px bg-white/10" />

                            <div className="space-y-4">

                                <div className="flex justify-between">
                                    <span className="text-slate-400">
                                        Total Cost
                                    </span>

                                    <span className="font-semibold">
                                        {formatMoney(totalCost)}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-slate-400">
                                        Paid Amount
                                    </span>

                                    <span className="font-semibold text-emerald-400">
                                        {formatMoney(paidAmount)}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-slate-400">
                                        Due Amount
                                    </span>

                                    <span className="font-semibold text-red-400">
                                        {formatMoney(dueAmount)}
                                    </span>
                                </div>

                            </div>

                            <div className="mt-6 rounded-2xl bg-white/10 p-4">
                                <div className="flex items-center gap-3">
                                    <Wallet
                                        size={20}
                                        className="text-cyan-400"
                                    />

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Payment Status
                                        </p>

                                        <p className="mt-1 font-semibold">
                                            {dueAmount === 0
                                                ? "Fully Paid"
                                                : "Payment Due"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {dueAmount > 0 && (
                                <button
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-bold text-white transition hover:bg-cyan-400"
                                >
                                    <CreditCard size={19} />
                                    Pay {formatMoney(dueAmount)}
                                </button>
                            )}

                            <button
                                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 font-semibold text-slate-300 transition hover:bg-white/10"
                            >
                                <Receipt size={18} />
                                Download Invoice
                            </button>
                        </div>
                    </div>
                </section>

                {/* Additional Medical Information */}
                <section className="mt-8 grid gap-6 lg:grid-cols-2">

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900">
                            Medical Information
                        </h3>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">

                            <InfoItem
                                label="Blood Group"
                                value={patient.bloodGroup}
                            />

                            <InfoItem
                                label="Age"
                                value={`${patient.age} Years`}
                            />

                            <InfoItem
                                label="Gender"
                                value={patient.gender}
                            />

                            <InfoItem
                                label="Patient ID"
                                value="#MC-2026-00125"
                            />
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900">
                            Hospital Information
                        </h3>

                        <div className="mt-5 space-y-4">

                            <div className="flex items-center gap-3">
                                <Building2 className="text-cyan-600" />
                                <div>
                                    <p className="text-xs text-slate-400">
                                        Hospital
                                    </p>
                                    <p className="font-semibold text-slate-800">
                                        MediCare General Hospital
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin className="text-cyan-600" />
                                <div>
                                    <p className="text-xs text-slate-400">
                                        Location
                                    </p>
                                    <p className="font-semibold text-slate-800">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="text-cyan-600" />
                                <div>
                                    <p className="text-xs text-slate-400">
                                        Emergency
                                    </p>
                                    <p className="font-semibold text-slate-800">
                                        +880 1234-567890
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

/* Summary Card */

function SummaryCard({
    icon: Icon,
    title,
    value,
    subtitle,
}: {
    icon: React.ElementType;
    title: string;
    value: string;
    subtitle: string;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-slate-400">
                        {title}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {value}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                        {subtitle}
                    </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <Icon size={20} />
                </div>
            </div>
        </div>
    );
}

/* Info Item */

function InfoItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-400">
                {label}
            </p>

            <p className="mt-1 font-semibold text-slate-800">
                {value}
            </p>
        </div>
    );
}