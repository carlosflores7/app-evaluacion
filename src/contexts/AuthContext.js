import React, { createContext, useState, useEffect } from "react";

// Crear el contexto de autenticación
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar si hay un usuario guardado en localStorage al cargar la aplicación
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Convertir el string de vuelta a objeto
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    // Guardar los datos del usuario en el localStorage
    localStorage.setItem("user", JSON.stringify(userData)); // Guardar los datos del usuario en localStorage

    // Opcional: almacenar token si se recibe en el inicio de sesión
    if (userData.token) {
      localStorage.setItem("token", userData.token);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Eliminar los datos del usuario del localStorage
    localStorage.removeItem("token"); // Eliminar el token del localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
