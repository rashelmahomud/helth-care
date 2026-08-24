'use client'
import Image from "next/image";
import Link from "next/link";
import {
    CalendarDays,
    Filter,
    Search,
    Star,
    Stethoscope,
    X,
} from "lucide-react";
import { DoctorsType } from "@/src/types/doctors";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const doctorsall: DoctorsType[] = [

    {

        id: 1,

        name: "Dr. Sarah Johnson",

        specialty: "Cardiologist",

        experience: "12+ Years",

        rating: 4.9,

        reviews: 1248,

        image: "/images/doctor.png",

        hospital: "City Care Hospital",

        degree: "MBBS, MD (Cardiology)",

        patients: "15,000+",

        email: "sarah.johnson@healthcare.com",

        phone: "+1 (555) 123-4567",

        location: "New York, USA",

        consultationFee: "$80",

        languages: ["English", "Spanish"],

        availability: "Mon - Fri (9:00 AM - 5:00 PM)",

        about:

            "Dr. Sarah Johnson is a highly experienced cardiologist with over 12 years of clinical practice. She specializes in diagnosing and treating heart diseases using modern medical technologies. Her compassionate approach and patient-first philosophy have earned her the trust of thousands of patients.",

        education: [

            "MBBS - Harvard Medical School",

            "MD in Cardiology - Johns Hopkins University",

            "Fellowship in Interventional Cardiology",

        ],

        specializations: [

            "Heart Disease",

            "Hypertension",

            "Heart Failure",

            "ECG & Echocardiography",

            "Coronary Angiography",

            "Preventive Cardiology",

        ],

        achievements: [

            "Best Cardiologist Award 2023",

            "Published 35+ Medical Research Papers",

            "Member of American Heart Association",

        ],

        schedule: [

            { day: "Monday", time: "9:00 AM - 5:00 PM" },

            { day: "Tuesday", time: "9:00 AM - 5:00 PM" },

            { day: "Wednesday", time: "9:00 AM - 5:00 PM" },

            { day: "Thursday", time: "9:00 AM - 5:00 PM" },

            { day: "Friday", time: "9:00 AM - 5:00 PM" },

        ],

    },

    {

        id: 2,

        name: "Dr. Michael Brown",

        specialty: "Neurologist",

        experience: "10+ Years",

        rating: 4.8,

        reviews: 986,

        image: "/images/doctor-02.png",

        hospital: "Neuro Care Institute",

        degree: "MBBS, DM (Neurology)",

        patients: "10,500+",

        email: "michael.brown@healthcare.com",

        phone: "+1 (555) 222-4567",

        location: "Chicago, USA",

        consultationFee: "$90",

        languages: ["English", "French"],

        availability: "Mon - Sat (10:00 AM - 6:00 PM)",

        about:

            "Dr. Michael Brown is an experienced neurologist specializing in brain, spine, and nervous system disorders. He provides personalized treatment plans using the latest neurological advancements.",

        education: [

            "MBBS - Stanford University",

            "DM in Neurology",

            "Clinical Fellowship in Stroke Medicine",

        ],

        specializations: [

            "Stroke",

            "Epilepsy",

            "Migraine",

            "Parkinson's Disease",

            "Multiple Sclerosis",

            "Neuro Rehabilitation",

        ],

        achievements: [

            "Neurology Excellence Award",

            "Published 20+ Research Papers",

            "Member of American Academy of Neurology",

        ],

        schedule: [

            { day: "Monday", time: "10:00 AM - 6:00 PM" },

            { day: "Tuesday", time: "10:00 AM - 6:00 PM" },

            { day: "Wednesday", time: "10:00 AM - 6:00 PM" },

            { day: "Thursday", time: "10:00 AM - 6:00 PM" },

            { day: "Friday", time: "10:00 AM - 6:00 PM" },

            { day: "Saturday", time: "10:00 AM - 2:00 PM" },

        ],

    },

    {

        id: 3,

        name: "Dr. Emily Wilson",

        specialty: "Pediatrician",

        experience: "8+ Years",

        rating: 4.9,

        reviews: 1134,

        image: "/images/doctor-03.png",

        hospital: "Children's Medical Center",

        degree: "MBBS, MD (Pediatrics)",

        patients: "8,700+",

        email: "emily.wilson@healthcare.com",

        phone: "+1 (555) 333-4567",

        location: "Los Angeles, USA",

        consultationFee: "$70",

        languages: ["English"],

        availability: "Sun - Thu (9:00 AM - 4:00 PM)",

        about:

            "Dr. Emily Wilson provides comprehensive healthcare for infants, children, and adolescents. She believes in family-centered care and preventive medicine.",

        education: [

            "MBBS - UCLA",

            "MD in Pediatrics",

            "Child Health Fellowship",

        ],

        specializations: [

            "Newborn Care",

            "Child Vaccination",

            "Nutrition",

            "Growth Monitoring",

            "Child Development",

            "Pediatric Emergency",

        ],

        achievements: [

            "Best Pediatrician Award",

            "WHO Child Health Volunteer",

        ],

        schedule: [

            { day: "Sunday", time: "9:00 AM - 4:00 PM" },

            { day: "Monday", time: "9:00 AM - 4:00 PM" },

            { day: "Tuesday", time: "9:00 AM - 4:00 PM" },

            { day: "Wednesday", time: "9:00 AM - 4:00 PM" },

            { day: "Thursday", time: "9:00 AM - 4:00 PM" },

        ],

    },

    {

        id: 4,

        name: "Dr. David Lee",

        specialty: "General Physician",

        experience: "15+ Years",

        rating: 5.0,

        reviews: 1825,

        image: "/images/doctor-04.png",

        hospital: "Health First Hospital",

        degree: "MBBS, FCPS (Medicine)",

        patients: "22,000+",

        email: "david.lee@healthcare.com",

        phone: "+1 (555) 444-4567",

        location: "Houston, USA",

        consultationFee: "$60",

        languages: ["English", "Chinese"],

        availability: "Everyday (8:00 AM - 6:00 PM)",

        about:

            "Dr. David Lee has over 15 years of experience providing primary healthcare, preventive medicine, and chronic disease management. He is known for his friendly communication and holistic approach.",

        education: [

            "MBBS - University of Texas",

            "FCPS (Medicine)",

            "Internal Medicine Residency",

        ],

        specializations: [

            "Diabetes",

            "Hypertension",

            "Preventive Medicine",

            "Routine Health Checkups",

            "Family Medicine",

            "General Consultation",

        ],

        achievements: [

            "Top Physician Award",

            "Community Healthcare Excellence",

            "Medical Research Contributor",

        ],

        schedule: [

            { day: "Monday", time: "8:00 AM - 6:00 PM" },

            { day: "Tuesday", time: "8:00 AM - 6:00 PM" },

            { day: "Wednesday", time: "8:00 AM - 6:00 PM" },

            { day: "Thursday", time: "8:00 AM - 6:00 PM" },

            { day: "Friday", time: "8:00 AM - 6:00 PM" },

            { day: "Saturday", time: "8:00 AM - 2:00 PM" },

            { day: "Sunday", time: "Emergency Only" },

        ],

    },

];

