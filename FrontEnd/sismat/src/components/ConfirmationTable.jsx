import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import ScheduleIcon from '@mui/icons-material/Schedule';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


import CourseTable from './CourseTable';
import ScheduleModal from "./ScheduleModal";
import RedButton from "./RedButton";
import ConfirmationDialog from './ConfirmationDialog';

const ConfirmationTable = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const courses = [
        { id: 1, code: "CS101", name: "Introducción a la Programación", group: "A", enrollment: "1", credits: 3, teacher: "Paz Valderrama Alfredo" },
        { id: 2, code: "WD201", name: "Diseño Web Avanzado", group: "B", enrollment: "1", credits: 4, teacher: "Prof. Martínez Martínez" },
        { id: 3, code: "DB301", name: "Bases de Datos Relacionales", group: "C", enrollment: "1", credits: 5, teacher: "Ing. López Obrador" },
        { id: 4, code: "MA401", name: "Desarrollo de Aplicaciones Móviles", group: "C", enrollment: "1", credits: 4, teacher: "Sánchez Carlos José" },
        { id: 5, code: "AI501", name: "Inteligencia Artificial y Machine Learning", group: "A", enrollment: "1", credits: 5, teacher: "Contrato Pendiente" },
    ];

    const totalCredits = courses.reduce((sum, course) => sum += course.credits, 0);

    const handleConfirmClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
    
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor('#BLACK');
        doc.text('CONSTANCIA DE MATRÍCULA', 105, 20, { align: 'center' });
    
        doc.autoTable({
            startY: 30,
            head: [['Nro', 'Código', 'Nombre', 'Grupo', 'Mat.', 'Créd.']],
            body: courses.map(course => [course.id, course.code, course.name, course.group, course.enrollment, course.credits]),
        });
    
        doc.text(`Total de créditos: ${totalCredits}`, 14, doc.autoTable.previous.finalY + 10);
    
        doc.save('constancia_matricula.pdf');
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
                <div className="overflow-x-auto">
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
            
            <ScheduleModal isOpen={isModalOpen} onClose={handleCloseModal} />

            <ConfirmationDialog 
                open={openDialog} 
                onClose={handleCloseDialog} 
                onDownload={handleDownloadPDF} 
            />
        </main>
    );
};

export default ConfirmationTable;