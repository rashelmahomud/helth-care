import Image from "next/image";
import Link from "next/link";
import { Star, CalendarDays, GraduationCap, Award, ArrowLeft } from "lucide-react";
import { Doctor } from "@/src/types/doctors";

const doctors: Doctor[] = [

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

        image: "/images/doctor-03.png",

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

        image: "/images/doctor-02.png",

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


export default async function DoctorProfile({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const doctor = doctors.find((d) => d.id.toString() === slug) ?? doctors[0];

    return (
        <main className="bg-slate-50">
            <section className="bg-gradient-to-r from-cyan-600 to-sky-700 py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 text-cyan-100 hover:text-white"
                    >
                        <ArrowLeft size={18} />
                        Back to Doctors
                    </Link>

                    <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
                        <div className="relative h-[500px] overflow-hidden rounded-3xl bg-white">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <span className="rounded-full bg-white/20 px-4 py-2 text-white">
                                {doctor.specialty}
                            </span>

                            <h1 className="mt-6 text-5xl font-bold text-white">
                                {doctor.name}
                            </h1>

                            <div className="mt-6 flex flex-wrap gap-6 text-cyan-100">
                                <div className="flex items-center gap-2">
                                    <Star className="fill-yellow-400 text-yellow-400" size={18} />
                                    {doctor.rating}
                                </div>

                                <div className="flex items-center gap-2">
                                    <CalendarDays size={18} />
                                    {doctor.experience}
                                </div>
                            </div>

                            <p className="mt-8 leading-8 text-cyan-50">
                                {doctor.about}
                            </p>

                            <div className="mt-10 flex gap-4">
                                <Link
                                    href="/appointment"
                                    className="rounded-xl bg-white px-7 py-4 font-semibold text-cyan-700 hover:bg-slate-100"
                                >
                                    Book Appointment
                                </Link>

                                <Link
                                    href="/contact"
                                    className="rounded-xl border border-white px-7 py-4 font-semibold text-white hover:bg-white hover:text-cyan-700"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-3xl bg-white p-8 shadow">
                        <GraduationCap className="mb-4 text-cyan-600" />
                        <h3 className="text-xl font-bold">Education</h3>
                        <p className="mt-3 text-slate-600">
                            {doctor.education}
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow">
                        <Award className="mb-4 text-cyan-600" />
                        <h3 className="text-xl font-bold">Hospital</h3>
                        <p className="mt-3 text-slate-600">
                            {doctor.hospital}
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow">
                        <Star className="mb-4 text-cyan-600" />
                        <h3 className="text-xl font-bold">Patients</h3>
                        <p className="mt-3 text-slate-600">
                            {doctor.patients}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}