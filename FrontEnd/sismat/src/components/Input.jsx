const Input = ({ type, label, placeholder, value, onChange }) => {
    return (
        <div className="flex flex-col justify-center items-center m-2 w-full">
            <label htmlFor={value} className="m-2 w-full">
                {label}
            </label>
            <input
                className="m-2 w-full border shadow outline-none border-gray-300 rounded-md p-2 focus:border-red-800 focus:outline-none"
                type={type}
                id={value}
                placeholder={placeholder}
                onChange={(event) => {
                    onChange(event);
                }}
            />
        </div>
    );
};

export default Input;
