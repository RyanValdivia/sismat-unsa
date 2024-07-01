import React from 'react';

const CourseTable = ({ courses }) => (
    <div className="overflow-x-auto" id="confirmation-table">
        <table className="w-full table-auto">
            <thead>
                <tr className="bg-[#8B0000] text-white">
                    <th className="px-4 py-2 text-left rounded-tl-lg">Nro.</th>
                    <th className="px-4 py-2 text-left">Código</th>
                    <th className="px-4 py-2 text-left">Asignatura</th>
                    <th className="px-4 py-2 text-center">Grupo</th>
                    <th className="px-4 py-2 text-center">Matrícula</th>
                    <th className="px-4 py-2 text-center">Créditos</th>
                    <th className="px-4 py-2 text-left rounded-tr-lg">Docente</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) => (
                    <tr key={course.id} className="border-b border-[#800020]">
                        <td className="px-4 py-2 bg-[#8B0000] text-white text-center w-12">{course.id}</td>
                        <td className="px-4 py-2">{course.code}</td>
                        <td className="px-4 py-2">{course.name}</td>
                        <td className="px-4 py-2 text-center">{course.group}</td>
                        <td className="px-4 py-2 text-center">{course.enrollment}</td>
                        <td className="px-4 py-2 text-center">{course.credits.toFixed(2)}</td>
                        <td className="px-4 py-2">{course.teacher}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CourseTable;