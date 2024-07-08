import React, { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useNavigate } from "react-router-dom";
import { fetchInscription } from "../api/inscription";

import WorkloadTable from './WorkloadTable';
import ScheduleModal from "./ScheduleModal";
import RedButton from "./RedButton";
import CustomDialog from './CustomDialog';

const ConfirmationTable = () => {
    const [student, setStudent] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogType, setDialogType] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [matriculaConfirmada, setMatriculaConfirmada] = useState(false);
    const navigate = useNavigate();
    const capacity = 10;

    console.log(sessionStorage.getItem("selectedGroups"));


    const workloadData = JSON.parse(sessionStorage.getItem("selectedGroups")) || [];

    console.log(workloadData);

    useEffect(() => {
        const studentData = JSON.parse(sessionStorage.getItem("student"));
        if (studentData) {
            setStudent(studentData);
        }
    }, []);

    const totalCredits = workloadData.reduce((sum, workload) => sum + workload.credits, 0); 

    const handleConfirmClick = () => {
        if (capacity > 0) {
            setOpenDialog(true);
            setDialogType('confirmation');
            setMatriculaConfirmada(true);
        } else {
            setOpenDialog(true);
            setDialogType('error');
        }
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

    const handleBackClick = () => {
        if (matriculaConfirmada) {
            alert("Ya te has matriculado. ¡No puedes matricularte de nuevo!");
        } else {
            navigate("/pageGroup");
        }
    };


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
                    <div className="flex items-center justify-between mb-4">
                </div>               
                </div>
                {/* tabla de Selección de cursos */}
                <div className="overflow-x-auto p-2">
                    <WorkloadTable workloads={workloadData} />
                    <div className="flex justify-end gap-4 mt-2">
                        <a onClick={handleOpenModal} className="underline text-red-800 hover:text-red-200 cursor-pointer">
                            <ScheduleIcon className="mr-1" />
                            Ver horarios
                        </a>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-5 ml-5">
                    <RedButton variant="outlined" onClick={handleBackClick}>Atrás</RedButton>
                        
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
            
            <ScheduleModal isOpen={isModalOpen} onClose={handleCloseModal} />

            <CustomDialog 
                open={openDialog}
                onClose={handleCloseDialog}
                type={dialogType}
                student={student} 
                workloads={workloadData} 
                totalCredits={totalCredits}
                payment={{ amount: student.monto, receipt: student.recibo }} 
            />
        </main> 
    );
};

export default ConfirmationTable;