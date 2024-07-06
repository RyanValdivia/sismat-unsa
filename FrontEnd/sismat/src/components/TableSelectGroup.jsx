import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TableGroup = () => {
  const courses = [
    { id: 1, code: "CS101", name: "Introducción a la Programación", status: "Disponible", credits: 3 },
    { id: 2, code: "WD201", name: "Diseño Web Avanzado", status: "Disponible", credits: 4 },
    { id: 3, code: "DB301", name: "Bases de Datos Relacionales", status: "Disponible", credits: 5 },
    { id: 4, code: "MA401", name: "Desarrollo de Aplicaciones Móviles", status: "Disponible", credits: 4 },
    { id: 5, code: "AI501", name: "Inteligencia Artificial y Machine Learning", status: "Disponible", credits: 5 },
  ]
  const maxCredits = courses.reduce((sum, course) => sum += course.credits, 0);
  const location = useLocation();

  console.log(location.pathname);
    return(
    <main className="flex-1 flex flex-col gap-6 mx-6 mt-6">
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-[#8B0000]">Selección de Grupos</h1>
          </div>

          {/* tabla de Selección de cursos */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-[#8B0000] text-white">
                  <th className="px-4 py-2 rounded-tl-lg">Nro</th>
                  <th className="px-4 py-2">Código</th>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Créditos</th>
                  <th className="px-4 py-2 rounded-tr-lg">Grupos</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b border-[#800020]">
                    <td className={`px-4 py-2 ${course.id === 5 ? 'bg-[#8B0000] text-white ' : 'bg-[#8B0000] text-white '}`}>{course.id}</td>
                    <td className="px-4 py-2">{course.code}</td>
                    <td className="px-4 py-2">{course.name}</td>
                    <td className="px-4 py-2 text-center">{course.credits}</td>
                    <td className="px-4 py-2 text-center"><select name="grupos" id="grupos" >
                      <option value="grupoA">A</option>
                      <option value="grupoB">B</option>
                      <option value="grupoC">C</option>
                      </select></td>
                  </tr>
                ))}
              </tbody>
            </table>            
          </div>
          <div className="flex justify-end mt-5">
                <p>Total de creditos: {maxCredits.toFixed(0)}</p>
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
}

export default TableGroup;