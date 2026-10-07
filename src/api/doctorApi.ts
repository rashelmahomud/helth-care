import axios from "axios";
import api from "../lib/axios";
import { DoctorsType } from "../types/doctors";


const getErrorMessage = (error: unknown, fallback: string) => {
    if (axios.isAxiosError<{ message?: string }>(error)) {
        return error.response?.data?.message ?? error.message ?? fallback;
    }
    if (error instanceof Error) return error.message;
    return fallback;
};


export const getDoctors = async (): Promise<DoctorsType[]> => {
    try {
        const res = await api.get<DoctorsType[]>("/doctors");
        return res.data;
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error, "Data Fatching faild"))
    }

};


export const getDoctor = async (id: string): Promise<DoctorsType> => {
    try {
        const res = await api.get<DoctorsType>(`/doctors/${id}`);
        return res.data
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error, "Data Fatching faild"))
    }
}




export const deleteDoctor = async (id: string) => {
    try {
        const res = await api.delete(`/doctors/${id}`);
        return res.data;
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error, "Data delete faild"))
    }
};



export const updatDoctor = async (id: string, data: Partial<DoctorsType>): Promise<DoctorsType> => {
    try {
        const res = await api.patch(`/doctors/${id}`, data)
        return res.data
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error, "Doctor Data updateing faild"))
    }
}




