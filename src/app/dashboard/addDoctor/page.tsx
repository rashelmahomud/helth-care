"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddDoctorForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        experience: "",
        rating: 5,
        reviews: 0,
        image: "",
        hospital: "",
        degree: "",
        patients: "",
        email: "",
        phone: "",
        location: "",
        consultationFee: "",
        languages: [""],
        availability: "",
        about: "",
        education: [""],
        specializations: [""],
        achievements: [""],
        schedule: [{ day: "Monday", time: "09:00 AM - 05:00 PM" }],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (
        index: number,
        value: string,
        field: "languages" | "education" | "specializations" | "achievements"
    ) => {
        const updated = [...formData[field]];
        updated[index] = value;
        setFormData((prev) => ({ ...prev, [field]: updated }));
    };

    const addArrayField = (field: "languages" | "education" | "specializations" | "achievements") => {
        setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
    };

    const removeArrayField = (
        index: number,
        field: "languages" | "education" | "specializations" | "achievements"
    ) => {
        const updated = formData[field].filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, [field]: updated }));
    };

    const handleScheduleChange = (index: number, key: "day" | "time", value: string) => {
        const updatedSchedule = [...formData.schedule];
        updatedSchedule[index][key] = value;
        setFormData((prev) => ({ ...prev, schedule: updatedSchedule }));
    };

    const addScheduleSlot = () => {
        setFormData((prev) => ({
            ...prev,
            schedule: [...prev.schedule, { day: "Monday", time: "09:00 AM - 05:00 PM" }],
        }));
    };

    const removeScheduleSlot = (index: number) => {
        const updated = formData.schedule.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, schedule: updated }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/doctors", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to add doctor.");
            }

            toast.success("Doctor added successfully!");

            setTimeout(() => {
                router.push("/doctors");
                router.refresh();
            }, 1500);

        } catch (err: any) {
            toast.error(err.message || "Something went wrong.");
        }
    };



    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white dark:bg-zinc-900 shadow-xl rounded-2xl my-8 border border-zinc-200 dark:border-zinc-800">
            <div className="mb-6 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-zinc-100">
                    Add Doctor Profile
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Complete the form below to save doctor details to MongoDB.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Dr. John Doe" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Specialty</label>
                        <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Cardiologist" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Degree</label>
                        <input type="text" name="degree" value={formData.degree} onChange={handleChange} placeholder="MBBS, FCPS" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Hospital / Institution</label>
                        <input type="text" name="hospital" value={formData.hospital} onChange={handleChange} placeholder="City Hospital" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Experience</label>
                        <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="10+ Years" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Image URL</label>
                        <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                </div>

                {/* Contact & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t dark:border-zinc-800">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="doctor@example.com" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+123456789" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="New York, USA" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Consultation Fee</label>
                        <input type="text" name="consultationFee" value={formData.consultationFee} onChange={handleChange} placeholder="$150" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Patients Count</label>
                        <input type="text" name="patients" value={formData.patients} onChange={handleChange} placeholder="1,500+" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">General Availability Text</label>
                        <input type="text" name="availability" value={formData.availability} onChange={handleChange} placeholder="Mon - Fri" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                    </div>
                </div>

                {/* Dynamic Arrays */}
                <div className="space-y-4 pt-4 border-t dark:border-zinc-800">
                    {/* Languages */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Languages Spoken</label>
                        {formData.languages.map((lang, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input type="text" value={lang} onChange={(e) => handleArrayChange(index, e.target.value, "languages")} placeholder="English" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                                {formData.languages.length > 1 && (
                                    <button type="button" onClick={() => removeArrayField(index, "languages")} className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm">X</button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => addArrayField("languages")} className="text-sm text-blue-600 dark:text-blue-400 font-medium">+ Add Language</button>
                    </div>

                    {/* Education */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Education</label>
                        {formData.education.map((edu, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input type="text" value={edu} onChange={(e) => handleArrayChange(index, e.target.value, "education")} placeholder="MBBS from Harvard" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                                {formData.education.length > 1 && (
                                    <button type="button" onClick={() => removeArrayField(index, "education")} className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm">X</button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => addArrayField("education")} className="text-sm text-blue-600 dark:text-blue-400 font-medium">+ Add Education</button>
                    </div>

                    {/* Specializations */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Specializations</label>
                        {formData.specializations.map((spec, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input type="text" value={spec} onChange={(e) => handleArrayChange(index, e.target.value, "specializations")} placeholder="Heart Failure" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                                {formData.specializations.length > 1 && (
                                    <button type="button" onClick={() => removeArrayField(index, "specializations")} className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm">X</button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => addArrayField("specializations")} className="text-sm text-blue-600 dark:text-blue-400 font-medium">+ Add Specialization</button>
                    </div>

                    {/* Achievements */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Achievements</label>
                        {formData.achievements.map((ach, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input type="text" value={ach} onChange={(e) => handleArrayChange(index, e.target.value, "achievements")} placeholder="Best Doctor Award" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                                {formData.achievements.length > 1 && (
                                    <button type="button" onClick={() => removeArrayField(index, "achievements")} className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm">X</button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => addArrayField("achievements")} className="text-sm text-blue-600 dark:text-blue-400 font-medium">+ Add Achievement</button>
                    </div>
                </div>

                {/* Schedule */}
                <div className="pt-4 border-t dark:border-zinc-800">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Schedule Slots</label>
                    {formData.schedule.map((slot, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-2 mb-2">
                            <input type="text" value={slot.day} onChange={(e) => handleScheduleChange(index, "day", e.target.value)} placeholder="Monday" required className="w-full sm:w-1/3 px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                            <div className="flex gap-2 w-full sm:w-2/3">
                                <input type="text" value={slot.time} onChange={(e) => handleScheduleChange(index, "time", e.target.value)} placeholder="09:00 AM - 05:00 PM" required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                                {formData.schedule.length > 1 && (
                                    <button type="button" onClick={() => removeScheduleSlot(index)} className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm">X</button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={addScheduleSlot} className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">+ Add Schedule Slot</button>
                </div>

                {/* About / Bio */}
                <div className="pt-4 border-t dark:border-zinc-800">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">About / Biography</label>
                    <textarea name="about" rows={4} value={formData.about} onChange={handleChange} placeholder="Write professional summary..." required className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" />
                </div>

                {/* Submit */}
                <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50">
                    {/* {loading ? "Saving to Database..." : "Save Doctor Profile"} */}
                    submit
                </button>
            </form>
        </div>
    );
}