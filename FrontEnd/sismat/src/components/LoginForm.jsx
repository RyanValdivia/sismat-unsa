import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { login } from "../api/login";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password,
        };
        try {
            const res = await login(user);
            setErrorMessage("");
            console.log(res);
            setUsername("");
            setPassword("");
            event.target.reset();
            
        } catch (error) {
            
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="border shadow rounded-md min-w-96 p-10 m-5">
                <form
                    className="flex flex-col justify-center items-center p-1"
                    onSubmit={(event) => handleSubmit(event)}
                >
                    <h2 className="m-2 text-4xl antialiased text-[#8B0000] font-bold">
                        Inicio de sesión
                    </h2>
                    <p className="text-xl m-2">
                        Ingresa tus credenciales para acceder
                    </p>

                    <Input
                        variant="outlined"
                        label="Nombre de usuario: "
                        placeholder="Ingresa tu nombre de usuario"
                        containerProps={{ className: "w-full m-3" }}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <Input
                        variant="outlined"
                        label="Contraseña: "
                        placeholder="Ingresa tu contraseña"
                        containerProps={{ className: "w-full m-3" }}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <Button
                        fullWidth
                        className="bg-[#8B0000]"
                        type="submit"
                    >
                        Iniciar Sesión
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
