    import axios from "axios";


    const API_URL = "http://127.0.0.1:8000/api/";

    async function login(username, password) {
        try {
            const response = await axios.post(`${API_URL}token/`, {
                username: username,
                password: password
            });
            const { access, refresh } = response.data;
            sessionStorage.setItem("access", access);
            sessionStorage.setItem("refresh", refresh);
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    async function fetchWorkload(workloadId) {
        try {
            const response = await axios.get(`${API_URL}workloads/${workloadId}/`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("access")}`
                }
            });
            // Filtrar los datos del workload para excluir el campo 'id'
            const { id, teacher_id, course_id, ...workloadData } = response.data;
            const teacherData = await fetchTeacher(teacher_id);
            const courseData = await fetchCourse(course_id);
            return {
                ...workloadData,
                teacher: teacherData,
                course: courseData
            };
        } catch (error) {
            console.error("Error fetching workload:", error);
            throw error;
        }
    }
   
    async function fetchTeacher(teacherId) {
        try {
            const response = await axios.get(`${API_URL}teachers/${teacherId}/`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("access")}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching teacher:", error);
            throw error;
        }
    }

    async function fetchCourse(courseId, accessToken) {
        try {
            const response = await axios.get(`${API_URL}courses/${courseId}/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching course:", error);
            throw error;
        }
    }

    async function getCourses(token) {
        const api = axios.create({
            baseURL: "http://127.0.0.1:8000/api/",
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        });
        return api.get("/courses/");
    }

    export { login, fetchWorkload, fetchTeacher, fetchCourse, getCourses };