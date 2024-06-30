import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import DownloadIcon from '@mui/icons-material/Download';

const WhiteButton = styled(Button)({
    backgroundColor: 'white',
    color: '#8B0000',
    '&:hover': {
        backgroundColor: '#dcdcdc',
    },
});

const DownloadButton = ({ handleDownloadPDF }) => (
    <div className="flex justify-end mt-3">
        <WhiteButton 
            variant="contained" 
            endIcon={<DownloadIcon />}
            onClick={handleDownloadPDF}
        >
            Descargar constancia
        </WhiteButton>
    </div>
);

export default DownloadButton;