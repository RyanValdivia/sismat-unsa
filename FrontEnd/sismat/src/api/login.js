import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function login(user) {
    return api.post("/token/", user);
}

export async function register(student) {
    return api.post("/students/", student);
}
