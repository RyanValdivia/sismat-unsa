import React from "react";
import { Link } from "react-router-dom";

const Header = ({ student }) => {
  return (
    <header className="flex items-center justify-between bg-[#9B0000] text-white py-4 px-6">
      <div className="font-bold">User Name: {student.names + " " + student.lastnames}</div>
      <div className="">
        <Link to="/">Sign Out</Link>
      </div>
    </header>
  );
};

export default Header;