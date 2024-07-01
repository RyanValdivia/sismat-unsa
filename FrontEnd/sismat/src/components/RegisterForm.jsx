import { useState } from "react";
import {
    Input,
    Button,
    Card,
    Typography,
    Alert,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { MdError, MdOutlineCheckCircle } from "react-icons/md";
import { register } from "../api/login";

const LoginForm = () => {
    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [email, setEmail] = useState("");
    const [cui, setCui] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const student = {
            names: names,
            lastnames: lastNames,
            email: email,
            cui: cui,
        };
        const res = await register(student);
        console.log(res);
        event.target.reset;
    };

    return (
        <div className="flex flex-col justify-center items-center relative">
            <Card className="mt-10">
                <div className="min-w-96 p-6">
                    <form
                        className="flex flex-col justify-center items-center p-1"
                        onSubmit={(event) => handleSubmit(event)}
                    >
                        <Typography variant="h2" className="text-primary">
                            Regístrate
                        </Typography>

                        <Typography variant="h5" className="m-3">
                            Ingresa tus credenciales para registrarte
                        </Typography>

                        <Input
                            variant="outlined"
                            label="Nombres: "
                            placeholder="Ingresa tus nombres"
                            containerProps={{ className: "w-full m-3" }}
                            onChange={(event) => setNames(event.target.value)}
                        />

                        <Input
                            variant="outlined"
                            label="Apellidos: "
                            placeholder="Ingresa tus apellidos"
                            containerProps={{ className: "w-full m-3" }}
                            onChange={(event) =>
                                setLastNames(event.target.value)
                            }
                        />

                        <Input
                            variant="outlined"
                            label="Correo electrónico: "
                            placeholder="Ingresa tu correo"
                            containerProps={{ className: "w-full m-3" }}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <Input
                            variant="outlined"
                            label="CUI: "
                            placeholder="Ingresa tu CUI"
                            containerProps={{ className: "w-full m-3" }}
                            onChange={(event) => setCui(event.target.value)}
                        />

                        <Button
                            fullWidth
                            className="bg-primary my-3"
                            type="submit"
                        >
                            Iniciar Sesión
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default LoginForm;
