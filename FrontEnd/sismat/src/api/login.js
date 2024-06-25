import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

export function login(user) {
    return api.post("/token/", user);
}
