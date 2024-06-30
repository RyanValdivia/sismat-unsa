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
        fontSize: 12,
        fontFamily: 'Open Sans',
        fontWeight: '700',
        textAlign: "center",
        marginTop: 15,
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Open Sans',
        fontWeight: '700',
    },
    tag: {
        fontFamily: 'Open Sans',
        fontWeight: '700',
        backgroundColor: "#CCCCCC",
        width: 65,
        borderColor: "#000",
        borderWidth: 1,
        marginBottom: -1,
    },
    section: {
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 10,
        padding: 5,
    },
    subsection: {
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 10,
        padding: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "left",
        marginBottom: 4,
    },
    table: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#000",
    },
    tableRow: {
        flexDirection: "row",
        borderBottomColor: "#000",
        alignItems: "center",
    },
    tableHeader: {
        borderBottomWidth: 1,
        backgroundColor: "#f2f2f2",
        fontFamily: 'Open Sans',
        fontWeight: '800',
        padding: 3,
        textAlign: "center",
    },
    tableCell: {
        padding: 1,
        borderLeftColor: "#000",
    },
    // AQUI MANEJO LOS TAMAÑOS DE LOS ANCHOS DE LAS COLUMNAS
    tableCellNro: {
        width: "4%",
        textAlign: "center",
    },
    tableCellCode: {
        width: "8%",
        textAlign: "center",
    },
    tableCellYearSem: {
        width: "9%",
        textAlign: "center",
    },
    tableCellName: {
        width: "50%",
    },
    tableCellCiclo: {
        width: "6%",
        textAlign: "center",
    },
    tableCellGroup: {
        width: "6%",
        textAlign: "center",
    },
    tableCellMat: {
        width: "4%",
        textAlign: "center",
    },
    tableCellCredits: {
        width: "6%",
        textAlign: "center",
    },
    tableCellObservations: {
        width: "15%",
    },

    totalCredits: {
        marginTop: 2,
        marginRight: 85,
        fontFamily: 'Open Sans',
        fontWeight: '700',
        textAlign: "right",
    },
    payment: {
        fontFamily: 'Open Sans',
        fontWeight: '700',
    },
    signature: {
        marginTop: 70,
        alignItems: "center",
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 30,
    },
    tableContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    tableCellContainer: {
        flex: 1,
        borderLeftWidth: 1,
        borderLeftColor: "#000",
    },
});

const PDFDocument = ({ fileName, student, courses, totalCredits, payment }) => (
    <Document title={fileName}>
        <Page size="A4" style={styles.page}>
            <Text style={[styles.header]}>CONSTANCIA DE MATRICULA</Text>
            <Text style={styles.tag}>  Datos Alumno</Text>
            <View style={styles.section}>
                <View style={styles.title}>
                    <Text style={styles}>FECHA: 2023-08-28</Text>
                    <Text style={styles}>PÁGINA: 1/1</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>C.U.I. :</Text>
                    <Text>{student.cui}</Text>
                    <Text style={styles.title}>NOMBRE:</Text>
                    <Text>{student.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>INGRESO :</Text>
                    <Text>{student.ingreso}</Text>
                    <Text style={styles.title}>FEC. NAC.:</Text>
                    <Text>{student.fecNac}</Text>
                    <Text style={styles.title}>DOC. CIVIL:</Text>
                    <Text>{student.docCivil}</Text>
                    <Text style={styles.title}>DOC. MILITAR:</Text>
                    <Text>{student.docMilitar}</Text>
                </View>
            </View>

            <Text style={styles.tag}>  Datos Escuela</Text>
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.title}>NIVEL :</Text>
                    <Text>PRE-GRADO</Text>
                    <Text style={styles.title}>ESCUELA :</Text>
                    <Text>INGENIERIA DE SISTEMAS</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>FUENTE:</Text>
                    <Text>{student.fuente}</Text>
                </View>
            </View>

            <Text style={[styles.tag, { width: 115 }]}>  Asignaturas Matriculadas</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
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
                {courses.map((course, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableCellNro]}>{index + 1}</Text>
                        <Text style={[styles.tableCell, styles.tableCellCode]}>{course.code}</Text>
                        <Text style={[styles.tableCell, styles.tableCellYearSem]}>{"1  2"}</Text>
                        <Text style={[styles.tableCell, styles.tableCellName]}>{course.name}</Text>
                        <Text style={[styles.tableCell, styles.tableCellCiclo]}>{"B"}</Text>
                        <Text style={[styles.tableCell, styles.tableCellGroup]}>{course.group}</Text>
                        <Text style={[styles.tableCell, styles.tableCellMat]}>{course.enrollment}</Text>
                        <Text style={[styles.tableCell, styles.tableCellCredits]}>{course.credits}</Text>
                        <Text style={[styles.tableCell, styles.tableCellObservations]}></Text>
                    </View>
                ))}
            </View>

            <Text style={styles.totalCredits}>Total de créditos: {totalCredits}</Text>
            <View style={styles.row}>
                <Text style={styles.payment}>Pagos realizados:</Text>
                <Text>   S/. {payment.amount} [recibo: {payment.receipt}]</Text>
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

export default PDFDocument;