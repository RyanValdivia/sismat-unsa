import React from "react";
import TableSelectCourse from "../components/TableSelectCourse";
import Header from "../components/Header";
import useFetchStudent from "../components/useFetchStudent";

const SelectCoursePage = () => {
  const student = useFetchStudent();

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-tr from-[#8B0000] to-[#800020] pb-5">
      <Header student={student} />
      <TableSelectCourse />
    </div>
  );
};

export default SelectCoursePage;