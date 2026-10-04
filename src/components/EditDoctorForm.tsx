// components/EditDoctorForm.tsx
"use client";
import { useState } from "react";
import { DoctorsType } from "../types/doctors";
import { updatDoctor } from "../api/doctorApi";

interface Props {
    doctor: DoctorsType;
    onUpdated?: (doctor: DoctorsType) => void;
}

// Helper: array <-> comma-separated string
const toList = (v: string) => v.split(",").map((s) => s.trim()).filter(Boolean);

export default function EditDoctorForm({ doctor, onUpdated }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const [form, setForm] = useState({
        name: doctor.name,
        specialty: doctor.specialty,
        experience: doctor.experience,
        hospital: doctor.hospital,
        degree: doctor.degree,
        patients: doctor.patients,
        email: doctor.email,
        phone: doctor.phone,
        location: doctor.location,
        consultationFee: doctor.consultationFee,
        availability: doctor.availability,
        about: doctor.about,
        image: doctor.image,
        languages: doctor.languages.join(", "),
        education: doctor.education.join(", "),
        specializations: doctor.specializations.join(", "),
        achievements: doctor.achievements.join(", "),
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const openForm = () => {
        setError("");
        setSuccess("");
        setIsOpen(true);
    };

    const closeForm = () => setIsOpen(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const updated = await updatDoctor(doctor._id, {
                ...form,
                languages: toList(form.languages),
                education: toList(form.education),
                specializations: toList(form.specializations),
                achievements: toList(form.achievements),
            });
            setSuccess("Doctor updated successfully!");
            onUpdated?.(updated);
            setTimeout(closeForm, 800); // auto-close after success (remove if you don't want it)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const textFields: (keyof typeof form)[] = [
        "name", "specialty", "experience", "hospital", "degree", "patients",
        "email", "phone", "location", "consultationFee", "availability", "image",
        "languages", "education", "specializations", "achievements",
    ];

    return (
        <>
            {/* Edit button */}
            <button
                onClick={openForm}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Edit
            </button>

            {/* Modal (only rendered when open) */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={closeForm} // click outside to close
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} // don't close when clicking inside
                    >
                        {/* Close (X) button */}
                        <button
                            onClick={closeForm}
                            aria-label="Close"
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl leading-none"
                        >
                            &times;
                        </button>

                        <div className="space-y-4 p-6">
                            <h2 className="text-xl font-semibold">Edit Doctor</h2>

                            {textFields.map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium capitalize mb-1">
                                        {field.replace(/([A-Z])/g, " $1")}
                                        {["languages", "education", "specializations", "achievements"].includes(field) &&
                                            " (comma separated)"}
                                    </label>
                                    <input
                                        name={field}
                                        value={form[field]}
                                        onChange={handleChange}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium mb-1">About</label>
                                <textarea
                                    name="about"
                                    value={form.about}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>

                            {error && <p className="text-red-600 text-sm">{error}</p>}
                            {success && <p className="text-green-600 text-sm">{success}</p>}

                            <div className="flex gap-3">
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="bg-blue-600 text-white px-5 py-2 rounded disabled:opacity-50"
                                >
                                    {loading ? "Saving..." : "Update Doctor"}
                                </button>
                                <button
                                    onClick={closeForm}
                                    disabled={loading}
                                    className="border px-5 py-2 rounded disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}