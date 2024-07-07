import React, { useEffect, useState } from "react";
import ConfirmationTable from "../components/ConfirmationTable.jsx";
import { Link } from "react-router-dom";


const ConfirmationPage = () => {
    const [student, setStudent] = useState({});

    useEffect(() => {
        const studentData = JSON.parse(sessionStorage.getItem("student"));
        if (studentData) {
            setStudent(studentData);
        }
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen w-full bg-[#DDDDDD] pb-5">
            <header className="flex items-center justify-between bg-[#8B0000] text-white py-4 px-6">
                <div className="font-bold text-xl">{student.lastnames + ", " + student.names}</div>
                <Link to="/" className="text-white hover:text-gray-300 md:text-lg">
                    Sign Out
                </Link>
            </header>
            
            <div className="flex flex-col items-center w-full">
                <div className="w-full max-w-7xl mt-7 px-5">
                    <ConfirmationTable />
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;