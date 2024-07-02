import React from "react";
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";

const TableSelectCourse = () => {
  const courses = [
    { id: 1, code: "CS101", name: "Introducción a la Programación", status: "Disponible", credits: 3 },
    { id: 2, code: "WD201", name: "Diseño Web Avanzado", status: "Disponible", credits: 4 },
    { id: 3, code: "DB301", name: "Bases de Datos Relacionales", status: "Disponible", credits: 5 },
    { id: 4, code: "MA401", name: "Desarrollo de Aplicaciones Móviles", status: "Disponible", credits: 4 },
    { id: 5, code: "AI501", name: "Inteligencia Artificial y Machine Learning", status: "Disponible", credits: 5 },
  ];

  return (
    <main className="flex-1 flex flex-col gap-6 mx-6 mt-6">
        
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
          <p>Creditos actuales:</p>
          <p>Creditos maximos:</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-[#8B0000]">Selección de Cursos</h1>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={num}
              className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md"
              style={{ minWidth: '40px' }}
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
                  <th className="px-1 py-2 rounded-tl-lg ">Nro</th>
                  <th className="px-4 py-2">Código</th>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Estatus</th>
                  <th className="px-4 py-2">Créditos</th>
                  <th className="px-4 py-2 rounded-tr-lg">Verificar</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b border-[#800020]">
                    <td className={`px-4 py-2 ${course.id === 5 ? 'bg-[#8B0000] text-white ' : 'bg-[#8B0000] text-white '}`}>{course.id}</td>
                    <td className="px-4 py-2">{course.code}</td>
                    <td className="px-4 py-2">{course.name}</td>
                    <td className="px-4 py-2">{course.status}</td>
                    <td className="px-4 py-2 text-center">{course.credits}</td>
                    <td className="px-4 py-2 text-center"><Checkbox id={`course${course.id}`} /></td>
                  </tr>
                ))}
              </tbody>
            </table>            
          </div>
          <div className="flex justify-end mt-5">
                <p>Total de creditos: 00</p>
          </div>
          
        </div>
        <div className="flex items-center justify-between">
         <Link to="/">
         <button className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md border-2 ">
                Atras
              </button>
         </Link>
              
          <Link to="/pageGroup">
            <button className="bg-[#8B0000] text-white hover:bg-[#800020] px-4 py-2 rounded-md border-2">
                Continuar
            </button>
          </Link>
          
                
        </div>
        
      </main>
  );
};

export default TableSelectCourse;
