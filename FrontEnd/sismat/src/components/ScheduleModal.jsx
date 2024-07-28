import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import RedButton from './RedButton';

const ScheduleModal = ({ isOpen, workloads, student, onClose }) => {

    // Estilos para el horario
    const cellStyle = {
        border: '2px solid black',
        padding: '2px',
        textAlign: 'center',
        fontWeight: 'bold',
    };

    const headerCellStyle = {
        ...cellStyle,
        backgroundColor: '#DDDDDD',
    };

    const courseCellStyle = {
        ...cellStyle,
        backgroundColor: '#DDDDDD',
    };

    const section = {
        borderWidth: 2,
        borderColor: "#000",
        width: '100%',
        marginBottom: 10,
        padding: 4,
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'left',
        padding: 5,
    };

    const now = new Date();
    const timeZoneOffset = -5 * 60;
    const peruTime = new Date(now.getTime() + timeZoneOffset * 60 * 1000);
    const date = peruTime.toISOString().slice(0, 10);

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Box 
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 20,
                    p: 5,
                    width: '1100px',
                    overflow: 'auto',
                }}
            >
                <h1 id="simple-modal-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 40, paddingBottom:20 }}>MI HORARIO</h1>
                <div style={section}>
                    <div style={rowStyle}>
                        <h2 style={{ fontWeight: 'bold', paddingLeft: 5, paddingRight: 10 }}>C.U.I.: </h2>
                        <h2>{student.cui}</h2>
                        <h2 style={{ fontWeight: 'bold', paddingLeft: 50, paddingRight: 10 }}>NOMBRE: </h2>
                        <h2>{student.lastnames + ", " + student.names}</h2>
                    </div>
                    <div style={rowStyle}>
                        <h2 style={{ fontWeight: 'bold', paddingLeft: 5, paddingRight: 10 }}>FECHA: </h2>
                        <h2>{date}</h2>
                        <h2 style={{ fontWeight: 'bold', paddingLeft: 25, paddingRight: 10 }}>ESCUELA: </h2>
                        <h2>INGENIERIA DE SISTEMAS</h2>
                    </div>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={headerCellStyle}>Horas</th>
                            <th style={headerCellStyle}>Lunes</th>
                            <th style={headerCellStyle}>Martes</th>
                            <th style={headerCellStyle}>Miércoles</th>
                            <th style={headerCellStyle}>Jueves</th>
                            <th style={headerCellStyle}>Viernes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={headerCellStyle}>07:00/07:50</td>
                            <td style={courseCellStyle} rowSpan="2">PROGRAMACION WEB 2 (Aula:302)</td>
                            <td style={cellStyle}></td>
                            <td style={courseCellStyle} rowSpan="2">CALCULO EN VARIAS VARIABLES (Aula:205)</td>
                            <td style={courseCellStyle} rowSpan="3">CALCULO EN VARIAS VARIABLES (Aula:205)</td>
                            <td style={courseCellStyle} rowSpan="2">CALCULO EN VARIAS VARIABLES (Aula:205)</td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>07:50/08:40</td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>08:40/09:40</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>09:40/10:30</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={courseCellStyle} rowSpan="2">INNOVACION Y CREATIVIDAD (Aula:302)</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>10:40/11:30</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={courseCellStyle} rowSpan="2">REDACCION DE ARTICULOS E INFORMES DE INVESTIGACION (Aula:302)</td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>11:30/12:20</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={courseCellStyle} rowSpan="2">INNOVACION Y CREATIVIDAD (Aula:302)</td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>12:20/13:10</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>13:30/15:50</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>15:50/16:40</td>
                            <td style={courseCellStyle} rowSpan="2">TALLER DE LIDERAZGO Y COLABORACION (Aula:302)</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>16:40/17:30</td>
                            <td style={courseCellStyle} rowSpan="2">TALLERES DE PSICOLOGIA (Aula:302)</td>
                            <td style={cellStyle}></td>
                            <td style={courseCellStyle} rowSpan="2">FUNDAMENTOS DE PROGRAMACION 2 (Aula:205)</td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>17:30/18:30</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>18:30/19:20</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={courseCellStyle} rowSpan="2">FUNDAMENTOS DE PROGRAMACION 2 (Aula:205)</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                        <tr>
                            <td style={headerCellStyle}>19:20/20:10</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-center mt-5">
                    <RedButton 
                        onClick={onClose} 
                        variant="contained" 
                        sx={{ mt: 2, width: '100px' }}
                    >
                        Cerrar
                    </RedButton>
                </div>
            </Box>
        </Modal>
    );
};

export default ScheduleModal;
