import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorIcon from '@mui/icons-material/Error';
import RedButton from './RedButton';

const ErrorDialog = ({ open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
    >
        <DialogContent className="flex flex-col items-center">
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
        </DialogContent>
    </Dialog>
);

export default ErrorDialog;