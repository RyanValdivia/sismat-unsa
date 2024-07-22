import TableSelectCourse from "../components/TableSelectCourse";
import React, { useState, useEffect } from "react";
import {getStudent} from "../api/student"
import { Link } from "react-router-dom";

const SelectCoursePage = () => {
  const [student, setStudent] = useState({});
  useEffect(() => {
    const accessToken = sessionStorage.getItem("access");
    const studentId = sessionStorage.getItem("student_id");
    console.log(accessToken);
    
      const fetchStudentData = async () => {
        try {
          const response = await getStudent(studentId,accessToken);
          console.log('STUDENT', response);
          setStudent(response.data);
          
        } catch (error) {
          console.error('ERROR: ', error);
        }
      };

      fetchStudentData();
      
  }, []);
    return (
        <div className="flex flex-col min-h-screen w-full bg-gradient-to-tr from-[#8B0000] to-[#800020] pb-5">
          <header className="flex items-center justify-between bg-[#9B0000] text-white py-4 px-6">
            <div className="font-bold">User Name: {student.names + " " +student.lastnames}</div>
            <div className="">
              <Link to="/">
              Sign Out
              </Link>
            </div>
          </header>
          <TableSelectCourse />
        </div>
      );
};

export default SelectCoursePage;