import Image from "next/image";
import { HeartPulse, ShieldCheck, Users, Star } from "lucide-react";

export default function AuthBanner() {
    return (
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 lg:flex">
            {/* Background Decorations */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative flex w-full flex-col justify-between p-10 xl:p-14">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                        <HeartPulse className="h-8 w-8 text-white" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            MediCare
                        </h2>

                        <p className="text-cyan-100">
                            Healthcare Platform
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-10">
                    <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                        Trusted by 18,000+ Patients
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white">
                        Your Health
                        <span className="block text-cyan-200">
                            Our Priority
                        </span>
                    </h1>

                    <p className="mt-6 max-w-md text-lg leading-8 text-cyan-100">
                        Secure appointments, experienced doctors,
                        and compassionate healthcare—all in one place.
                    </p>
                </div>

                {/* Doctor Section */}
                <div className="relative mt-14 flex justify-center">
                    {/* Glow */}
                    <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-300/30 blur-3xl" />

                    {/* Image Card */}
                    <div className="relative overflow-hidden rounded-[35px] border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
                        <Image
                            src="/images/doctor.png"
                            alt="Doctor"
                            width={380}
                            height={520}
                            priority
                            className="object-contain"
                        />

                        {/* Bottom Fade */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-700/60 to-transparent" />
                    </div>

                    {/* Floating Card 1 */}
                    <div className="absolute -left-8 top-10 rounded-2xl bg-white p-4 shadow-xl">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-cyan-600" />

                            <div>
                                <h4 className="font-semibold text-slate-800">
                                    100% Secure
                                </h4>

                                <p className="text-sm text-slate-500">
                                    Patient Data
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Card 2 */}
                    <div className="absolute -right-8 bottom-16 rounded-2xl bg-white p-4 shadow-xl">
                        <div className="flex items-center gap-3">
                            <Users className="text-cyan-600" />

                            <div>
                                <h4 className="font-semibold text-slate-800">
                                    18K+
                                </h4>

                                <p className="text-sm text-slate-500">
                                    Happy Patients
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Statistics */}
                <div className="mt-12 grid grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-md">
                        <h3 className="text-3xl font-bold text-white">
                            120+
                        </h3>

                        <p className="mt-2 text-sm text-cyan-100">
                            Doctors
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-md">
                        <h3 className="text-3xl font-bold text-white">
                            25+
                        </h3>

                        <p className="mt-2 text-sm text-cyan-100">
                            Years
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-md">
                        <div className="flex justify-center">
                            <Star
                                className="fill-yellow-400 text-yellow-400"
                                size={28}
                            />
                        </div>

                        <h3 className="mt-2 text-3xl font-bold text-white">
                            4.9
                        </h3>

                        <p className="mt-2 text-sm text-cyan-100">
                            Rating
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}