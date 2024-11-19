import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import api from "../../services/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Message } from "primereact/message";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Acceder a la función login del AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/usuarios/autenticar", {
        auth: {
          username: username,
          password: password,
        },
      });

      if (response.data.estatus === "OK") {
        const userData = response.data.usuario;
        localStorage.setItem("token", response.data.token); // Guardar el token en el localStorage
        login(userData); // Guardar los datos del usuario en el contexto
        setMessage("Inicio de sesión exitoso");
        navigate("/main"); // Redirigir al dashboard o página principal
      } else {
        setMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error completo:", error);
      setMessage("Error en la autenticación");
    }
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">     
          <div className="text-900 text-3xl font-medium mb-3">
            Bienvenido a Sistema de Gestión Escolar
          </div>
        </div>
        <div className="text-center mb-5">
          <form onSubmit={handleSubmit}>
            <div className="p-field">
              <label
                htmlFor="username"
                className="block text-900 font-medium mb-2"
              >
                Usuario
              </label>
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-6 mb-3"
              />
            </div>
            <div className="p-field">
              <label
                htmlFor="password"
                className="block text-900 font-medium mb-2"
              >
                Contraseña
              </label>
              <InputText
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-6 mb-3"
              />
            </div>
            <Button label="Entrar" className="w-6" />
          </form>
        </div>
        {message && (
          <Message
            severity={
              message === "Inicio de sesión exitoso" ? "success" : "error"
            }
            text={message}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
