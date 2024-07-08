import React from "react";

const CourseTable = ({ workloads }) => (
    <div className="overflow-x-auto" id="confirmation-table">
        <table className="w-full table-auto">
            <thead>
                <tr className="bg-[#8B0000] text-white">
                    <th className="px-4 py-2 text-left rounded-tl-lg">Nro.</th>
                    <th className="px-4 py-2 text-left">Código</th>
                    <th className="px-4 py-2 text-left">Asignatura</th>
                    <th className="px-4 py-2 text-center">Grupo</th>
                    <th className="px-4 py-2 text-center">Créditos</th>
                    <th className="px-4 py-2 text-left rounded-tr-lg">
                        Docente
                    </th>
                </tr>
            </thead>
            <tbody>
                {workloads.map((workload, index) => (
                    <tr key={workload.id} className="border-b border-[#800020]">
                        <td className="px-4 py-2 bg-[#8B0000] text-white text-center w-12">
                            {index + 1}
                        </td>
                        <td className="px-4 py-2">{workload.code}</td>
                        <td className="px-4 py-2">{workload.name}</td>
                        <td className="px-4 py-2 text-center">
                            {workload.selectedGroup}
                        </td>
                        <td className="px-4 py-2 text-center">
                            {workload.credits !== undefined
                                ? workload.credits.toFixed(2)
                                : "N/A"}
                        </td>
                        <td className="px-4 py-2">{"Contrato Pendiente"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CourseTable;
