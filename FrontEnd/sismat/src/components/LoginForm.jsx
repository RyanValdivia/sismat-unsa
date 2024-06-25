import { useState } from "react";
import Input from "./Input";
import InputSubmit from "./InputSubmit";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username", username);
        console.log("password", password);
        setUsername("");
        setPassword("");
        event.target.reset();
    };

    return (
        <div className="border shadow rounded-md min-w-96 p-10">
            <form
                className="flex flex-col justify-center items-center p-1"
                onSubmit={(event) => handleSubmit(event)}
            >
                <h2 className="m-2 text-4xl antialiased text-red-800 font-bold">
                    Inicio de sesión
                </h2>
                <p className="text-xl m-2">
                    Ingresa tus credenciales para acceder
                </p>

                <Input
                    type="text"
                    label="Nombre de usuario: "
                    placeholder="Ingresa tu nombre de usuario"
                    value="username"
                    onChange={(event) => setUsername(event.target.value)}
                />

                <Input
                    type="password"
                    label="Contraseña: "
                    placeholder="Ingresa tu contraseña"
                    value="password"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <InputSubmit />
            </form>
        </div>
    );
};

export default LoginForm;
