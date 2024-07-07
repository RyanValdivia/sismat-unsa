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
import { register as reg } from "../api/login";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
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

    const onSubmit = async (data) => {

        try {
            const res = await reg(data);
            setSuccessMessage("You've registered successfully")
        } catch (error) {
            console.log(error);
            setErrorMessage("Hubo un error al registrar el usuario")
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
                        onSubmit={(handleSubmit(onSubmit))}
                    >
                        <Typography variant="h2" className="text-primary">
                            Regístrate
                        </Typography>

                        <Typography variant="h5" className="m-3">
                            Ingresa tus credenciales para registrarte
                        </Typography>

                        {errors.names && (
                            <Typography color="red">
                                {errors.names.message}
                            </Typography>
                        )}

                        <Input
                            variant="outlined"
                            label="Nombres: "
                            placeholder="Ingresa tus nombres"
                            containerProps={{ className: "w-full m-3" }}
                            {...register("names")}
                            error={!!errors.names}
                        />

                        {errors.lastnames && (
                            <Typography color="red">
                                {errors.lastnames.message}
                            </Typography>
                        )}

                        <Input
                            variant="outlined"
                            label="Apellidos: "
                            placeholder="Ingresa tus apellidos"
                            containerProps={{ className: "w-full m-3" }}
                            {...register("lastnames")}
                            error={!!errors.lastnames}
                        />

                        {errors.email && (
                            <Typography color="red">
                                {errors.email.message}
                            </Typography>
                        )}

                        <Input
                            variant="outlined"
                            label="Correo electrónico: "
                            placeholder="Ingresa tu correo"
                            containerProps={{ className: "w-full m-3" }}
                            {...register("email")}
                            error={!!errors.email}
                        />

                        {errors.cui && (
                            <Typography color="red">
                                {errors.cui.message}
                            </Typography>
                        )}

                        <Input
                            variant="outlined"
                            label="CUI: "
                            placeholder="Ingresa tu CUI"
                            containerProps={{ className: "w-full m-3" }}
                            {...register("cui")}
                            error={!!errors.cui}
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
