import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ScheduleModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                maxWidth: '80vw',
            }}>
                <h1 id="simple-modal-title">MI HORARIO</h1>
                <h2 id="simple-modal-title">Hola Mundo</h2>
                <Button 
                    onClick={onClose} 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 2 }}
                >
                    Cerrar
                </Button>
            </Box>
        </Modal>
    );
};

export default ScheduleModal;