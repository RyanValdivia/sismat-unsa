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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
    const [names, setNames] = useState("");
    const [lastnames, setLastNames] = useState("");
    const [email, setEmail] = useState("");
    const [cui, setCui] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const registerSchema = z.object({
        names: z.string().min(1, "This field is required").max(50),
        lastnames: z.string().min(1, "This field is required").max(50),
        email: z.string().email(),
        cui: z
            .string()
            .min(8, "This field is required")
            .max(8, "CUI must be 8 characters long"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        const student = {
            names: names,
            lastnames: lastnames,
            email: email,
            cui: cui,
        };
        try {
            const res = await register(student);
            // setSuccessMessage(res.data.detail);
            console.log(res);
            event.target.reset;
        } catch (error) {
            // setErrorMessage(error.data.detail);
            console.log(error.response.data);
            setErrorMessage(error.response.data[0]);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <AnimatePresence>
                {errorMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 right-0 flex justify-center mt-2 z-10 top-10"
                    >
                        <Alert
                            color="red"
                            icon={<MdError className="h-full" />}
                            className="text-center w-5/6 md:w-1/3"
                        >
                            {errorMessage}
                        </Alert>
                    </motion.div>
                )}

                {successMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-96 left-0 right-0 flex justify-center mt-2"
                    >
                        <Alert
                            color="green"
                            icon={<MdOutlineCheckCircle className="h-full" />}
                            className="text-center"
                        >
                            {"Usuario registrado correctamente"}
                        </Alert>
                    </motion.div>
                )}
            </AnimatePresence>

            <Card className="mt-10">
                <div className="min-w-96 p-6">
                    <form
                        className="flex flex-col justify-center items-center p-1"
                        onSubmit={handleSubmit(onSubmit)}
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
