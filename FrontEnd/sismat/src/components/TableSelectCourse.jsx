import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getStudent, refreshToken } from "../api/student";
import axios from "axios"; // Asegúrate de instalar axios: npm install axios

const TableSelectCourse = () => {
    const [student, setStudent] = useState({});
    const [courses, setCourses] = useState([
        {
            id: 1,
            code: "CS101",
            name: "Introducción a la Programación",
            status: "Disponible",
            credits: 3,
        },
        {
            id: 2,
            code: "WD201",
            name: "Diseño Web Avanzado",
            status: "Disponible",
            credits: 4,
        },
        {
            id: 3,
            code: "DB301",
            name: "Bases de Datos Relacionales",
            status: "Disponible",
            credits: 5,
        },
        {
            id: 4,
            code: "MA401",
            name: "Desarrollo de Aplicaciones Móviles",
            status: "Disponible",
            credits: 4,
        },
        {
            id: 5,
            code: "AI501",
            name: "Inteligencia Artificial y Machine Learning",
            status: "Disponible",
            credits: 5,
        },
    ]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = sessionStorage.getItem("access");
        const studentId = sessionStorage.getItem("student_id");
        console.log(accessToken);

        const fetchStudentData = async () => {
            try {
                const response = await getStudent(studentId, accessToken);
                setStudent(response.data);
                console.log(response);
            } catch (error) {
                let { code } = error.response.data;
                console.log(error);
                if (code === "token_not_valid") {
                    console.log("Token no válido, intentando refrescarlo");
                    try {
                        const refresh = sessionStorage.getItem("refresh");
                        const res = await refreshToken(refresh);
                        sessionStorage.setItem("access", res.data.access);
                    } catch (error) {
                        // TODO: Redirect to log in page
                    }
                }
            }
        };

        fetchStudentData();
    }, []);

    const handleClick = () => {
        navigate("/pageGroup", { state: { courses: selectedCourses } });
    };

    const handleCheckboxChange = (courseId, courseCredits) => {
        setSelectedCourses((prevSelected) => {
            const creditosMax = student.credits;
            if (creditosMax - getTotalCredits() < courseCredits) {
                alert(
                    "No puede seleccionar más créditos. Ha superado el límite de créditos."
                );
                return prevSelected;
            }
            if (prevSelected.includes(courseId)) {
                return prevSelected.filter((id) => id !== courseId);
            } else {
                return [...prevSelected, courseId];
            }
        });
    };

    const getTotalCredits = () => {
        return selectedCourses.reduce((total, courseId) => {
            const course = courses.find((course) => course.id === courseId);
            return total + (course ? course.credits : 0);
        }, 0);
    };
    return (
        <main className="flex-1 flex flex-col gap-6 mx-6 mt-6">
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <p>Créditos actuales: {student.credits}</p>
                <p>Créditos seleccionados: {getTotalCredits()}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-[#8B0000]">
                        Selección de Cursos
                    </h1>
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button
                            key={num}
                            className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md"
                            style={{ minWidth: "40px" }}
                        >
                            {num}
                        </button>
                    ))}
                </div>
                {/* tabla de Selección de cursos */}
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-[#8B0000] text-white">
                                <th className="px-1 py-2 rounded-tl-lg ">
                                    Nro
                                </th>
                                <th className="px-4 py-2">Código</th>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Estatus</th>
                                <th className="px-4 py-2">Créditos</th>
                                <th className="px-4 py-2 rounded-tr-lg">
                                    Verificar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr
                                    key={course.id}
                                    className="border-b border-[#800020]"
                                >
                                    <td
                                        className={`px-4 py-2 ${
                                            course.id === 5
                                                ? "bg-[#8B0000] text-white "
                                                : "bg-[#8B0000] text-white "
                                        }`}
                                    >
                                        {course.id}
                                    </td>
                                    <td className="px-4 py-2">{course.code}</td>
                                    <td className="px-4 py-2">{course.name}</td>
                                    <td className="px-4 py-2">
                                        {course.status}
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        {course.credits}
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <Checkbox
                                            id={`course${course.id}`}
                                            checked={selectedCourses.includes(
                                                course.id
                                            )}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    course.id,
                                                    course.credits
                                                )
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-5">
                    <p>Total de créditos seleccionados: {getTotalCredits()}</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <Link to="/pageLogin">
                    <button className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md border-2 ">
                        Atras
                    </button>
                </Link>
                <Link to="/pageGroup">
                    <button
                        onClick={handleClick}
                        className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md border-2"
                    >
                        Continuar
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default TableSelectCourse;
