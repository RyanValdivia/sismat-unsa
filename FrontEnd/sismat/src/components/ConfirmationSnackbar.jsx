import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ConfirmationSnackbar = ({ openSnackbar, handleCloseSnackbar }) => (
    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            ¡Se ha matriculado correctamente!
        </Alert>
    </Snackbar>
);

export default ConfirmationSnackbar;