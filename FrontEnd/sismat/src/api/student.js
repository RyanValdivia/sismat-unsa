import axios from "axios";


export async function getStudent(id, token) {
    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
    });
    return api.get("/students/" + id);    
}

