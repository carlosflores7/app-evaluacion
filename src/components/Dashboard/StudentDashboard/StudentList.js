import React, { useEffect, useState, useContext } from "react";
import { ListBox } from "primereact/listbox";
import api from "../../../services/api"; // Importar la instancia de Axios para llamadas a la API
import { AuthContext } from "../../../contexts/AuthContext"; // Importar el contexto de autenticación
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function StudentList() {
  const { user } = useContext(AuthContext); // Obtener el usuario del contexto
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    // Función para obtener estudiantes desde la API
    const fetchStudents = async () => {
      try {
        // Asegurarse de que el usuario esté autenticado antes de hacer la solicitud
        if (user && user.usuario && user.contrasena) {
          const response = await api.get("/estudiantes", {
            auth: {
              username: user.usuario, // Pasar el usuario
              password: user.contrasena, // Pasar la contraseña
            },
          });

          if (response.data && response.data.datos) {
            setStudents(response.data.datos); // Guardar los datos de los estudiantes
          } else {
            console.error("Estructura inesperada en la respuesta:", response.data);
          }
        } else {
          console.error("Usuario no autenticado.");
        }
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    };

    fetchStudents();
  }, [user]); // Recargar cuando el usuario cambie

  return (
    <div className="p-col-4">
      <div className="card">
        <ListBox
          options={students}
          optionLabel="nombre" // Campo a mostrar en la lista
          itemTemplate={(student) => (
            <div>
              <span>
                <strong>{student.nombre}</strong><br />
                Grado: {student.grado} Grupo: {student.grupo}<br />
                CURP: {student.curp}<br />
                Correo: {student.correo}
              </span>
            </div>
          )}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default StudentList;
