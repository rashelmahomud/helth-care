import Link from "next/link";
import { CalendarCheck2, ChevronRight, Clock3, PhoneCall, ShieldCheck } from "lucide-react";

export default function AppointmentHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700">
            {/* Background Blur */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-cyan-100">
                    <Link href="/" className="transition hover:text-white">
                        Home
                    </Link>

                    <ChevronRight size={16} />

                    <span className="font-medium text-white">
                        Appointment
                    </span>
                </div>

                {/* Main Content */}
                <div className="mt-8 max-w-3xl">
                    <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
                        <CalendarCheck2 className="mr-2 h-4 w-4" />
                        Online Appointment Booking
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                        Book Your
                        <span className="block text-cyan-200">
                            Medical Appointment
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-100">
                        Schedule an appointment with our experienced doctors.
                        Fast booking, secure healthcare services, and compassionate
                        medical care—all in one place.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="#appointment-form"
                            className="rounded-xl bg-white px-7 py-4 font-semibold text-cyan-700 transition hover:bg-slate-100"
                        >
                            Book Now
                        </Link>

                        <Link
                            href="/doctors"
                            className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                        >
                            Find a Doctor
                        </Link>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                        <Clock3 className="mb-4 h-8 w-8 text-cyan-200" />

                        <h3 className="text-xl font-semibold text-white">
                            24/7 Availability
                        </h3>

                        <p className="mt-2 text-cyan-100">
                            Our emergency and appointment services are available
                            around the clock.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                        <ShieldCheck className="mb-4 h-8 w-8 text-cyan-200" />

                        <h3 className="text-xl font-semibold text-white">
                            Trusted Doctors
                        </h3>

                        <p className="mt-2 text-cyan-100">
                            Consult experienced specialists with years of medical
                            expertise.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                        <PhoneCall className="mb-4 h-8 w-8 text-cyan-200" />

                        <h3 className="text-xl font-semibold text-white">
                            Emergency Support
                        </h3>

                        <p className="mt-2 text-cyan-100">
                            Call us anytime for urgent medical assistance and
                            ambulance support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}