import Image from "next/image";
import Link from "next/link";
import {
    Star,
    CalendarDays,
    GraduationCap,
    Award,
    ArrowLeft,
    MapPin,
    Mail,
    Clock,
    Languages,
    CheckCircle,
    Users,
    ShieldCheck
} from "lucide-react";
import { DoctorsType } from "@/src/types/doctors";

// Mock data array (kept as provided in your prompt)
const doctors: DoctorsType[] = [

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

export default async function DoctorProfile({ params }: { params: Promise<{ id: string }>; }) {

    const { id } = await params;

    const doctor = doctors.find((d) => d.id.toString() == id) ?? doctors[0];
    return (
        <main className="min-h-screen bg-[#F8FAFC] pb-24 text-slate-800">
            {/* Top Navigation bar */}
            <div className="bg-white border-b border-slate-200/80">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 transition"
                    >
                        <ArrowLeft size={16} />
                        Back to Doctors List
                    </Link>
                </div>
            </div>

            {/* Main Profile Header Card */}
            <div className="mx-auto max-w-7xl px-6 pt-8">
                <div className="rounded-3xl bg-white border border-slate-200/80 shadow-sm p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

                        {/* Doctor Photo */}
                        <div className="lg:col-span-3 flex justify-center">
                            <div className="relative h-64 w-64 lg:h-72 lg:w-72 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>

                        {/* Doctor Details */}
                        <div className="lg:col-span-6 space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-md bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700 uppercase tracking-wider">
                                    {doctor.specialty}
                                </span>
                                <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                                    <ShieldCheck size={14} /> Verified Practitioner
                                </span>
                            </div>

                            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                                {doctor.name}
                            </h1>

                            <p className="text-sm font-medium text-slate-500">
                                {doctor.degree} • <span className="text-slate-700">{doctor.hospital}</span>
                            </p>

                            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-600">
                                <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                                    <Star className="fill-amber-400 text-amber-400" size={16} />
                                    <span>{doctor.rating}</span>
                                    <span className="text-slate-400 font-normal">({doctor.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={16} className="text-slate-400" />
                                    <span>{doctor.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <CalendarDays size={16} className="text-slate-400" />
                                    <span>{doctor.experience} Exp.</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-600 border-t border-slate-100 mt-4">
                                <span className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg">
                                    <Languages size={14} className="text-slate-500" /> {doctor.languages.join(", ")}
                                </span>
                                <span className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg">
                                    <Mail size={14} className="text-slate-500" /> {doctor.email}
                                </span>
                            </div>
                        </div>

                        {/* Action Box / Consultation Fee */}
                        <div className="lg:col-span-3 flex flex-col justify-between rounded-2xl bg-slate-50 border border-slate-200/60 p-6 text-center">
                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Consultation Fee</span>
                                <div className="text-3xl font-extrabold text-slate-900 mt-1">{doctor.consultationFee}</div>
                                <span className="text-xs text-emerald-600 font-medium">No extra booking charges</span>
                            </div>

                            <div className="mt-6 space-y-2">
                                <Link
                                    href="/appointment"
                                    className="block w-full rounded-xl bg-cyan-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 transition"
                                >
                                    Book Appointment
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block w-full rounded-xl bg-white border border-slate-300 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                                >
                                    Contact Doctor
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Grid Layout for Content & Schedule */}
            <div className="mx-auto max-w-7xl px-6 mt-8">
                <div className="grid gap-8 lg:grid-cols-12">

                    {/* Left Column: About, Specializations, Education */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* About Section */}
                        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">About Dr. Johnson</h3>
                            <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                                {doctor.about}
                            </p>
                        </div>

                        {/* Specializations */}
                        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Award className="text-cyan-600" size={20} />
                                Clinical Specializations
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {doctor.specializations.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs font-semibold text-slate-700">
                                        <CheckCircle size={14} className="text-cyan-600 shrink-0" />
                                        <span>{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education & Training */}
                        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <GraduationCap className="text-cyan-600" size={20} />
                                Education & Background
                            </h3>
                            <div className="space-y-3">
                                {doctor.education.map((edu, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                                        <div className="h-2 w-2 rounded-full bg-cyan-600" />
                                        <span>{edu}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Award className="text-cyan-600" size={20} />
                                Awards & Memberships
                            </h3>
                            <div className="space-y-3">
                                {doctor.achievements.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                        <span className="h-6 w-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">★</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Schedule Card & Quick Metrics */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Weekly Schedule */}
                        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                    <Clock size={18} className="text-cyan-600" />
                                    Availability Schedule
                                </h3>
                            </div>

                            <div className="space-y-2.5">
                                {doctor.schedule.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-slate-50 last:border-0">
                                        <span className="font-semibold text-slate-600">{item.day}</span>
                                        <span className="font-medium text-slate-900">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats Block */}
                        <div className="rounded-3xl bg-cyan-900 text-white p-6 shadow-sm">
                            <h4 className="font-bold text-base mb-4 flex items-center gap-2">
                                <Users size={18} className="text-cyan-400" /> Clinic Highlights
                            </h4>
                            <div className="space-y-4 text-sm text-cyan-100">
                                <div className="flex justify-between items-center border-b border-cyan-800/60 pb-2">
                                    <span>Total Patients</span>
                                    <span className="font-bold text-white">{doctor.patients}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-cyan-800/60 pb-2">
                                    <span>Primary Hospital</span>
                                    <span className="font-bold text-white">{doctor.hospital}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Direct Line</span>
                                    <span className="font-bold text-white">{doctor.phone}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}