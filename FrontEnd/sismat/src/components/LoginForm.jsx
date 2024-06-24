import { useState } from "react";

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
        <div className="shadow-md flex flex-col justify-center items-center">
            <form
                className="flex flex-col justify-center items-center"
                onSubmit={(event) => handleSubmit(event)}
            >
                <h2>Inicio de sesión</h2>
                <p>Ingresa tus credenciales para acceder</p>
                <div className="input-container">
                    <label htmlFor="username">Nombre de usuario: </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Ingresa tu nombre de usuario"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password"> Contraseña: </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="button"
                        type="submit"
                        value="Iniciar Sesión"
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
