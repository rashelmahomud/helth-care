"use client";

import {
    CalendarDays,
    Clock3,
    Mail,
    Phone,
    User,
    Stethoscope,
    FileText,
    Send,
} from "lucide-react";

export default function AppointmentForm() {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10">
            {/* Header */}
            <div className="mb-10">
                <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Appointment Form
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                    Book Your Appointment
                </h2>

                <p className="mt-2 text-slate-500">
                    Fill out the form below and our medical team will contact you shortly
                    to confirm your appointment.
                </p>
            </div>

            <form className="space-y-6">
                {/* Row 1 */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Full Name
                        </label>

                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <User className="text-slate-400" size={18} />

                            <input
                                type="text"
                                placeholder="John Smith"
                                className="w-full bg-transparent px-3 py-4 outline-none"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Email Address
                        </label>

                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <Mail className="text-slate-400" size={18} />

                            <input
                                type="email"
                                placeholder="john@email.com"
                                className="w-full bg-transparent px-3 py-4 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Phone */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Phone Number
                        </label>

                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <Phone className="text-slate-400" size={18} />

                            <input
                                type="tel"
                                placeholder="+880 1234 567890"
                                className="w-full bg-transparent px-3 py-4 outline-none"
                            />
                        </div>
                    </div>

                    {/* Department */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Department
                        </label>

                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <Stethoscope className="text-slate-400" size={18} />

                            <select className="w-full bg-transparent px-3 py-4 outline-none">
                                <option>Select Department</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Orthopedics</option>
                                <option>Dental</option>
                                <option>Pediatrics</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Date */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Appointment Date
                        </label>

                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <CalendarDays className="text-slate-400" size={18} />

                            <input
                                type="date"
                                className="w-full bg-transparent px-3 py-4 outline-none"
                            />
                        </div>
                    </div>

                    {/* Time */}
                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Preferred Time
                        </label>

                        <div className="flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-cyan-500">
                            <Clock3 className="text-slate-400" size={18} />

                            <input
                                type="time"
                                className="w-full bg-transparent px-3 py-4 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="mb-2 block font-medium text-slate-700">
                        Medical Concern
                    </label>

                    <div className="flex rounded-xl border border-slate-300 px-4 py-3 focus-within:border-cyan-500">
                        <FileText className="mt-1 text-slate-400" size={18} />

                        <textarea
                            rows={5}
                            placeholder="Briefly describe your symptoms or reason for the appointment..."
                            className="w-full resize-none bg-transparent px-3 outline-none"
                        />
                    </div>
                </div>

                {/* Button */}
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