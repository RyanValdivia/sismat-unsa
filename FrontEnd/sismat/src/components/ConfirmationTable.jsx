import React, { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import DownloadIcon from '@mui/icons-material/Download';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import ScheduleIcon from '@mui/icons-material/Schedule';

const RedButton = styled(Button)({
    backgroundColor: '#8B0000',
    color: 'white',
    '&:hover': {
        backgroundColor: '#5F0000',
    },
});

const WhiteButton = styled(Button)({
    backgroundColor: 'white',
    color: '#8B0000',
    '&:hover': {
        backgroundColor: '#dcdcdc',
    },
});

const ConfirmationTable = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Será false antes de la confirmación, por ahora queda asi para probar el botón de la descarga pdf
    const [isConfirmed, setIsConfirmed] = useState(true);

    const courses = [
        { id: 1, code: "CS101", name: "Introducción a la Programación", group: "A", enrollment: "1", credits: 3, teacher: "Paz Valderrama Alfredo" },
        { id: 2, code: "WD201", name: "Diseño Web Avanzado", group: "B", enrollment: "1", credits: 4, teacher: "Prof. Martínez Martínez" },
        { id: 3, code: "DB301", name: "Bases de Datos Relacionales", group: "C", enrollment: "1", credits: 5, teacher: "Ing. López Obrador" },
        { id: 4, code: "MA401", name: "Desarrollo de Aplicaciones Móviles", group: "C", enrollment: "1", credits: 4, teacher: "Sánchez Carlos José" },
        { id: 5, code: "AI501", name: "Inteligencia Artificial y Machine Learning", group: "A", enrollment: "1", credits: 5, teacher: "Contrato Pendiente" },
    ];

    const totalCredits = courses.reduce((sum, course) => sum += course.credits, 0);

    const handleConfirmClick = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    //useEffect(() => {
    //}, []);

    return (
        <main className="flex-1 flex flex-col gap-6 mx-6 mt-6">
            <Box display="flex" justifyContent="center">
                <Alert severity="info" style={{ fontSize: '1.1rem', textAlign: 'center' }}>
                    Revisa los detalles de tu matrícula
                </Alert>
            </Box>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-[#8B0000]">Confirmación de Matrícula</h1>
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                    
                </div>
                {/* tabla de Selección de cursos */}
                <div className="overflow-x-auto" id="confirmation-table">
                    <table className="w-full table-auto">              
                        <thead>
                            <tr className="bg-[#8B0000] text-white">
                                <th className="px-4 py-2 text-left rounded-tl-lg">Nro.</th>
                                <th className="px-4 py-2 text-left">Código del curso</th>
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
                                    <td className="px-4 py-2 text-center">{course.credits}</td>
                                    <td className="px-4 py-2">{course.teacher}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-end gap-4 mt-2">
                        <a className="underline text-red-800 hover:text-red-200 cursor-pointer">
                            <ScheduleIcon className="mr-1" />
                            Ver horarios
                        </a>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-5 ml-5">
                        <RedButton variant="outlined">Volver</RedButton>
                        <div className="flex items-center">
                            <p className="mr-7">Total de créditos: {totalCredits}</p>
                            <RedButton 
                                variant="contained" 
                                onClick={handleConfirmClick}
                            >
                                Confirmar matrícula
                            </RedButton>
                        </div>
                    </div>
                </div>
            </div>

            {isConfirmed && (
                <div className="flex justify-end mt-3">
                    <WhiteButton 
                        variant="contained" 
                        endIcon={<DownloadIcon />} 
                    >
                        Descargar constancia
                    </WhiteButton>
                </div>
            )}

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    ¡Se ha matriculado correctamente!
                </Alert>
            </Snackbar>
        </main>
    );
};

export default ConfirmationTable;