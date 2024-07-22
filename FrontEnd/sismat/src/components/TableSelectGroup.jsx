import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getWorkload } from "../api/works";
import { fetchCourse } from '../api/workload';

const TableGroup = () => {
    const [coursesDetails, setCoursesDetails] = useState([]);
    const [workloads, setWorkloads] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        
        const storedCourses = sessionStorage.getItem('selectedCourses');
        const accessToken = sessionStorage.getItem("access");
        console.log(storedCourses);

        const fetchWorkload = async () => {
            try {
                const responseWorkload = await getWorkload(accessToken);
                console.log('WORKLOADS: ', responseWorkload);
                setWorkloads(responseWorkload); 
                console.log(responseWorkload);
            } catch (error) {
                console.error('Error fetching workloads:', error);
            }
        };

        fetchWorkload();

        const fetchCourseDetails = async () => {
            try {
                const courseIds = JSON.parse(storedCourses);
                const courseDetailsPromises = courseIds.map((courseId) => fetchCourse(courseId, accessToken));
                const courses = await Promise.all(courseDetailsPromises);
                setCoursesDetails(courses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourseDetails();

        
    }, []);

    const handleGroupChange = (courseId, group) => {
        setSelectedGroups((prevSelectedGroups) => ({
            ...prevSelectedGroups,
            [courseId]: group
        }));
    };

    const handleClick = () => {
        const coursesWithGroups = coursesDetails.map(course => ({
            ...course,
            selectedGroup: selectedGroups[course.id] || 'A' 
        }));
        sessionStorage.setItem('selectedGroups', JSON.stringify(coursesWithGroups));
        navigate("/confirmation", { state: { group: coursesWithGroups } });
    };

    return (
        <main className="flex-1 flex flex-col gap-6 mx-6 mt-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-[#8B0000]">
                        Selección de Grupos
                    </h1>
                </div>
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
                                <tr key={courseDetail.id} 
                                  className="border-b border-[#800020]"
                                >
                                    <td className="px-4 py-2 text-center">{index+1}</td>
                                    <td className="px-4 py-2 text-center">{courseDetail.code}</td>
                                    <td className="px-4 py-2 ">{courseDetail.name}</td>
                                    <td className="px-4 py-2 text-center">{courseDetail.credits}</td>
                                    <td className="px-4 py-2 text-center">
                                        <select 
                                            name="grupos" 
                                            id={`grupos-${courseDetail.id}`}
                                            value={selectedGroups[courseDetail.id] || 'A'}
                                            onChange={(e) => handleGroupChange(courseDetail.id, e.target.value)}
                                        >
                                            {workloads
                                                .filter(wl => wl.course_id === courseDetail.id)
                                                .map(wl => (
                                                    <option key={wl.id} value={wl.group}>{wl.group}</option>
                                                ))
                                            }
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
                <button 
                    onClick={handleClick}
                    className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md border-2"
                >
                    Continuar
                </button>
            </div>
        </main>
    );
};

export default TableGroup;
