import React, { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import ScheduleIcon from '@mui/icons-material/Schedule';

import WorkloadTable from './WorkloadTable';
import ScheduleModal from "./ScheduleModal";
import RedButton from "./RedButton";
import CustomDialog from './CustomDialog';

import { login, fetchWorkload } from "../api/workload";

const ConfirmationTable = () => {
    const workloadId = "39a41f79-5a2b-4df4-b95f-e948c2cc12d9";
    const [workloadData, setWorkloadData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogType, setDialogType] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const authenticateAndFetchData = async () => {
            try {
                await login("admin", "1234");
                const data = await fetchWorkload(workloadId);
                const transformedData = [{
                    id: 1,
                    code: data.course.code,
                    name: data.course.name,
                    group: data.group,
                    enrollment: "1",
                    credits: data.course.credits,
                    teacher: `${data.teacher.names} ${data.teacher.lastnames}`
                },{
                    id: 2,
                    code: data.course.code,
                    name: data.course.name,
                    group: data.group,
                    enrollment: "1",
                    credits: data.course.credits,
                    teacher: `${data.teacher.names} ${data.teacher.lastnames}`
                },{
                    id: 3,
                    code: data.course.code,
                    name: data.course.name,
                    group: data.group,
                    enrollment: "1",
                    credits: data.course.credits,
                    teacher: `${data.teacher.names} ${data.teacher.lastnames}`
                },{
                    id: 4,
                    code: data.course.code,
                    name: data.course.name,
                    group: data.group,
                    enrollment: "1",
                    credits: data.course.credits,
                    teacher: `${data.teacher.names} ${data.teacher.lastnames}`
                },{
                    id: 5,
                    code: data.course.code,
                    name: data.course.name,
                    group: data.group,
                    enrollment: "1",
                    credits: data.course.credits,
                    teacher: `${data.teacher.names} ${data.teacher.lastnames}`
                }];
                setWorkloadData(transformedData);
            } catch (error) {
                console.error("Error fetching workload data:", error);
            }
        };

        authenticateAndFetchData();
    }, [workloadId]);

    const student = {
        cui: '20232188',
        name: 'MAMANI CESPEDES, JHONATAN BENJAMIN',
        ingreso: '232001',
        fecNac: '05-10-30',
        docCivil: '12345678',
        docMilitar: '12345',
        nivel: 'PRE-GRADO',
        escuela: 'INGENIERIA DE SISTEMAS',
        monto: '16',
        recibo: '123456'
    };

    const totalCredits = workloadData.reduce((sum, workload) => sum + workload.credits, 0); 

    const handleConfirmClick = () => {
        setOpenDialog(true);
        setDialogType('confirmation');
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleEnrollmentError = () => {
        setOpenDialog(true);
        setDialogType('error'); 
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
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