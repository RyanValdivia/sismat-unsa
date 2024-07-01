import { useState } from "react";
import {
    Input,
    Button,
    Card,
    Typography,
    Alert,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { MdError } from "react-icons/md";
import { login } from "../api/login";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);

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
            setErrorMessage("");
            setShowError(false);
            setUsername("");
            setPassword("");
            event.target.reset();
        } catch (error) {
            setErrorMessage("Hubo un error :v");
            setShowError(true);
            setTimeout(() => setShowError(false), 3000); // Hide the error after 3 seconds
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
                        className="w-full flex justify-center"
                    >
                        <Alert color="red" icon={<MdError />}>
                            {errorMessage}
                        </Alert>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: showError ? 20 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-center"
            >
                <Card>
                    <div className="min-w-96 p-10">
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
            </motion.div>
        </div>
    );
};

export default LoginForm;
