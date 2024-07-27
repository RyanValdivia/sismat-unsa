import { useState, useEffect } from "react";
import { getStudent } from "../api/student";

const useFetchStudent = () => {
  const [student, setStudent] = useState({});

  useEffect(() => {
    const accessToken = sessionStorage.getItem("access");
    const studentId = sessionStorage.getItem("student_id");
    console.log(accessToken);

    const fetchStudentData = async () => {
      try {
        const response = await getStudent(studentId, accessToken);
        console.log('STUDENT', response);
        setStudent(response.data);
      } catch (error) {
        console.error('ERROR: ', error);
      }
    };

    fetchStudentData();
  }, []);

  return student;
};

export default useFetchStudent;
