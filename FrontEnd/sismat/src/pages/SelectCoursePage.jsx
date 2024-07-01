import TableSelectCourse from "../components/TableSelectCourse";
import { Link } from "react-router-dom";

const SelectCoursePage = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-gradient-to-tr from-[#8B0000] to-[#800020] pb-5">
          <header className="flex items-center justify-between bg-[#9B0000] text-white py-4 px-6">
            <div className="font-bold">User Name</div>
            <div className="">
              <Link to="/pageLogin">
              Sign Out
              </Link>
            </div>
          </header>
          <TableSelectCourse />
        </div>
      );
};

export default SelectCoursePage;