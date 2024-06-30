import ConfirmationTable from "../components/ConfirmationTable.jsx";

const ConfirmationPage = () =>{
    return (
        <div className="flex flex-col min-h-screen w-full bg-gradient-to-tr from-[#8B0000] to-[#800020] pb-5">
            <header className="flex items-center justify-between bg-[#9B0000] text-white py-4 px-6">
                <div className="font-bold">Nombre del usuario :v</div>
                <div className=""><a href="#">Sign Out</a></div>
            </header>
            
            <div className="flex flex-col flex-1 items-center w-full">
                <div className="w-full max-w-7xl">
                    <ConfirmationTable />
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;