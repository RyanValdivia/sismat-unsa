import React from "react";
import { Page, Text, View, StyleSheet, Document } from "@react-pdf/renderer";
import registerFonts from '../config/fonts';

registerFonts();

const styles = StyleSheet.create({
    page: {
        padding: 25,
        fontSize: 8,
        flexDirection: "column",
    },
    header: {
        fontSize: 16,
        fontFamily: 'Open Sans',
        fontWeight: '700',
        textAlign: "center",
        marginTop: 15,
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Open Sans',
        fontWeight: '700',
        fontSize: 8,
        marginRight: 3,
    },
    text: {
        marginTop: 0.3,
    },
    tag: {
        fontFamily: 'Open Sans',
        fontWeight: '700',
        backgroundColor: "#CCCCCC",
        width: 62,
        borderColor: "#000",
        borderWidth: 1,
        marginBottom: -1,
        padding: 1,
    },
    section: {
        flexDirection: "row",
        fontFamily: 'Open Sans',
    },
    subsection: {
        borderWidth: 1,
        borderColor: "#000",
        width: 465,
        marginBottom: 10,
        padding: 4,
        paddingBottom: -1,
    },
    row: {
        flexDirection: "row",
        justifyContent: "left",
        marginBottom: 3,
    },
    table: {
        width: "100%",
        borderColor: "#white",
    },
    tableRow: {
        flexDirection: "row",
        marginTop: 1,
        alignItems: "center",
    },
    tableRowHeaders: {
        flexDirection: "row",
        borderWidth: 1,
    },
    tableHeader: {
        backgroundColor: "#EEEEEE",
        fontFamily: 'Open Sans',
        fontWeight: '800',
        padding: 3,
        textAlign: "center",
    },
    tableCell: {
        padding: 1,
    },

    // AQUI MANEJO LOS TAMAÑOS DE LOS ANCHOS DE LAS COLUMNAS
    tableCellNro: {
        width: "3.5%",
        textAlign: "center",
    },
    tableCellCode: {
        width: "7%",
        textAlign: "center",
    },
    tableCellYearSem: {
        width: "8%",
        textAlign: "center",
    },
    tableCellName: {
        width: "57%",
    },
    tableCellCiclo: {
        width: "5.3%",
        textAlign: "center",
    },
    tableCellGroup: {
        width: "5.7%",
        textAlign: "center",
    },
    tableCellMat: {
        width: "4%",
        textAlign: "center",
    },
    tableCellCredits: {
        width: "5%",
        textAlign: "center",
    },
    tableCellObservations: {
        width: "13%",
    },

    totalCredits: {
        marginTop: 2,
        marginRight: 70,
        fontFamily: 'Open Sans',
        fontWeight: '700',
        textAlign: "right",
    },
    signature: {
        marginTop: 80,
        alignItems: "center",
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 30,
    },
});

