import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getStudent, refreshToken } from "../api/student";
import { getCourses } from "../api/workload"; 
import axios from "axios"; // Asegúrate de instalar axios: npm install axios

const TableSelectCourse = () => {
    const [student, setStudent] = useState({});
    const creditosActuales = 12;
    const [courses, setCourses] = useState([]);
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
                sessionStorage.setItem("student", JSON.stringify(response.data));
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
                        const response = await getStudent(studentId, res.data.access);
                        setStudent(response.data);
                        sessionStorage.setItem("student", JSON.stringify(response.data));
                    } catch (error) {
                    }
                }
            }
        };

        fetchStudentData();

        const fetchCourses = async () => {
          try {
              const responseCourses = await getCourses(accessToken);
              console.log('COURSES: ', responseCourses);
              console.log(fetchCourses);
              setCourses(responseCourses.data); 
          } catch (error) {
              console.error('Error fetching courses:', error);
    
          }
      };

      fetchCourses();
    }, []);

    const handleClick = () => {
        sessionStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
        navigate("/pageGroup", { state: { courses: selectedCourses } });
    };

    const handleCheckboxChange = (courseId, courseCredits) => {
        setSelectedCourses((prevSelected) => {
            const creditosMax = creditosActuales;
            if (prevSelected.includes(courseId)) {
                return prevSelected.filter((id) => id !== courseId);
            } else if (creditosMax - getTotalCredits() < courseCredits) {
                alert(
                    "No puede seleccionar más créditos. Ha superado el límite de créditos."
                );
                return prevSelected;
            } else {
                return [...prevSelected, courseId];
            }
        });
    };

    const getTotalCredits = () => {
        return selectedCourses.reduce((total, courseCode) => {
            const course = courses.find((course) => course.code === courseCode);
            return total + (course ? course.credits : 0);
        }, 0);
    };

    return (
        <main className="flex-1 flex flex-col gap-6 mx-6 mt-6">
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <p>Créditos actuales: {creditosActuales}</p>
                <p>Créditos restantes: {creditosActuales - getTotalCredits()}</p>
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
                            {courses.map((course, index) => (
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
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-2">{course.code}</td>
                                    <td className="px-4 py-2">{course.name}</td>
                                    <td className="px-4 py-2">
                                        {course.status = true? "Disponible" : "No disponible" }
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
                                                    course.credits,
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
