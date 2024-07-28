import React, { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useNavigate } from "react-router-dom";

import WorkloadTable from './WorkloadTable';
import ScheduleModal from "./ScheduleModal";
import RedButton from "./RedButton";
import CustomDialog from './CustomDialog';
import { getWorkloadCapacity } from "../api/works";
import { getInscription, refreshToken, postInscription } from "../api/inscription";

const ConfirmationTable = () => {
    const [student, setStudent] = useState({});
    const [workloads, setWorkloads] = useState({});
    const [inscription, setInscription] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogType, setDialogType] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [matriculaConfirmada, setMatriculaConfirmada] = useState(false);
    const navigate = useNavigate();

    const workloadData = JSON.parse(sessionStorage.getItem("selectedWorkloads")) || [];

    console.log("WORKLOAD DATA: " + workloadData);

    useEffect(() => {
        const studentData = JSON.parse(sessionStorage.getItem("student"));
        if (studentData) {
            setStudent(studentData);
        }
        const storedWorkloads = JSON.parse(sessionStorage.getItem("selectedWorkloads"));
        if (storedWorkloads) {
            setWorkloads(storedWorkloads);
        }
    }, []);

    {/*
    useEffect(() => {
        const accessToken = sessionStorage.getItem("access");
        
        console.log(accessToken);

        const fetchInscriptionData = async () => {
            try {
                const response = await getInscription(accessToken);
                setInscription(response.data);
                console.log("INSCRIPCIONES" + response);
                sessionStorage.setItem("inscription", JSON.stringify(response.data));
                console.log("PROBANDO EL VER STATUS EN CONSOLA:  " + response.created_by);
            } catch (error) {
                let { code } = error.response.data;
                console.log(error);
                if (code === "token_not_valid") {
                    console.log("Token no válido, intentando refrescarlo");
                    try {
                        const refresh = sessionStorage.getItem("refresh");
                        const res = await refreshToken(refresh);
                        sessionStorage.setItem("access", res.data.access);
                        const response = await getInscription(res.data.access);
                        setInscription(response.data);
                        sessionStorage.setItem("inscription", JSON.stringify(response.data));
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        };

        fetchInscriptionData();
    }, []);
    */}

    const calculateTotalCredits = (workloads) => {
        return workloads.reduce((total, workload) => total + workload.course.credits, 0);
    };

    const totalCredits = calculateTotalCredits(workloadData);

    const handleConfirmClick = async () => {
        try {
            const accessToken = sessionStorage.getItem("access");
            const allWorkloadsHaveCapacity = await Promise.all(workloadData.map(async (workload) => {
                const capacity = await getWorkloadCapacity(accessToken, workload.id);
                return capacity > 0;
            }));

            if (allWorkloadsHaveCapacity.every(Boolean)) {
                setOpenDialog(true);
                setDialogType('confirmation');
                setMatriculaConfirmada(true);
                console.log('TODOS LOS WORKLOADS TIENEN CAPACIDAD');
            } else {
                setOpenDialog(true);
                setDialogType('error');
                console.log('NO TODOS TIENEN CAPACIDAD');
            }
        } catch (error) {
            console.error("Error checking workload capacities:", error);
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
            alert("Ya te has matriculado. ¡Descarga tu constancia y mira tus horarios!");
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