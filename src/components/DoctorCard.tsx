import Image from "next/image";
import Link from "next/link";
import {
    Star,
    BriefcaseMedical,
    Stethoscope,
    Award,
} from "lucide-react";

export default function DoctorCard() {
    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* Doctor Image */}
            <div className="relative h-80 bg-gradient-to-br from-cyan-50 to-sky-100">
                <Image
                    src="/images/doctor.png"
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
                        Dr. John Smith
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
    );
}