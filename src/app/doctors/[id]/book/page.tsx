import { getDoctor } from "@/src/api/doctorApi";
import { DoctorsType } from "@/src/types/doctors";
import { Award, BriefcaseMedical, Star, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/src/components/BookingForm"; // Adjust import path based on your folder structure

interface BookPageProps {
    params: Promise<{ id: string }>;
}

const BookPage = async ({ params }: BookPageProps) => {
    const { id } = await params;
    const doctor: DoctorsType = await getDoctor(id);

    if (!doctor) {
        return <div className="text-center py-20 text-xl font-bold">Doctor Not Found !!!</div>;
    }

    return (
        <div className="my-10 max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold mb-6">hello how are you all dear</h1>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Doctor Profile Card (Server Side Rendered) */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl h-fit">
                    <div className="relative h-80 bg-gradient-to-br from-cyan-50 to-sky-100">
                        <Image
                            src={doctor.image}
                            alt={doctor.name || "Doctor"}
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>

                    <div className="space-y-5 p-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {doctor?.name}
                            </h2>
                            <p className="font-medium text-cyan-600">
                                {doctor?.specialty}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                            </div>
                            <span className="text-sm text-slate-500">
                                {doctor?.rating}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-900 dark:border p-3">
                                <BriefcaseMedical className="text-cyan-600" size={22} />
                                <div>
                                    <p className="text-sm text-slate-500">Experience</p>
                                    <h4 className="font-semibold dark:text-slate-300">
                                        {doctor?.experience}
                                    </h4>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-900 dark:border p-3">
                                <Stethoscope className="text-cyan-600" size={22} />
                                <div>
                                    <p className="text-sm text-slate-500">Patients</p>
                                    <h4 className="font-semibold dark:text-slate-300">
                                        {doctor?.patients}
                                    </h4>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-900 dark:border p-3">
                                <Award className="text-cyan-600" size={22} />
                                <div>
                                    <p className="text-sm text-slate-500">Qualification</p>
                                    <h4 className="font-semibold dark:text-slate-300">
                                        {doctor?.degree}
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/doctors"
                            className="block rounded-xl bg-cyan-600 py-3 text-center font-semibold text-white transition hover:bg-cyan-700"
                        >
                            View Full Profile
                        </Link>
                    </div>
                </div>

                {/* Appointment Form Component */}
                <BookingForm doctor={doctor} />
            </div>
        </div>
    );
};

export default BookPage;