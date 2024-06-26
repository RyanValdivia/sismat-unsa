import { useState } from "react";
import Input from "./Input";
import InputSubmit from "./InputSubmit";

const RegisterForm = () => {
    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            names: names,
            lastNames: lastNames,
            email: email,
        };
        console.log(user);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="border shadow rounded-md min-w-96 p-10 m-5">
                <form
                    className="flex flex-col justify-center items-center p-1"
                    onSubmit={(event) => handleSubmit(event)}
                >
                    <h2 className="m-2 text-4xl antialiased text-red-800 font-bold">
                        Regístrate
                    </h2>
                    <p className="text-xl m-2">
                        Ingresa tus credenciales para registrarte
                    </p>

                    <Input
                        type="text"
                        label="Nombres: "
                        placeholder="Ingresa tus nombres"
                        value="names"
                        onChange={(event) => setNames(event.target.value)}
                    />

                    <Input
                        type="text"
                        label="Apellidos: "
                        placeholder="Ingresa tus apellidos"
                        value="lastNames"
                        onChange={(event) => setLastNames(event.target.value)}
                    />

                    <Input
                        type="email"
                        label="Correo electrónico: "
                        placeholder="Ingresa tu correo"
                        value="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <InputSubmit />
                </form>
            </div>
        </div>
    );
};
