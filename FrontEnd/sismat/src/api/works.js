import axios from "axios";

export async function getWorkload(token) {
    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    const response = await api.get("/workloads/");
    return response.data;
}

export async function getTeacherDetails(token, teacherId) {
    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    const response = await api.get("/teachers/"+ teacherId);
    return response.data;
}

export async function getCourseDetails(token, courseId) {
    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    const response = await api.get("/courses/"+ courseId);
    return response.data;
}

export async function getWorkloadCapacity(token, workloadId) {
    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    const response = await api.get(`/workloads/${workloadId}`);
    return response.data.capacity;
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