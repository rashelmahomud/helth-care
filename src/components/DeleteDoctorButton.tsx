"use client";

import { deleteDoctor } from "@/src/api/doctorApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteDoctorButton = ({ id }: { id: string }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        const confirmed = confirm("Are you sure you want to delete this doctor?");
        if (!confirmed) return;

        try {
            setLoading(true);
            await deleteDoctor(id);
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Failed to delete doctor");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 disabled:opacity-50"
        >
            {loading ? "Deleting..." : "Delete"}
        </button>
    );
};

export default DeleteDoctorButton;