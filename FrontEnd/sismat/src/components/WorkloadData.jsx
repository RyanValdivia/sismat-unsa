import React, { useEffect, useState } from "react";
import { getWorkload, refreshToken, getTeacherDetails, getCourseDetails } from "../api/works";

const WorkloadComponent = () => {
    const [workloadData, setWorkloads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accessToken = sessionStorage.getItem("access");
        
        const fetchWorkloads = async () => {
            try {
                const workloads = await getWorkload(accessToken);
                const enrichedWorkloads = await Promise.all(workloads.map(async (workload) => {
                    const teacher = await getTeacherDetails(accessToken, workload.teacher_id);
                    const course = await getCourseDetails(accessToken, workload.course_id);
                    return { ...workload, teacher, course };
                }));
                setWorkloads(enrichedWorkloads);
                sessionStorage.setItem("workloads", JSON.stringify(enrichedWorkloads));
            } catch (error) {
                const code = error.response?.data?.code;
                if (code === "token_not_valid") {
                    try {
                        const refresh = sessionStorage.getItem("refresh");
                        const res = await refreshToken(refresh);
                        sessionStorage.setItem("access", res.data.access);
                        const workloads = await getWorkload(res.data.access);
                        const enrichedWorkloads = await Promise.all(workloads.map(async (workload) => {
                            const teacher = await getTeacherDetails(res.data.access, workload.teacher_id);
                            const course = await getCourseDetails(res.data.access, workload.course_id);
                            return { ...workload, teacher, course };
                        }));
                        setWorkloads(enrichedWorkloads);
                        sessionStorage.setItem("workloads", JSON.stringify(enrichedWorkloads));
                    } catch (refreshError) {
                        console.error(refreshError);
                    }
                }
            } finally {
                setLoading(false);
            }
        };

        fetchWorkloads();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Cargando datos de la carga de trabajo...</p>
            ) : (
                workloadData.length > 0 ? (
                    workloadData.map((workload, index) => (
                        <div key={index}>
                            <p>ID: {workload.id}</p>
                            <p>Grupo: {workload.group}</p>
                            <p>Capacidad: {workload.capacity}</p>
                            <p>Año: {workload.year}</p>
                            <p>Semestre: {workload.semester}</p>
                            <p>Profesor: {workload.teacher.names} {workload.teacher.lastnames}</p>
                            <p>Curso: {workload.course.name}</p>
                            <p>Creditos: {workload.course.credits}</p>
                            <p>Código del curso: {workload.course.code}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron datos de carga de trabajo.</p>
                )
            )}
        </div>
    );
};

export default WorkloadComponent;