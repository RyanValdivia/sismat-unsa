import ConfirmationTable from "../components/ConfirmationTable.jsx";

const ConfirmationPage = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-200 pb-5">
            <header className="flex items-center justify-between bg-[#8B0000] text-white py-4 px-6">
                <div className="font-bold text-xl">Nombre del usuario :v</div>
                <div><a href="#" className="text-white hover:text-gray-300">Sign Out</a></div>
            </header>
            
            <div className="flex flex-col flex-1 items-center w-full">
                <div className="w-full max-w-7xl mt-10">
                    <ConfirmationTable />
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;