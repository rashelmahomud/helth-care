import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ShieldCheck, Users, Clock3 } from "lucide-react";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white">
            {/* Background */}
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-50" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-50" />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20 lg:flex-row lg:py-28">
                {/* Left */}
                <div className="flex-1">
                    <span className="inline-flex items-center rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
                        ❤️ Trusted Healthcare Platform
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                        Caring For Your
                        <span className="block text-cyan-600">
                            Health Is Our Priority
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                        Book appointments with trusted doctors, access quality healthcare,
                        and receive personalized medical services from anywhere.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/appointment"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-7 py-4 font-semibold text-white transition hover:bg-cyan-700"
                        >
                            Book Appointment
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/doctors"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
                        >
                            Find a Doctor
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div>
                            <h3 className="text-3xl font-bold text-cyan-600">25+</h3>
                            <p className="mt-1 text-sm text-slate-500">Years Experience</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-600">120+</h3>
                            <p className="mt-1 text-sm text-slate-500">Doctors</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-600">18K+</h3>
                            <p className="mt-1 text-sm text-slate-500">Patients</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-600">24/7</h3>
                            <p className="mt-1 text-sm text-slate-500">Emergency</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="relative flex flex-1 justify-center">
                    {/* Main Image */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-cyan-100 blur-2xl" />

                        <div className="relative h-[420px] w-[320px] sm:h-[520px] sm:w-[400px] lg:h-[650px] lg:w-[520px]">
                            <Image
                                src="/images/doctor.png"
                                alt="Doctor"
                                fill
                                priority
                                sizes="(max-width:768px) 100vw, 520px"
                                className="object-contain"
                            />
                        </div>

                        {/* Floating Card 1 */}
                        <div className="absolute left-0 top-12 rounded-2xl bg-white p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-cyan-600" />

                                <div>
                                    <h4 className="font-semibold">100% Safe</h4>
                                    <p className="text-sm text-slate-500">
                                        Trusted Healthcare
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 2 */}
                        <div className="absolute right-0 top-1/2 rounded-2xl bg-white p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <Users className="text-cyan-600" />

                                <div>
                                    <h4 className="font-semibold">18K+</h4>
                                    <p className="text-sm text-slate-500">
                                        Happy Patients
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 3 */}
                        <div className="absolute bottom-8 left-12 rounded-2xl bg-white p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <Calendar className="text-cyan-600" />

                                <div>
                                    <h4 className="font-semibold">Easy Booking</h4>
                                    <p className="text-sm text-slate-500">
                                        Online Appointment
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 4 */}
                        <div className="absolute bottom-20 right-0 rounded-2xl bg-white p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <Clock3 className="text-cyan-600" />

                                <div>
                                    <h4 className="font-semibold">24/7</h4>
                                    <p className="text-sm text-slate-500">
                                        Emergency Care
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;