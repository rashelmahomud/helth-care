import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    Star,
    Stethoscope,
} from "lucide-react";
import { DoctorsType } from "@/src/types/doctors";

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



export default function Doctors() {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                        Meet Our Doctors
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        Experienced Specialists
                        <span className="block text-cyan-600">
                            Dedicated To Your Health
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Our team of experienced doctors is committed to providing
                        compassionate, personalized, and high-quality healthcare using
                        modern medical technology.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-lg">
                                    <Star
                                        size={16}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                    <span className="text-sm font-semibold">
                                        {doctor.rating}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {doctor.name}
                                </h3>

                                <div className="mt-3 flex items-center gap-2 text-cyan-600">
                                    <Stethoscope size={18} />
                                    <span className="font-medium">
                                        {doctor.specialty}
                                    </span>
                                </div>

                                <div className="mt-2 flex items-center gap-2 text-slate-500">
                                    <CalendarDays size={18} />
                                    <span>{doctor.experience}</span>
                                </div>

                                <div className="mt-8 flex gap-3">
                                    <Link
                                        href={`/doctors/${doctor.id}`}
                                        className="flex-1 rounded-xl border border-cyan-600 py-3 text-center font-semibold text-cyan-600 transition hover:bg-cyan-50"
                                    >
                                        View Profile
                                    </Link>

                                    <Link
                                        href="/appointment"
                                        className="flex-1 rounded-xl bg-cyan-600 py-3 text-center font-semibold text-white transition hover:bg-cyan-700"
                                    >
                                        Book
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
                    >
                        View All Doctors
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}