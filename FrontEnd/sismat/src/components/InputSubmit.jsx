const InputSubmit = ({ value = "Enviar" }) => {
    return (
        <div className="flex flex-col justify-center items-center m-2 w-full">
            <input
                className="m-2 w-full bg-red-800 text-white p-2 rounded-md cursor-pointer hover:bg-red-900"
                type="submit"
                value={value}
            />
        </div>
    );
};

export default InputSubmit;
