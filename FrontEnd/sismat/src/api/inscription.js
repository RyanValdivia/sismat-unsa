import axios from "axios";

export async function postInscription(token, studentId, workloadId) {
    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });

    try {
        const response = await api.post("/inscriptions/", {
            student_id: studentId,
            workload_id: workloadId,
            status: true
        });
        return response.data; 
    } catch (error) {
        throw error;
    }
}

export async function refreshToken(token) {
    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
    });
    return api.post("/token/refresh/", { refresh: token });
}