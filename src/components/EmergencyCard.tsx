import Link from "next/link";
import {
    Ambulance,
    PhoneCall,
    Clock3,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

export default function EmergencyCard() {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 p-8 text-white shadow-2xl">
            {/* Background Decoration */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative z-10">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                    <Ambulance size={34} />
                </div>

                {/* Title */}
                <h2 className="mt-6 text-3xl font-bold">
                    Emergency Help
                </h2>

                <p className="mt-3 leading-7 text-cyan-100">
                    Need immediate medical assistance? Our emergency
                    team is available 24 hours a day, 7 days a week.
                </p>

                {/* Information */}
                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                        <PhoneCall size={22} />

                        <div>
                            <p className="text-sm text-cyan-100">
                                Emergency Hotline
                            </p>

                            <h3 className="text-lg font-semibold">
                                +880 1234 567890
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                        <Clock3 size={22} />

                        <div>
                            <p className="text-sm text-cyan-100">
                                Availability
                            </p>

                            <h3 className="font-semibold">
                                Open 24 Hours
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                        <ShieldCheck size={22} />

                        <div>
                            <p className="text-sm text-cyan-100">
                                Ambulance Service
                            </p>

                            <h3 className="font-semibold">
                                Fast Emergency Response
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 space-y-3">
                    <Link
                        href="tel:+8801234567890"
                        className="flex items-center justify-center gap-2 rounded-xl bg-white py-4 font-semibold text-cyan-700 transition hover:bg-slate-100"
                    >
                        <PhoneCall size={18} />
                        Call Emergency
                    </Link>

                    <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/30 py-4 font-semibold transition hover:bg-white/10"
                    >
                        Contact Hospital
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}