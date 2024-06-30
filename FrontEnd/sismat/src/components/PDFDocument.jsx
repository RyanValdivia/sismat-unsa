import React from "react";
import { Page, Text, View, StyleSheet, Document } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
        flexDirection: "column",
        fontFamily: "Helvetica",
    },
    header: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    section: {
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 10,
        padding: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },
    label: {
        fontWeight: "bold",
    },
    table: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#000",
        marginTop: 10,
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        alignItems: "center",
    },
    tableHeader: {
        backgroundColor: "#f2f2f2",
        fontWeight: "bold",
        padding: 5,
        textAlign: "center",
    },
    tableCell: {
        padding: 5,
        textAlign: "center",
        flex: 1,
        borderLeftWidth: 1,
        borderLeftColor: "#000",
    },
    totalCredits: {
        marginTop: 10,
        fontWeight: "bold",
        textAlign: "right",
    },
    footer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 50,
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
    rightAlign: {
        textAlign: "right",
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

const PDFDocument = ({ student, courses, totalCredits, payment }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.header}>CONSTANCIA DE MATRÍCULA</Text>

            <View style={styles.section}>
                <View style={styles.title}>
                    <Text style={styles.label}>Datos Alumno</Text>
                    <Text style={styles.rightAlign}>FECHA: 2023-08-28</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>C.U.I. :</Text>
                    <Text>{student.cui}</Text>
                    <Text style={styles.label}>NOMBRE:</Text>
                    <Text>{student.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>INGRESO :</Text>
                    <Text>{student.ingreso}</Text>
                    <Text style={styles.label}>FEC. NAC.:</Text>
                    <Text>{student.fecNac}</Text>
                    <Text style={styles.label}>DOC. CIVIL:</Text>
                    <Text>{student.docCivil}</Text>
                    <Text style={styles.label}>DOC. MILITAR:</Text>
                    <Text>{student.docMilitar}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>NIVEL :</Text>
                    <Text>PRE-GRADO</Text>
                    <Text style={styles.label}>ESCUELA :</Text>
                    <Text>INGENIERIA DE SISTEMAS</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>FUENTE:</Text>
                    <Text>{student.fuente}</Text>
                </View>
            </View>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Nro</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Código</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Año-Sem</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Nombre</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Ciclo</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Grupo</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Mat.</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Cred.</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Observaciones</Text>
                </View>
                {courses.map((course, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{index + 1}</Text>
                        <Text style={styles.tableCell}>{course.code}</Text>
                        <Text style={styles.tableCell}>{"1  2"}</Text>
                        <Text style={styles.tableCell}>{course.name}</Text>
                        <Text style={styles.tableCell}>{"B"}</Text>
                        <Text style={styles.tableCell}>{course.group}</Text>
                        <Text style={styles.tableCell}>{course.enrollment}</Text>
                        <Text style={styles.tableCell}>{course.credits}</Text>
                        <Text style={styles.tableCell}></Text>
                    </View>
                ))}
            </View>

            <Text style={styles.totalCredits}>Total de créditos: {totalCredits}</Text>
            <Text style={styles.totalCredits}>Pagos realizados: S/. {payment.amount} [recibo: {payment.receipt}]</Text>

            <View style={styles.footer}>
                
                <Text>Operador</Text>
                <Text>Alumno</Text>
                <Text></Text>
                <Text>____________________</Text>
                <Text>____________________</Text>
            </View>
        </Page>
    </Document>
);

export default PDFDocument;