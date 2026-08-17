"use client";

import Image from "next/image";
import { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    Pencil,
    Save,
    X,
    HeartPulse,
    BedDouble,
    Clock3,
    DollarSign,
    Stethoscope,
    ShieldCheck,
    FileText,
    Pill,
    PhoneCall,
    Droplets,
    Hospital,
    CheckCircle2,
} from "lucide-react";
import useAuth from "@/src/hooks/useAuth";

interface PatientProfile {
    firstName: string;
    lastName: string;
    phone: string;
    location: string;
    dateOfBirth: string;
    bloodGroup: string;
    emergencyContact: string;
    emergencyPhone: string;
}

const initialProfile: PatientProfile = {
    firstName: "John",
    lastName: "Smith",
    phone: "+880 1234-567890",
    location: "Dhaka, Bangladesh",
    dateOfBirth: "1998-05-15",
    bloodGroup: "O+",
    emergencyContact: "Sarah Smith",
    emergencyPhone: "+880 1987-654321",
};

export default function ProfilePage() {
    const { user } = useAuth();

    const [editing, setEditing] = useState(false);
    const [profile, setProfile] = useState(initialProfile);

    const handleChange = (
        field: keyof PatientProfile,
        value: string
    ) => {
        setProfile((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSave = () => {
        setEditing(false);

        // Later you can save this data to Firebase Firestore.
        console.log("Updated profile:", profile);
    };

    const handleCancel = () => {
        setProfile(initialProfile);
        setEditing(false);
    };

    return (
        <main className="min-h-screen bg-slate-50 py-10">
            <div className="mx-auto max-w-7xl px-5">

                {/* ================= HEADER ================= */}

                <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
                    <div>
                        <p className="font-medium text-cyan-600">
                            Patient Dashboard
                        </p>

                        <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
                            My Profile
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Manage your personal information and healthcare activity.
                        </p>
                    </div>

                    {!editing ? (
                        <button
                            onClick={() => setEditing(true)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
                        >
                            <Pencil size={18} />
                            Edit Profile
                        </button>
                    ) : (
                        <div className="flex gap-3">
                            <button
                                onClick={handleCancel}
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <X size={18} />
                                Cancel
                            </button>

                            <button
                                onClick={handleSave}
                                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
                            >
                                <Save size={18} />
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>

                {/* ================= PROFILE CARD ================= */}

                <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                    {/* Cover */}

                    <div className="relative h-40 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border-[40px] border-white" />
                            <div className="absolute -left-20 top-10 h-56 w-56 rounded-full border-[30px] border-white" />
                        </div>
                    </div>

                    {/* Profile */}

                    <div className="px-6 pb-7 md:px-10">

                        <div className="-mt-16 flex flex-col gap-5 md:flex-row md:items-end">

                            {/* Photo */}

                            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-xl">
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

                            {/* Name */}

                            <div className="flex-1 pb-1">

                                <div className="flex flex-wrap items-center gap-3">

                                    <h2 className="text-2xl font-bold text-slate-900">
                                        {user?.displayName}
                                    </h2>

                                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                        <CheckCircle2 size={14} />
                                        Verified Patient
                                    </span>

                                </div>

                                <p className="mt-2 flex items-center gap-2 text-slate-500">
                                    <Mail size={16} />
                                    {user?.email || "john@example.com"}
                                </p>

                            </div>

                            {/* Blood */}

                            <div className="flex items-center gap-3 rounded-2xl bg-red-50 px-5 py-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                                    <Droplets className="text-red-500" size={20} />
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500">
                                        Blood Group
                                    </p>

                                    <p className="font-bold text-red-600">
                                        {profile.bloodGroup}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ================= STATISTICS ================= */}

                <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    <StatCard
                        title="Total Appointments"
                        value="24"
                        subtitle="6 this year"
                        icon={<CalendarDays />}
                    />

                    <StatCard
                        title="Healthcare Cost"
                        value="$2,480"
                        subtitle="Total medical expenses"
                        icon={<DollarSign />}
                    />

                    <StatCard
                        title="Hospital Days"
                        value="18 Days"
                        subtitle="Across 3 admissions"
                        icon={<Clock3 />}
                    />

                    <StatCard
                        title="Current Bed"
                        value="B-204"
                        subtitle="City Care Hospital"
                        icon={<BedDouble />}
                    />

                </section>

                {/* ================= MAIN GRID ================= */}

                <div className="mt-8 grid gap-8 lg:grid-cols-3">

                    {/* LEFT */}

                    <div className="space-y-8 lg:col-span-2">

                        {/* Personal Information */}

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100">
                                    <User className="text-cyan-600" size={21} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">
                                        Personal Information
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        Your basic personal information
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">

                                <InputField
                                    label="First Name"
                                    value={profile.firstName}
                                    disabled={!editing}
                                    onChange={(value) =>
                                        handleChange("firstName", value)
                                    }
                                />

                                <InputField
                                    label="Last Name"
                                    value={profile.lastName}
                                    disabled={!editing}
                                    onChange={(value) =>
                                        handleChange("lastName", value)
                                    }
                                />

                                <InputField
                                    label="Phone Number"
                                    value={profile.phone}
                                    disabled={!editing}
                                    onChange={(value) =>
                                        handleChange("phone", value)
                                    }
                                />

                                <InputField
                                    label="Date of Birth"
                                    value={profile.dateOfBirth}
                                    type="date"
                                    disabled={!editing}
                                    onChange={(value) =>
                                        handleChange("dateOfBirth", value)
                                    }
                                />

                                <InputField
                                    label="Location"
                                    value={profile.location}
                                    disabled={!editing}
                                    onChange={(value) =>
                                        handleChange("location", value)
                                    }
                                />

                                <InputField
                                    label="Blood Group"
                                    value={profile.bloodGroup}
                                    disabled={!editing}
                                    onChange={(value) =>
                                        handleChange("bloodGroup", value)
                                    }
                                />

                            </div>

                        </section>

                        {/* Hospital Information */}

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                                    <Hospital className="text-blue-600" size={21} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">
                                        Hospital Information
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        Your current hospitalization details
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">

                                <InfoBox
                                    icon={<Hospital />}
                                    title="Hospital"
                                    value="City Care Hospital"
                                />

                                <InfoBox
                                    icon={<BedDouble />}
                                    title="Bed Number"
                                    value="B-204"
                                />

                                <InfoBox
                                    icon={<CalendarDays />}
                                    title="Admission Date"
                                    value="August 10, 2026"
                                />

                                <InfoBox
                                    icon={<CalendarDays />}
                                    title="Expected Discharge"
                                    value="August 18, 2026"
                                />

                                <InfoBox
                                    icon={<Clock3 />}
                                    title="Total Stay"
                                    value="8 Days"
                                />

                                <InfoBox
                                    icon={<DollarSign />}
                                    title="Estimated Cost"
                                    value="$1,240"
                                />

                            </div>

                        </section>

                        {/* Assigned Doctor */}

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="mb-6 flex items-center justify-between">

                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
                                        <Stethoscope className="text-purple-600" size={21} />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900">
                                            Assigned Doctor
                                        </h2>

                                        <p className="text-sm text-slate-500">
                                            Your primary healthcare provider
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col gap-5 rounded-2xl bg-slate-50 p-5 sm:flex-row sm:items-center">

                                <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                                    <Image
                                        src="/images/doctor.png"
                                        alt="Doctor"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900">
                                        Dr. Sarah Johnson
                                    </h3>

                                    <p className="mt-1 text-cyan-600">
                                        Cardiologist
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        City Care Hospital
                                    </p>
                                </div>

                                <button className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700">
                                    View Doctor
                                </button>

                            </div>

                        </section>

                        {/* Recent Appointments */}

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
                                    <CalendarDays className="text-green-600" size={21} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">
                                        Recent Appointments
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        Your latest medical appointments
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">

                                <Appointment
                                    doctor="Dr. Sarah Johnson"
                                    specialty="Cardiologist"
                                    date="Aug 10, 2026"
                                    status="Completed"
                                />

                                <Appointment
                                    doctor="Dr. Michael Brown"
                                    specialty="Neurologist"
                                    date="Jul 22, 2026"
                                    status="Completed"
                                />

                                <Appointment
                                    doctor="Dr. Emily Wilson"
                                    specialty="Pediatrician"
                                    date="Jun 18, 2026"
                                    status="Completed"
                                />

                            </div>

                        </section>

                    </div>

                    {/* RIGHT */}

                    <aside className="space-y-8">

                        {/* Emergency */}

                        <section className="rounded-3xl bg-gradient-to-br from-red-500 to-rose-600 p-6 text-white shadow-lg">

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                                    <PhoneCall size={22} />
                                </div>

                                <div>
                                    <p className="text-sm text-red-100">
                                        Emergency Contact
                                    </p>

                                    <h3 className="font-bold">
                                        {profile.emergencyContact}
                                    </h3>
                                </div>

                            </div>

                            <p className="mt-5 text-lg font-semibold">
                                {profile.emergencyPhone}
                            </p>

                            {editing && (
                                <div className="mt-5 space-y-3">
                                    <input
                                        value={profile.emergencyContact}
                                        onChange={(e) =>
                                            handleChange(
                                                "emergencyContact",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-xl bg-white/20 px-4 py-3 outline-none placeholder:text-white/60"
                                        placeholder="Contact name"
                                    />

                                    <input
                                        value={profile.emergencyPhone}
                                        onChange={(e) =>
                                            handleChange(
                                                "emergencyPhone",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-xl bg-white/20 px-4 py-3 outline-none placeholder:text-white/60"
                                        placeholder="Phone number"
                                    />
                                </div>
                            )}

                        </section>

                        {/* Medications */}

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">
                                    <Pill className="text-orange-600" size={21} />
                                </div>

                                <div>
                                    <h2 className="font-bold text-slate-900">
                                        Current Medications
                                    </h2>

                                    <p className="text-xs text-slate-500">
                                        Active prescriptions
                                    </p>
                                </div>

                            </div>

                            <div className="mt-5 space-y-3">

                                <Medicine
                                    name="Aspirin"
                                    dose="75mg • Once daily"
                                />

                                <Medicine
                                    name="Atorvastatin"
                                    dose="20mg • At night"
                                />

                                <Medicine
                                    name="Metoprolol"
                                    dose="25mg • Twice daily"
                                />

                            </div>

                        </section>

                        {/* Medical Records */}

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100">
                                    <FileText className="text-indigo-600" size={21} />
                                </div>

                                <div>
                                    <h2 className="font-bold text-slate-900">
                                        Medical Records
                                    </h2>

                                    <p className="text-xs text-slate-500">
                                        Recent documents
                                    </p>
                                </div>

                            </div>

                            <div className="mt-5 space-y-3">

                                <Record
                                    title="Blood Test Report"
                                    date="Aug 10, 2026"
                                />

                                <Record
                                    title="ECG Report"
                                    date="Aug 11, 2026"
                                />

                                <Record
                                    title="Prescription"
                                    date="Aug 12, 2026"
                                />

                            </div>

                        </section>

                        {/* Security */}

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
                                    <ShieldCheck className="text-green-600" size={21} />
                                </div>

                                <div>
                                    <h2 className="font-bold text-slate-900">
                                        Account Security
                                    </h2>

                                    <p className="text-xs text-slate-500">
                                        Keep your account secure
                                    </p>
                                </div>

                            </div>

                            <button className="mt-5 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                                Change Password
                            </button>

                            <button className="mt-3 w-full rounded-xl border border-red-200 py-3 text-sm font-semibold text-red-600 hover:bg-red-50">
                                Delete Account
                            </button>

                        </section>

                    </aside>

                </div>

            </div>
        </main>
    );
}

/* ================= COMPONENTS ================= */

function StatCard({
    title,
    value,
    subtitle,
    icon,
}: {
    title: string;
    value: string;
    subtitle: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                    {icon}
                </div>

                <HeartPulse
                    size={18}
                    className="text-slate-200"
                />

            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
                {title}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
                {value}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
                {subtitle}
            </p>

        </div>
    );
}

function InputField({
    label,
    value,
    disabled,
    type = "text",
    onChange,
}: {
    label: string;
    value: string;
    disabled: boolean;
    type?: string;
    onChange: (value: string) => void;
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
                {label}
            </label>

            <input
                type={type}
                value={value}
                disabled={disabled}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${disabled
                    ? "border-slate-200 bg-slate-50 text-slate-500"
                    : "border-cyan-300 bg-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                    }`}
            />
        </div>
    );
}

function InfoBox({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                {icon}
            </div>

            <div>
                <p className="text-xs text-slate-500">
                    {title}
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                    {value}
                </p>
            </div>

        </div>
    );
}

function Appointment({
    doctor,
    specialty,
    date,
    status,
}: {
    doctor: string;
    specialty: string;
    date: string;
    status: string;
}) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-4 sm:flex-row sm:items-center">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100">
                <Stethoscope className="text-cyan-600" size={20} />
            </div>

            <div className="flex-1">
                <h3 className="font-semibold text-slate-900">
                    {doctor}
                </h3>

                <p className="text-sm text-slate-500">
                    {specialty}
                </p>
            </div>

            <div className="text-left sm:text-right">
                <p className="text-sm font-semibold text-slate-700">
                    {date}
                </p>

                <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {status}
                </span>
            </div>

        </div>
    );
}

function Medicine({
    name,
    dose,
}: {
    name: string;
    dose: string;
}) {
    return (
        <div className="rounded-xl bg-orange-50 p-4">

            <p className="font-semibold text-slate-900">
                {name}
            </p>

            <p className="mt-1 text-sm text-slate-500">
                {dose}
            </p>

        </div>
    );
}

function Record({
    title,
    date,
}: {
    title: string;
    date: string;
}) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">

            <div className="flex items-center gap-3">

                <FileText
                    size={18}
                    className="text-indigo-500"
                />

                <div>
                    <p className="text-sm font-semibold text-slate-800">
                        {title}
                    </p>

                    <p className="text-xs text-slate-400">
                        {date}
                    </p>
                </div>

            </div>

            <button className="text-sm font-semibold text-cyan-600 hover:text-cyan-700">
                View
            </button>

        </div>
    );
}