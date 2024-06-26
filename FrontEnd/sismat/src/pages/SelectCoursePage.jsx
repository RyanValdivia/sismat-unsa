import TableSelectCourse from "../components/TableSelectCouse";


const SelectCoursePage = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-gradient-to-tr from-[#8B0000] to-[#800020]">
          <header className="flex items-center justify-between bg-[#9B0000] text-white py-4 px-6">
            <div className="font-bold">User Name</div>
            <div className=""><a href="#">Sign Out</a></div>
          </header>
          <TableSelectCourse />
        </div>
      );
};

export default SelectCoursePage;