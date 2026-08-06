import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    PhoneCall,
    ShieldCheck,
} from "lucide-react";

const AppointmentCTA = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 py-24">
            {/* Background Decorations */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl">
                    <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">
                        {/* Left */}
                        <div>
                            <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                                <CalendarDays size={16} className="mr-2" />
                                Book Your Appointment Today
                            </span>

                            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                                Your Health Deserves
                                <span className="block text-cyan-200">
                                    The Best Medical Care
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-cyan-100">
                                Connect with experienced specialists, schedule appointments
                                online, and receive world-class healthcare with personalized
                                treatment plans.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="/appointment"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-cyan-700 transition hover:scale-105 hover:bg-slate-100"
                                >
                                    Book Appointment
                                    <ArrowRight size={18} />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                                >
                                    <PhoneCall size={18} />
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-3xl bg-white p-8 shadow-xl">
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
                                    <CalendarDays className="text-cyan-600" size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                    Easy Booking
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Book your appointment online anytime in just a few clicks.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-white p-8 shadow-xl">
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                                    <ShieldCheck className="text-emerald-600" size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                    Trusted Doctors
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Receive care from experienced specialists using modern medical
                                    technology.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-white p-8 shadow-xl sm:col-span-2">
                                <div className="grid gap-6 md:grid-cols-3">
                                    <div className="text-center">
                                        <h3 className="text-4xl font-extrabold text-cyan-600">
                                            120+
                                        </h3>
                                        <p className="mt-2 text-slate-600">
                                            Expert Doctors
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-4xl font-extrabold text-cyan-600">
                                            25K+
                                        </h3>
                                        <p className="mt-2 text-slate-600">
                                            Happy Patients
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-4xl font-extrabold text-cyan-600">
                                            24/7
                                        </h3>
                                        <p className="mt-2 text-slate-600">
                                            Emergency Care
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentCTA;