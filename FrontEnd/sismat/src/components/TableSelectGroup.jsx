import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCourse } from '../api/workload';

const TableGroup = () => {
    const [coursesDetails, setCoursesDetails] = useState([]);

    useEffect(() => {
        // Recuperar los cursos seleccionados del sessionStorage
        const storedCourses = sessionStorage.getItem('selectedCourses');
        const accessToken = sessionStorage.getItem("access");
        console.log(storedCourses);

        const fetchCourseDetails = async () => {
            try {
                const courseIds = JSON.parse(storedCourses);
                const courseDetailsPromises = courseIds.map((courseId) => fetchCourse(courseId, accessToken ));
                const courses = await Promise.all(courseDetailsPromises);
                setCoursesDetails(courses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourseDetails();
    }, []);

    return (
        <main className="flex-1 flex flex-col gap-6 mx-6 mt-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-[#8B0000]">
                        Selección de Grupos
                    </h1>
                </div>

                {/* tabla de Selección de cursos */}
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-[#8B0000] text-white">
                                <th className="px-4 py-2 rounded-tl-lg">ID</th>
                                <th className="px-4 py-2">Código</th>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Créditos</th>
                                <th className="px-4 py-2 rounded-tr-lg">Grupos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coursesDetails.map((courseDetail, index) => (
                                <tr key={courseDetail.id}>
                                    <td>{index+1}</td>
                                    <td>{courseDetail.code}</td>
                                    <td>{courseDetail.name}</td>
                                    <td>{courseDetail.credits}</td>
                                    <td>
                                        <select name="grupos" id="grupos">
                                            <option value="grupoA">A</option>
                                            <option value="grupoB">B</option>
                                            <option value="grupoC">C</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-5">
                    <p>Total de créditos: {coursesDetails.reduce((acc, curr) => acc + curr.credits, 0).toFixed(0)}</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <Link to="/pageCourse">
                    <button className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md border-2 ">
                        Atras
                    </button>
                </Link>
                <Link to="/confirmation">
                    <button className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md border-2">
                        Continuar
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default TableGroup;