const specializations = [
    "Cardiologist",
    "Neurologist",
    "Dermatologist",
    "Pediatrician",
    "Dentist",
    "Orthopedic",
];

export default function Doctors() {

    const [doctorSearch, setDoctorSearch] = useState('')
    const [special, setSpecial] = useState("")



    // filtering searcing and selected sercing
    // const doctors = doctorsall.filter((doctor) => doctor.specialty.toLowerCase().includes(doctorSearch.toLowerCase()) || doctor.name.toLowerCase().includes(doctorSearch.toLowerCase()))
    //================
    // const doctors = doctorsall.filter((doctor) => !special || doctor.specialty === special)




    const doctors = doctorsall.filter((doctor) => {

        const doctorSpecially = doctor.specialty.toLowerCase().includes(doctorSearch.toLowerCase()) || doctor.name.toLowerCase().includes(doctorSearch.toLowerCase())

        const doctorSelected = !special || doctor.specialty === special

        return doctorSpecially && doctorSelected
    }
    )



    const pathname = usePathname();
    // Check if the current route is NOT the home page ('/')
    const isDoctorPage = pathname === '/doctors';


    return (
        <section className="bg-slate-50 py-20 dark:bg-slate-900 transition-colors min-h-screen">
            <div className="mx-auto max-w-7xl px-6">



                {/* Main Content Layout: Sidebar + Grid */}
                {
                    isDoctorPage ? <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                        {/* LEFT SIDE: Search & Filter Sidebar */}
                        <div>
                            <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm sticky top-6">
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                                        <Filter size={18} className="text-cyan-600" />
                                        <span>Filters</span>
                                    </div>
                                    {(doctorSearch || special) && (
                                        <button
                                            // onClick={clearFilters}
                                            className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                                        >
                                            <X size={14} /> Reset
                                        </button>
                                    )}
                                </div>

                                {/* Search Input Box */}
                                <div className="mt-6">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                        Search Doctor
                                    </label>
                                    <div className="relative">
                                        <Search className="absolute left-3.5 top-3 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Name or specialty..."
                                            value={doctorSearch}
                                            onChange={(e) => setDoctorSearch(e.target.value)}
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                        />
                                    </div>
                                </div>

                                {/* Specialization List / Select Options */}
                                <div className="mt-6">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                        Specialization
                                    </label>
                                    <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                                        <button
                                            onClick={() => setSpecial("")}
                                            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition ${special === ""
                                                ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400"
                                                : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50"
                                                }`}
                                        >
                                            All Specializations
                                        </button>
                                        {specializations.map((spec) => (
                                            <button
                                                key={spec}
                                                onClick={() => setSpecial(spec)}
                                                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition ${special === spec
                                                    ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400"
                                                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50"
                                                    }`}
                                            >
                                                {spec}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT SIDE: Doctors Grid List */}
                        <div className="lg:col-span-3">
                            {/* Header Title Section */}
                            <div className="mb-12 text-center lg:text-left">
                                <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                                    Meet Our Doctors
                                </span>
                                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
                                    Experienced Specialists
                                </h2>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">
                                    Find and book appointments with top-rated medical professionals.
                                </p>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {doctors.length > 0 ? (
                                    doctors.map((doctor) => (
                                        <div
                                            key={doctor.id}
                                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 dark:border-slate-700 flex flex-col justify-between"
                                        >
                                            <div>
                                                {/* Image Container */}
                                                <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-900">
                                                    <Image
                                                        src={doctor.image}
                                                        alt={doctor.name}
                                                        fill
                                                        className="object-cover transition duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 shadow-md dark:bg-slate-900/90">
                                                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                                            {doctor.rating}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Content Details */}
                                                <div className="p-5">
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                                                        {doctor.name}
                                                    </h3>

                                                    <div className="mt-2 flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400">
                                                        <Stethoscope size={16} />
                                                        <span className="font-medium text-xs">
                                                            {doctor.specialty}
                                                        </span>
                                                    </div>

                                                    <div className="mt-1.5 flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                                        <CalendarDays size={16} />
                                                        <span className="text-xs">{doctor.experience} experience</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="p-5 pt-0 flex gap-2">
                                                <Link
                                                    href={`/doctors/${doctor.id}`}
                                                    className="flex-1 rounded-xl border border-cyan-600 py-2.5 text-center text-xs font-semibold text-cyan-600 transition hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-950/50"
                                                >
                                                    Profile
                                                </Link>

                                                <Link
                                                    href="/appointment"
                                                    className="flex-1 rounded-xl bg-cyan-600 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600"
                                                >
                                                    Book
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full py-16 text-center bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
                                        <p className="text-slate-500 dark:text-slate-400">
                                            No doctors found matching your filters.
                                        </p>
                                        <button
                                            // onClick={clearFilters}
                                            className="mt-3 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div> : <div className="lg:col-span-3">
                        {/* Header Title Section */}
                        <div className="mb-12 text-center">
                            {/* <div className="mb-12 text-center lg:text-left"> */}
                            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                                Meet Our Doctors
                            </span>
                            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
                                Experienced Specialists
                            </h2>
                            <p className="mt-2 text-slate-600 dark:text-slate-400">
                                Find and book appointments with top-rated medical professionals.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {doctors.length > 0 ? (
                                doctors.map((doctor) => (
                                    <div
                                        key={doctor.id}
                                        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 dark:border-slate-700 flex flex-col justify-between"
                                    >
                                        <div>
                                            {/* Image Container */}
                                            <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-900">
                                                <Image
                                                    src={doctor.image}
                                                    alt={doctor.name}
                                                    fill
                                                    className="object-cover transition duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 shadow-md dark:bg-slate-900/90">
                                                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                                        {doctor.rating}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content Details */}
                                            <div className="p-5">
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                                                    {doctor.name}
                                                </h3>

                                                <div className="mt-2 flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400">
                                                    <Stethoscope size={16} />
                                                    <span className="font-medium text-xs">
                                                        {doctor.specialty}
                                                    </span>
                                                </div>

                                                <div className="mt-1.5 flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                                    <CalendarDays size={16} />
                                                    <span className="text-xs">{doctor.experience} experience</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="p-5 pt-0 flex gap-2">
                                            <Link
                                                href={`/doctors/${doctor.id}`}
                                                className="flex-1 rounded-xl border border-cyan-600 py-2.5 text-center text-xs font-semibold text-cyan-600 transition hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-950/50"
                                            >
                                                Profile
                                            </Link>

                                            <Link
                                                href="/appointment"
                                                className="flex-1 rounded-xl bg-cyan-600 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600"
                                            >
                                                Book
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-16 text-center bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
                                    <p className="text-slate-500 dark:text-slate-400">
                                        No doctors found matching your filters.
                                    </p>
                                    <button
                                        // onClick={clearFilters}
                                        className="mt-3 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}