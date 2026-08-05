import Link from "next/link";
import Image from "next/image";
import {
    CheckCircle2,
    Clock3,
    ShieldCheck,
    Calendar,
    ArrowRight,
    ChevronRight,
} from "lucide-react";

const services = {
    cardiology: {
        title: "Cardiology",
        image: "/images/doctor.png",
        description:
            "Our Cardiology Department provides comprehensive diagnosis, treatment, and prevention for heart and vascular diseases using advanced medical technology.",
    },
    neurology: {
        title: "Neurology",
        image: "/images/doctor.png",
        description:
            "Expert neurological care for disorders affecting the brain, spinal cord, and nervous system.",
    },
    pediatrics: {
        title: "Pediatrics",
        image: "/images/doctor.png",
        description:
            "Complete healthcare services for infants, children, and adolescents.",
    },
    laboratory: {
        title: "Laboratory",
        image: "/images/doctor.png",
        description:
            "Modern diagnostic laboratory with accurate and reliable medical testing.",
    },
    emergency: {
        title: "Emergency Care",
        image: "/images/doctor.png",
        description:
            "24/7 emergency healthcare with rapid response and expert medical staff.",
    },
    "general-medicine": {
        title: "General Medicine",
        image: "/images/doctor.png",
        description:
            "Comprehensive healthcare for everyday illnesses, chronic disease management, and preventive care.",
    },
};

export default async function ServiceDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const service =
        services[slug as keyof typeof services] ??
        services["general-medicine"];

    return (
        <main className="bg-slate-50">
            {/* Hero */}
            <section className="bg-gradient-to-r from-cyan-600 to-sky-700 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center gap-2 text-cyan-100">
                        <Link href="/">Home</Link>

                        <ChevronRight size={16} />

                        <Link href="/services">Services</Link>

                        <ChevronRight size={16} />

                        <span className="text-white">{service.title}</span>
                    </div>

                    <h1 className="mt-6 text-5xl font-bold text-white">
                        {service.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* About */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={700}
                            height={550}
                            className="rounded-3xl object-cover shadow-xl"
                        />
                    </div>

                    <div>
                        <span className="rounded-full bg-cyan-100 px-4 py-2 font-semibold text-cyan-700">
                            About This Service
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-slate-900">
                            High Quality Medical Care
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            We combine experienced specialists, modern technology,
                            and patient-centered care to deliver outstanding medical
                            treatment tailored to every patient's needs.
                        </p>

                        <div className="mt-10 space-y-5">
                            {[
                                "Experienced Specialist Doctors",
                                "Advanced Medical Equipment",
                                "Personalized Treatment Plans",
                                "24/7 Emergency Support",
                                "Online Appointment Booking",
                                "Affordable Healthcare Services",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-cyan-600" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="bg-white py-20">
                <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
                    {[
                        {
                            title: "24/7 Service",
                            icon: Clock3,
                            text: "Emergency medical support available anytime.",
                        },
                        {
                            title: "Trusted Doctors",
                            icon: ShieldCheck,
                            text: "Certified specialists with years of experience.",
                        },
                        {
                            title: "Easy Booking",
                            icon: Calendar,
                            text: "Book appointments online in minutes.",
                        },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-3xl border bg-slate-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
                                    <Icon className="text-cyan-600" />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-slate-600">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Treatments */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <h2 className="text-center text-4xl font-bold">
                    Treatments Included
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Medical Consultation",
                        "Diagnostic Testing",
                        "Health Screening",
                        "Specialist Advice",
                        "Medication Guidance",
                        "Follow-up Care",
                    ].map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border bg-white p-6 shadow-sm"
                        >
                            <CheckCircle2 className="mb-4 text-cyan-600" />

                            <h4 className="text-xl font-semibold">
                                {item}
                            </h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-cyan-600 py-20">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-4xl font-bold text-white">
                        Need Professional Medical Care?
                    </h2>

                    <p className="mt-5 text-lg text-cyan-100">
                        Book an appointment today and consult with our
                        experienced healthcare specialists.
                    </p>

                    <Link
                        href="/appointment"
                        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:bg-slate-100"
                    >
                        Book Appointment
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}