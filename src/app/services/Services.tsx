import Link from "next/link";
import {
    ArrowRight,
    HeartPulse,
    Stethoscope,
    Brain,
    Baby,
    Ambulance,
    Microscope,
} from "lucide-react";
import { Service } from "@/src/types/services";

const services: Service[] = [
    {
        id: 1,
        title: "General Medicine",
        description:
            "Professional diagnosis and treatment for everyday health concerns with experienced physicians.",
        icon: Stethoscope,
    },
    {
        id: 2,
        title: "Cardiology",
        description:
            "Comprehensive heart care including diagnosis, prevention, and treatment by expert cardiologists.",
        icon: HeartPulse,
    },
    {
        id: 3,
        title: "Neurology",
        description:
            "Advanced care for brain, spinal cord, and nervous system disorders using modern technology.",
        icon: Brain,
    },
    {
        id: 4,
        title: "Pediatrics",
        description:
            "Complete healthcare services for infants, children, and teenagers in a friendly environment.",
        icon: Baby,
    },
    {
        id: 5,
        title: "Emergency Care",
        description:
            "24/7 emergency medical services with rapid response and highly trained specialists.",
        icon: Ambulance,
    },
    {
        id: 6,
        title: "Laboratory",
        description:
            "Accurate diagnostic testing with modern laboratory equipment for fast and reliable results.",
        icon: Microscope,
    },
];

export default function Services() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                        Our Services
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
                        Healthcare Services
                        <span className="block text-cyan-600">
                            Designed For You
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We provide comprehensive medical services with experienced doctors,
                        advanced technology, and compassionate care to ensure the best
                        treatment for every patient.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl"
                            >
                                {/* Icon */}
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition-all duration-300 group-hover:bg-cyan-600">
                                    <Icon className="h-8 w-8 text-cyan-600 transition-colors duration-300 group-hover:text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 leading-7 text-slate-600">
                                    {service.description}
                                </p>

                                {/* Button */}
                                <Link
                                    href={`/services/${service.id}`}
                                    className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition-all group-hover:gap-3"
                                >
                                    Learn More
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700 hover:shadow-xl"
                    >
                        View All Services
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}