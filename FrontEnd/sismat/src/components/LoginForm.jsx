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

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password,
        };
        try {
            const res = await login(user);
            console.log(res);
            sessionStorage.setItem("access", res.data.access);
            sessionStorage.setItem("refresh", res.data.refresh);
            console.log(sessionStorage);
            setShowSuccess(true);
            setUsername("");
            setPassword("");
            event.target.reset();
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
                            {"Inicio de sesión exitoso"}
                        </Alert>
                    </motion.div>
                )}
            </AnimatePresence>

            <Card className="mt-10">
                <div className="min-w-96 p-6">
                    <form
                        className="flex flex-col justify-center items-center p-1"
                        onSubmit={handleSubmit}
                    >
                        <Typography variant="h2" className="text-primary">
                            Inicio de sesión
                        </Typography>

                        <Typography variant="h5" className="m-3">
                            Ingresa tus credenciales para acceder
                        </Typography>

                        <Input
                            variant="outlined"
                            label="Nombre de usuario: "
                            placeholder="Ingresa tu nombre de usuario"
                            containerProps={{ className: "w-full m-3" }}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />

                        <Input
                            variant="outlined"
                            label="Contraseña: "
                            placeholder="Ingresa tu contraseña"
                            containerProps={{
                                className: "w-full",
                            }}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
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
