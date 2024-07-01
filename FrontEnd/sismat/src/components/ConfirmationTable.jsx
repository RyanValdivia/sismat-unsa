import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import ScheduleIcon from '@mui/icons-material/Schedule';

import CourseTable from './CourseTable';
import ScheduleModal from "./ScheduleModal";
import RedButton from "./RedButton";
import ConfirmationDialog from './ConfirmationDialog';
import ErrorDialog from "./ErrorDialog";

const ConfirmationTable = () => {
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const student = {
        cui: '20232188',
        name: 'MAMANI CESPEDES, JHONATAN BENJAMIN',
        ingreso: '232001',
        fecNac: '05-10-30',
        docCivil: '12345678',
        docMilitar: '12345',
        nivel: 'PRE-GRADO',
        escuela: 'INGENIERIA DE SISTEMAS',
        fuente: 'INTERNET',
    };

    const courses = [
        { id: 1, code: "CS101", name: "INTRODUCCIÓN A LA PROGRAMACIÓN", group: "A", enrollment: "1", credits: 3, teacher: "Paz Valderrama Alfredo" },
        { id: 2, code: "WD201", name: "DISEÑO WEB AVANZADO", group: "B", enrollment: "1", credits: 4, teacher: "Prof. Martínez Martínez" },
        { id: 3, code: "DB301", name: "BASES DE DATOS RELACIONALES", group: "C", enrollment: "1", credits: 5, teacher: "Ing. López Obrador" },
        { id: 4, code: "MA401", name: "DESARROLLO DE APLICACIONES MÓVILES", group: "C", enrollment: "1", credits: 4, teacher: "Sánchez Carlos José" },
        { id: 5, code: "AI501", name: "INTELIGENCIA ARTIFICIAL Y MACHINE LEARNING", group: "A", enrollment: "1", credits: 5, teacher: "Contrato Pendiente" },
    ];

    const totalCredits = courses.reduce((sum, course) => sum += course.credits, 0);

    const handleConfirmClick = () => {
        setOpenConfirm(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleErrorClose = () => {
        setOpenError(false);
    };

    const handleEnrollmentError = () => {
        setOpenError(true);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    //useEffect(() => {
    //}, []);

    return (
        <main className="flex flex-col gap-6 mx-6">
            <Box display="flex" justifyContent="center">
                <Alert severity="info" style={{ fontSize: '1.1rem', textAlign: 'center' }}>
                    Revisa los detalles de tu matrícula
                </Alert>
            </Box>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-[#8B0000] p-2 mt-2">Confirmación de Matrícula</h1>                    
                </div>
                {/* tabla de Selección de cursos */}
                <div className="overflow-x-auto p-2">
                    <CourseTable courses={courses} />
                    <div className="flex justify-end gap-4 mt-2">
                        <a onClick={handleOpenModal} className="underline text-red-800 hover:text-red-200 cursor-pointer">
                            <ScheduleIcon className="mr-1" />
                            Ver horarios
                        </a>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-5 ml-5">
                        <RedButton variant="outlined">Volver</RedButton>
                        <div className="flex items-center">
                            <p className="mr-7">Total de créditos: {totalCredits.toFixed(2)}</p>
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
            
            <div className="flex justify-center gap-4 mt-4">
                <RedButton 
                    variant="contained" 
                    onClick={handleEnrollmentError}
                >
                    PROBAR ERROR DE MATRÍCULA XD
                </RedButton>
            </div>

            <ScheduleModal isOpen={isModalOpen} onClose={handleCloseModal} />

            <ConfirmationDialog 
                open={openConfirm}
                onClose={handleCloseConfirm}
                student={student} 
                courses={courses} 
                totalCredits={totalCredits} 
            />
            <ErrorDialog
                open={openError}
                onClose={handleErrorClose}
                student={student} 
                courses={courses} 
                totalCredits={totalCredits}
            />
        </main> 
    );
};

export default ConfirmationTable;