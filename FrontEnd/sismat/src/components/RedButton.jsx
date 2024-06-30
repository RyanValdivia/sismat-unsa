import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const RedButton = styled(Button)({
    backgroundColor: '#8B0000',
    color: 'white',
    '&:hover': {
        backgroundColor: '#5F0000',
    },
});

export default RedButton;