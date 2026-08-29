import { DoctorsType } from "@/src/types/doctors";
import { Award, BriefcaseMedical, CalendarDays, Clock3, FileText, Mail, Phone, Send, Star, Stethoscope, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const BookPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    const data = doctors.filter((doctor) => doctor.id.toString() === id)

    return (
        <div className="my-10">

            {
                data.map((doctor) => <div key={doctor.id} className="grid lg:grid-cols-3 gap-10">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        {/* Doctor Image */}
                        <div className="relative h-80 bg-gradient-to-br from-cyan-50 to-sky-100">
                            <Image
                                src={doctor.image}
                                alt="Doctor"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-5 p-6">
                            {/* Name */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">
                                    {doctor.name}
                                </h2>

                                <p className="font-medium text-cyan-600">
                                    Senior Cardiologist
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                </div>

                                <span className="text-sm text-slate-500">
                                    (4.9 Rating)
                                </span>
                            </div>

                            {/* Information */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-900 dark:border p-3">
                                    <BriefcaseMedical
                                        className="text-cyan-600"
                                        size={22}
                                    />

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Experience
                                        </p>

                                        <h4 className="font-semibold dark:text-slate-500">
                                            15+ Years
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-900 dark:border p-3">
                                    <Stethoscope
                                        className="text-cyan-600"
                                        size={22}
                                    />

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Patients
                                        </p>

                                        <h4 className="font-semibold dark:text-slate-500">
                                            12,500+
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-900 dark:border p-3">
                                    <Award
                                        className="text-cyan-600"
                                        size={22}
                                    />

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Qualification
                                        </p>

                                        <h4 className="font-semibold dark:text-slate-500">
                                            MBBS, FCPS
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <Link
                                href="/doctors"
                                className="block rounded-xl bg-cyan-600 py-3 text-center font-semibold text-white transition hover:bg-cyan-700"
                            >
                                View Full Profile
                            </Link>
                        </div>
                    </div>
                    <section className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 p-6 shadow-xl md:p-10 ">
                        {/* Header */}
                        <div className="mb-10">
                            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                                Appointment Form
                            </span>

                            <h2 className="mt-4 text-3xl font-bold text-slate-900">
                                Book Your Appointment
                            </h2>

                            <p className="mt-2 text-slate-500">
                                Fill out the form below and our medical team will contact you shortly
                                to confirm your appointment.
                            </p>
                        </div>

                        <form className="space-y-6">
                            {/* Row 1 */}
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Name */}
                                <div>
                                    <label className="mb-2 block font-medium text-slate-700">
                                        Full Name
                                    </label>

                                    <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                                        <User className="text-slate-400" size={18} />

                                        <input
                                            type="text"
                                            placeholder="John Smith"
                                            className="w-full bg-transparent px-3 py-4 outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="mb-2 block font-medium text-slate-700">
                                        Email Address
                                    </label>

                                    <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                                        <Mail className="text-slate-400" size={18} />

                                        <input
                                            type="email"
                                            placeholder="john@email.com"
                                            className="w-full bg-transparent px-3 py-4 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Phone */}
                                <div>
                                    <label className="mb-2 block font-medium text-slate-700">
                                        Phone Number
                                    </label>

                                    <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                                        <Phone className="text-slate-400" size={18} />

                                        <input
                                            type="tel"
                                            placeholder="+880 1234 567890"
                                            className="w-full bg-transparent px-3 py-4 outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Department */}
                                <div>
                                    <label className="mb-2 block font-medium text-slate-700">
                                        Department
                                    </label>

                                    <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                                        <Stethoscope className="text-slate-400" size={18} />

                                        <select className="w-full bg-transparent px-3 py-4 outline-none bg-white dark:bg-slate-900">
                                            <option>Select Department</option>
                                            <option>Cardiology</option>
                                            <option>Neurology</option>
                                            <option>Orthopedics</option>
                                            <option>Dental</option>
                                            <option>Pediatrics</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Date */}
                                <div>
                                    <label className="mb-2 block font-medium text-slate-700">
                                        Appointment Date
                                    </label>

                                    <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                                        <CalendarDays className="text-slate-400" size={18} />

                                        <input
                                            type="date"
                                            className="w-full bg-transparent px-3 py-4 outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="mb-2 block font-medium text-slate-700">
                                        Preferred Time
                                    </label>

                                    <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                                        <Clock3 className="text-slate-400" size={18} />

                                        <input
                                            type="time"
                                            className="w-full bg-transparent px-3 py-4 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block font-medium text-slate-700">
                                    Medical Concern
                                </label>

                                <div className="flex rounded-xl border border-slate-300 px-4 py-3 focus-within:border-cyan-500">
                                    <FileText className="mt-1 text-slate-400" size={18} />

                                    <textarea
                                        rows={5}
                                        placeholder="Briefly describe your symptoms or reason for the appointment..."
                                        className="w-full resize-none bg-transparent px-3 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700 active:scale-[0.98]"
                            >
                                Book Appointment
                                <Send size={18} />
                            </button>
                        </form>
                    </section>
                </div>)
            }

        </div>
    );
};

export default BookPage;