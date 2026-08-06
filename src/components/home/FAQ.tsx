"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        id: "item-1",
        question: "How do I book an appointment?",
        answer:
            "You can book an appointment online by selecting your preferred doctor, choosing a suitable date and time, and completing the booking form. You will receive a confirmation after your appointment is scheduled.",
    },
    {
        id: "item-2",
        question: "Can I choose a specific doctor?",
        answer:
            "Yes. You can browse our experienced doctors, view their profiles, specialties, schedules, and book an appointment with the doctor of your choice.",
    },
    {
        id: "item-3",
        question: "Do you provide emergency services?",
        answer:
            "Yes, our emergency department is available 24 hours a day, 7 days a week, providing immediate medical care for urgent health conditions.",
    },
    {
        id: "item-4",
        question: "Can I cancel or reschedule my appointment?",
        answer:
            "Absolutely. You can cancel or reschedule your appointment through your account dashboard or by contacting our support team before your scheduled visit.",
    },
    {
        id: "item-5",
        question: "Do you accept health insurance?",
        answer:
            "Yes. We accept most major health insurance providers. Please contact us to confirm whether your insurance plan is supported.",
    },
    {
        id: "item-6",
        question: "What should I bring to my appointment?",
        answer:
            "Please bring your identification, insurance card (if applicable), previous medical records, prescriptions, and any relevant test reports.",
    },
];

const FAQ = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                            Have Questions?
                            <span className="block text-cyan-600">
                                We've Got Answers
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Find answers to the most common questions about appointments,
                            healthcare services, insurance, and our medical specialists.
                        </p>

                        <div className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-600 p-8 text-white">
                            <h3 className="text-2xl font-bold">
                                Still Need Help?
                            </h3>

                            <p className="mt-4 text-cyan-100">
                                Our support team is available to answer your questions and help
                                you book the right healthcare service.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-cyan-700 transition hover:bg-slate-100"
                            >
                                Contact Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="rounded-3xl bg-white p-8 shadow-xl">
                        <Accordion className="w-full">
                            {faqs.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>

                                    <AccordionContent className="text-base leading-7 text-slate-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;