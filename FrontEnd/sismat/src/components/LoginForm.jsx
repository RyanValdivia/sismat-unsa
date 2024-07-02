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
import { login } from "../api/login";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    username: z
        .string()
        .min(1, "Username is required")
        .max(8, "Username must be at most 8 characters long")
        .regex(/^[A-Za-z]+$/, "Username must only contain letters"),
    password: z
        .string()
        .min(1, "Password is required")
        .max(8, "Password must be at most 8 characters long")
        .regex(/^[0-9]+$/, "Password must only contain numbers"),
});

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = async (data) => {
        try {
            const res = await login(data);
            sessionStorage.setItem("access", res.data.access);
            sessionStorage.setItem("refresh", res.data.refresh);
            setSuccessMessage("Inicio de sesión exitoso");
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        } catch (error) {
            setErrorMessage(error.response.data.detail);
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center relative">
            <AnimatePresence>
                {showError && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-96 left-0 right-0 flex justify-center mt-2"
                    >
                        <Alert
                            color="red"
                            icon={<MdError className="h-full" />}
                            className="text-center"
                        >
                            {errorMessage}
                        </Alert>
                    </motion.div>
                )}

                {showSuccess && (
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
                            {successMessage}
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
                            Inicio de sesión
                        </Typography>

                        <Typography variant="h5" className="m-3">
                            Ingresa tus credenciales para acceder
                        </Typography>

                        {errors.username && (
                            <Typography color="red">
                                {errors.username.message}
                            </Typography>
                        )}

                        <Input
                            variant="outlined"
                            label="Nombre de usuario: "
                            placeholder="Ingresa tu nombre de usuario"
                            containerProps={{ className: "w-full mt-1" }}
                            {...register("username")}
                            error={!!errors.username}
                        />
                        
                        {errors.password && (
                            <Typography color="red">
                                {errors.password.message}
                            </Typography>
                        )}

                        <Input
                            variant="outlined"
                            label="Contraseña: "
                            placeholder="Ingresa tu contraseña"
                            containerProps={{
                                className: "w-full mt-1",
                            }}
                            {...register("password")}
                            error={!!errors.password}
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
