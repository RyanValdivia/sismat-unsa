import React from "react";
import TableSelectGroup from "../components/TableSelectGroup";
import Header from "../components/Header";
import useFetchStudent from "../components/useFetchStudent";

const SelectGroupPage = () => {
  const student = useFetchStudent();

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-tr from-[#8B0000] to-[#800020] pb-5">
      <Header student={student} />
      <TableSelectGroup />
    </div>
  );
};

export default SelectGroupPage;