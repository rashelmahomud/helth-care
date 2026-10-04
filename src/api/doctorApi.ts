import api from "../lib/axios";
import { DoctorsType } from "../types/doctors";

export const getDoctors = async () => {
    const res = await api.get("/doctors");
    return res.data;
};


export const getDoctor = async (id: string) => {
    const res = await api.get(`/doctors/${id}`);
    return res.data
}


export const deleteDoctor = async (id: string) => {
    try {
        const res = await api.delete(`/doctors/${id}`);
        return res.data;
    } catch (error: any) {

        throw new Error("Failed to delete doctor", error);
    }
};

export const updatDoctor = async (id: string, data: Partial<DoctorsType>) => {
    try {
        const res = await api.patch(`/doctors/${id}`, data)
        return res.data
    } catch (error: any) {
        throw new Error("Failed to update", error)
    }
}




