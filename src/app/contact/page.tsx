"use client";

import Link from "next/link";
import {
    ArrowRight,
    Clock3,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitted(true);

        e.currentTarget.reset();

        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <main className="bg-slate-50 dark:bg-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-600 to-blue-700">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28 dark:bg-slate-900">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                            Contact Us
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                            We&apos;re Here to
                            <span className="block text-cyan-100">
                                Help You
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
                            Have a question about our doctors, appointments, or healthcare
                            services? Our team is ready to help you.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/appointment"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-cyan-700 transition hover:bg-cyan-50"
                            >
                                Book Appointment
                                <ArrowRight size={18} />
                            </Link>

                            <a
                                href="tel:+15551234567"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                            >
                                <Phone size={18} />
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 ">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
                    <ContactCard
                        icon={<Phone size={25} />}
                        title="Call Us"
                        value="+1 (555) 123-4567"
                        description="Available for urgent questions"
                    />

                    <ContactCard
                        icon={<Mail size={25} />}
                        title="Email Us"
                        value="support@medicare.com"
                        description="We reply within 24 hours"
                    />

                    <ContactCard
                        icon={<MapPin size={25} />}
                        title="Visit Us"
                        value="New York, USA"
                        description="City Care Hospital"
                    />

                    <ContactCard
                        icon={<Clock3 size={25} />}
                        title="Working Hours"
                        value="9:00 AM - 5:00 PM"
                        description="Monday - Friday"
                    />
                </div>
            </section>

            {/* Contact Form + Sidebar */}
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                    <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
                        {/* Form */}
                        <div className="rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 p-6 shadow-sm md:p-10">
                            <div className="mb-8">
                                <span className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                                    Send a Message
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-500">
                                    How Can We Help?
                                </h2>

                                <p className="mt-3 text-slate-500">
                                    Fill out the form below and our healthcare team will get back
                                    to you as soon as possible.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="John Smith"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                                        />
                                    </div>
                                </div>

                                {/* Phone + Subject */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Phone Number
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (555) 123-4567"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Subject
                                        </label>

                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="appointment">
                                                Appointment
                                            </option>
                                            <option value="doctor">
                                                Doctor Information
                                            </option>
                                            <option value="service">
                                                Healthcare Service
                                            </option>
                                            <option value="billing">
                                                Billing
                                            </option>
                                            <option value="other">
                                                Other
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        placeholder="Write your message here..."
                                        className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                                    />
                                </div>

                                {/* Success */}
                                {submitted && (
                                    <div className="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
                                        ✓ Your message has been sent successfully!
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-200 transition hover:-translate-y-0.5 hover:from-cyan-700 hover:to-blue-700"
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Right Side */}
                        <div className="space-y-6">
                            {/* Emergency */}
                            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500">
                                    <Phone size={26} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    Need Emergency Help?
                                </h3>

                                <p className="mt-3 leading-7 text-slate-300">
                                    If you are experiencing a medical emergency, please contact
                                    emergency services immediately.
                                </p>

                                <a
                                    href="tel:911"
                                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-4 font-bold transition hover:bg-red-600"
                                >
                                    <Phone size={18} />
                                    Emergency: 911
                                </a>
                            </div>

                            {/* Chat */}
                            <div className="rounded-3xl border border-cyan-100 bg-cyan-50 dark:bg-slate-900 p-8">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-600 text-white">
                                    <MessageCircle size={26} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-slate-500">
                                    Need Quick Help?
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Our support team is available to answer your questions and
                                    help you find the right healthcare service.
                                </p>

                                <a
                                    href="mailto:support@medicare.com"
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-700 hover:text-cyan-800"
                                >
                                    Chat with Support
                                    <ArrowRight size={18} />
                                </a>
                            </div>

                            {/* Address */}
                            <div className="rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-500">
                                    Our Location
                                </h3>

                                <div className="mt-5 flex gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                                        <MapPin size={20} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800 dark:text-slate-500">
                                            City Care Hospital
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-slate-500">
                                            123 Healthcare Avenue
                                            <br />
                                            New York, NY 10001
                                            <br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-slate-200 bg-white dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
                    <span className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                        Your Health Matters
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-500 md:text-4xl">
                        Ready to Take Care of Your Health?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                        Book an appointment with one of our experienced doctors today.
                    </p>

                    <Link
                        href="/appointment"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-7 py-4 font-semibold text-white transition hover:bg-cyan-700"
                    >
                        Book an Appointment
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}

/* Contact Card */

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    description: string;
}

function ContactCard({
    icon,
    title,
    value,
    description,
}: ContactCardProps) {
    return (
        <div className="group rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                {icon}
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-500">
                {title}
            </h3>

            <p className="mt-2 font-semibold text-cyan-600">
                {value}
            </p>

            <p className="mt-1 text-sm text-slate-500">
                {description}
            </p>
        </div>
    );
}