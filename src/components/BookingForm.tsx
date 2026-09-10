"use client";

import { DoctorsType } from "@/src/types/doctors";
import { CalendarDays, Clock3, FileText, Mail, Phone, Send, Stethoscope, User } from "lucide-react";
import { useState } from "react";

interface BookingFormProps {
    doctor: DoctorsType;
}

export default function BookingForm({ doctor }: BookingFormProps) {
    const initialFormData = {
        fullName: '',
        email: '',
        phone: '',
        department: doctor?.specialty || '',
        doctorName: doctor?.name || '',
        language: Array.isArray(doctor?.languages) ? doctor.languages.join(", ") : (doctor?.languages || ''),
        date: '',
        time: '',
        concern: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted Data:", { ...formData });
        alert("Appointment booked successfully!");
        setFormData(initialFormData);
    };

    return (
        <section className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 p-6 shadow-xl md:p-10">
            <div className="mb-10">
                <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Appointment Form
                </span>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
                    Book Your Appointment
                </h2>
                <p className="mt-2 text-slate-500">
                    Fill out the form below and our medical team will contact you shortly to confirm your appointment.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <User className="text-slate-400" size={18} />
                            <input
                                name="fullName"
                                type="text"
                                onChange={handleChange}
                                value={formData.fullName}
                                placeholder="John Smith"
                                className="w-full bg-transparent px-3 py-4 outline-none dark:text-white"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <Mail className="text-slate-400" size={18} />
                            <input
                                name="email"
                                type="email"
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="john@email.com"
                                className="w-full bg-transparent px-3 py-4 outline-none dark:text-white"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <Phone className="text-slate-400" size={18} />
                            <input
                                name="phone"
                                type="tel"
                                onChange={handleChange}
                                value={formData.phone}
                                placeholder="+880 1234 567890"
                                className="w-full bg-transparent px-3 py-4 outline-none dark:text-white"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Department</label>
                        <div className="flex items-center rounded-xl border border-slate-300 px-4 bg-slate-50 dark:bg-slate-800">
                            <Stethoscope className="text-slate-400" size={18} />
                            <input
                                name="department"
                                value={formData.department}
                                readOnly
                                type="text"
                                className="w-full bg-transparent px-3 py-4 outline-none text-slate-500 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Doctor Name</label>
                        <div className="flex items-center rounded-xl border border-slate-300 px-4 bg-slate-50 dark:bg-slate-800">
                            <Stethoscope className="text-slate-400" size={18} />
                            <input
                                name="doctorName"
                                value={formData.doctorName}
                                readOnly
                                type="text"
                                className="w-full bg-transparent px-3 py-4 outline-none text-slate-500 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Language</label>
                        <div className="flex items-center rounded-xl border border-slate-300 px-4 bg-slate-50 dark:bg-slate-800">
                            <Stethoscope className="text-slate-400" size={18} />
                            <input
                                name="language"
                                value={formData.language}
                                readOnly
                                type="text"
                                className="w-full bg-transparent px-3 py-4 outline-none text-slate-500 cursor-not-allowed"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Appointment Date</label>
                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <CalendarDays className="text-slate-400" size={18} />
                            <input
                                name="date"
                                onChange={handleChange}
                                value={formData.date}
                                type="date"
                                className="w-full bg-transparent px-3 py-4 outline-none dark:text-white"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Preferred Time</label>
                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <Clock3 className="text-slate-400" size={18} />
                            <input
                                name="time"
                                onChange={handleChange}
                                value={formData.time}
                                type="time"
                                className="w-full bg-transparent px-3 py-4 outline-none dark:text-white"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">Medical Concern</label>
                    <div className="flex rounded-xl border border-slate-300 px-4 py-3 focus-within:border-cyan-500">
                        <FileText className="mt-1 text-slate-400" size={18} />
                        <textarea
                            name="concern"
                            onChange={handleChange}
                            value={formData.concern}
                            rows={5}
                            placeholder="Briefly describe your symptoms or reason for the appointment..."
                            className="w-full resize-none bg-transparent px-3 outline-none dark:text-white"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700 active:scale-[0.98]"
                >
                    Book Appointment
                    <Send size={18} />
                </button>
            </form>
        </section>
    );
}