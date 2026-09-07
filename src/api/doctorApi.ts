import api from "../lib/axios";

export const getDoctors = async () => {
    const res = await api.get("/doctors");
    return res.data;
};


export const getDoctor = async (id: string) => {
    const res = await api.get(`/doctors/${id}`);
    return res.data
}


