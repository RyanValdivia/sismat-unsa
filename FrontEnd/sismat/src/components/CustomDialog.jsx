import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CircularProgress from '@mui/material/CircularProgress';
import RedButton from './RedButton';
import { PDFDownloadLink } from '@react-pdf/renderer';

import PDFDocument from "./PDFDocument";
import DownloadIcon from '@mui/icons-material/Download';

const CustomDialog = ({ open, onClose, type, student, workloads, totalCredits, payment }) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
    >
        <DialogContent className="flex flex-col items-center">
            {type === 'confirmation' && (
                <>
                    <CheckCircleIcon className="text-green-500" style={{ fontSize: '4rem' }} />
                    <DialogTitle id="alert-dialog-title" className="text-center">
                        ¡Tu matrícula ha sido confirmada!
                    </DialogTitle>
                    <DialogContentText id="alert-dialog-description" className="text-center mt-2">
                        Puedes descargar tu constancia de matrícula a continuación.
                    </DialogContentText>
                    <DialogActions className="flex flex-col justify-center pb-4 mt-6 space-y-4">
                        <PDFDownloadLink
                            document={<PDFDocument student={student} workloads={workloads} totalCredits={totalCredits} payment={payment} />}
                            fileName={`constancia_${student.cui}.pdf`}
                        >
                            {({ loading }) => (
                                <RedButton endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DownloadIcon />}>
                                    {loading ? '' : 'Descargar Constancia'}
                                </RedButton>
                            )}
                        </PDFDownloadLink>
                    </DialogActions>
                </>
            )}
            {type === 'error' && (
                <>
                    <ErrorIcon className="text-red-500" style={{ fontSize: '4rem' }} />
                    <DialogTitle id="alert-dialog-title" className="text-center">
                        ¡Error de matrícula!
                    </DialogTitle>
                    <DialogContentText id="alert-dialog-description" className="text-center mt-2">
                        Parece que uno de los grupos que has elegido ya se ha llenado.
                    </DialogContentText>
                    <DialogActions className="flex justify-center pb-4 mt-6">
                        <RedButton onClick={onClose}>
                            Cerrar
                        </RedButton>
                    </DialogActions>
                </>
            )}
        </DialogContent>
    </Dialog>
);

export default CustomDialog;