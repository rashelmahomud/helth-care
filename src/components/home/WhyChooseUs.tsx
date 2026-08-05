import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Award,
    ShieldCheck,
    HeartPulse,
    Clock3,
    Stethoscope,
    Users,
} from "lucide-react";

const features = [
    {
        id: 1,
        title: "Experienced Doctors",
        description:
            "Our certified specialists provide world-class healthcare with years of medical experience.",
        icon: Stethoscope,
    },
    {
        id: 2,
        title: "Modern Equipment",
        description:
            "Advanced diagnostic technology ensures fast, accurate, and reliable treatment.",
        icon: Award,
    },
    {
        id: 3,
        title: "24/7 Emergency",
        description:
            "Emergency medical support is available around the clock whenever you need us.",
        icon: Clock3,
    },
    {
        id: 4,
        title: "Trusted Healthcare",
        description:
            "Thousands of patients trust us for safe, compassionate, and high-quality medical care.",
        icon: ShieldCheck,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Side */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="overflow-hidden rounded-[32px] shadow-2xl">
                            <Image
                                src="/images/doctor.png"
                                alt="Healthcare Team"
                                width={700}
                                height={750}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                                    <Users className="text-cyan-600" />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-slate-900">
                                        18K+
                                    </h3>
                                    <p className="text-slate-500">
                                        Happy Patients
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 right-6 rounded-2xl bg-cyan-600 px-6 py-4 text-white shadow-xl">
                            <div className="flex items-center gap-3">
                                <HeartPulse />
                                <span className="font-semibold">
                                    Trusted Since 1999
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                            Why Choose Us
                        </span>

                        <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                            We Provide The Best
                            <span className="block text-cyan-600">
                                Healthcare Experience
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We combine experienced doctors, modern medical technology,
                            compassionate care, and personalized treatment to ensure every
                            patient receives exceptional healthcare services.
                        </p>

                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.id}
                                        className="rounded-3xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                                            <Icon className="text-cyan-600" />
                                        </div>

                                        <h3 className="mt-5 text-xl font-bold text-slate-900">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-slate-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <Link
                            href="/about"
                            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-7 py-4 font-semibold text-white transition hover:bg-cyan-700 hover:shadow-xl"
                        >
                            Learn More
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}