const PDFDocument = ({ fileName, student, workloads, totalCredits, payment }) => {
    const now = new Date();
    const timeZoneOffset = -5 * 60;
    const peruTime = new Date(now.getTime() + timeZoneOffset * 60 * 1000);
    const date = peruTime.toISOString().slice(0, 10);

    return (
        <Document title={fileName}>
            <Page size="A4" style={styles.page}>
                <Text style={styles.header}>CONSTANCIA DE MATRICULA</Text>
                <Text style={styles.tag}> Datos Alumno</Text>
                <View style={styles.section}>
                    <View style={styles.subsection}>
                        <View style={styles.row}>
                            <Text style={styles.title}>C.U.I. :  </Text>
                            <Text>{student.cui}</Text>
                            <Text>      </Text>
                            <Text style={styles.title}>NOMBRE: </Text>
                            <Text>{student.name}</Text>
                        </View>
                        <View style={[styles.row, { fontSize: 7.6 }]}>
                            <Text style={styles.title}>INGRESO :</Text>
                            <Text style={styles.text}>{student.ingreso}</Text>
                            <Text>      </Text>
                            <Text style={styles.title}>FEC. NAC.:</Text>
                            <Text style={styles.text}>{student.fecNac}</Text>
                            <Text>          </Text>
                            <Text style={styles.title}>DOC. CIVIL:</Text>
                            <Text style={styles.text}>D{student.docCivil}</Text>
                            <Text>              </Text>
                            <Text style={styles.title}>DOC. MILITAR:</Text>
                            <Text style={styles.text}>{student.docMilitar}</Text>
                        </View>
                    </View>
                    <View style={[styles.subsection, { marginLeft: 4, width: 80, backgroundColor: "#EEEEEE" }]}>
                        <View style={[styles.row, { fontSize: 7.6 }]}>
                            <Text style={styles.title}>FECHA:</Text>
                            <Text style={styles.text}>{date}</Text>
                        </View>
                        <View style={[styles.row, { fontSize: 7.6 }]}>
                            <Text style={styles.title}>PÁGINA:</Text>
                            <Text style={styles.text} render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`}></Text>
                        </View>
                    </View>
                </View>
                    
                <Text style={styles.tag}> Datos Escuela</Text>
                <View style={styles.section}>
                    <View style={styles.subsection}>
                        <View style={styles.row}>
                            <Text style={styles.title}>NIVEL :</Text>
                            <Text>PRE-GRADO</Text>
                            <Text>                      </Text>
                            <Text style={styles.title}>ESCUELA :</Text>
                            <Text>INGENIERIA DE SISTEMAS</Text>
                        </View>                
                    </View>
                    <View style={[styles.subsection, { marginLeft: 4, width: 80, backgroundColor: "#EEEEEE" }]}>
                        <View style={styles.row}>
                            <Text style={styles.title}>FUENTE:</Text>
                            <Text>INTERNET</Text>
                        </View>
                    </View>
                </View>

                <Text style={[styles.tag, { width: 108 }]}> Asignaturas Matriculadas</Text>
                <View style={styles.table}>
                    <View style={styles.tableRowHeaders}>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellNro]}>Nro</Text>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellCode]}>Código</Text>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellYearSem]}>Año-Sem</Text>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellName]}>Nombre</Text>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellCiclo]}>Ciclo</Text>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellGroup]}>Grupo</Text>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellMat]}>Mat.</Text>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellCredits]}>Cred.</Text>
                        <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellObservations]}>Observaciones</Text>
                    </View>
                    {workloads.map((workload, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.tableCellNro]}>{index + 1}</Text>
                            <Text style={[styles.tableCell, styles.tableCellCode]}>{workload.code}</Text>
                            <Text style={[styles.tableCell, styles.tableCellYearSem]}>{"1   2"}</Text>
                            <Text style={[styles.tableCell, styles.tableCellName]}>{workload.name}</Text>
                            <Text style={[styles.tableCell, styles.tableCellCiclo]}>{"B"}</Text>
                            <Text style={[styles.tableCell, styles.tableCellGroup]}>{workload.group}</Text>
                            <Text style={[styles.tableCell, styles.tableCellMat]}>{workload.enrollment}</Text>
                            <Text style={[styles.tableCell, styles.tableCellCredits]}>{workload.credits.toFixed(2)}</Text>
                            <Text style={[styles.tableCell, styles.tableCellObservations]}></Text>
                        </View>
                    ))}
                    <Text style={{borderTopColor: "#000", borderTopWidth: 1}}></Text>
                </View>
                
                <Text style={styles.totalCredits}>Total de créditos: {totalCredits.toFixed(2)}</Text>
                <View style={styles.row}>
                    <Text style={styles.title}>Pagos realizados:</Text>
                    <Text style={{marginTop: 2 }}>   S/. {payment.amount} [recibo: {payment.receipt}]</Text>
                </View>
                <View style={styles.signature}>
                    <Text>___________________                                                                                            ___________________</Text>
                    <Text style={{marginTop: 3}}>Operador                                                                                                                       Alumno</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={{marginBottom: 3}}>________________________________________</Text>
                    <Text>Este documento carece de validez en caso no contenga las firmas, sellos y huella dactilar - a33a82b5542402860821b41e6c6db08f6d9579e3</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;