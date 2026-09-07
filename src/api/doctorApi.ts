import api from "../lib/axios";

export const getDoctors = async () => {
    const res = await api.get("/doctors");
    return res.data;
};