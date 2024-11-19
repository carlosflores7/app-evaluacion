import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Usar useNavigate para redirección
import { AuthContext } from "../../../contexts/AuthContext";
import api from "../../../services/api"; // Asegúrate de tener una configuración de API como axios
import Navbar from "../../Navbar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Tema de PrimeReact
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"; // Utilidades de diseño

function Opciones() {
  const { user } = useContext(AuthContext); // Obtener usuario y contraseña
  const { id } = useParams(); // Obtener el idEstudiante desde la URL
  const [cursos, setCursos] = useState([]); // Cursos disponibles para el estudiante
  const [selectedCurso, setSelectedCurso] = useState(null); // Curso seleccionado
  const navigate = useNavigate(); // Usar useNavigate para navegar

  useEffect(() => {
    // Obtener los cursos del estudiante
    const fetchCursos = async () => {
      try {
        if (user && user.usuario && user.contrasena) {
          const response = await api.get(`/cursos/estudiante/${id}`, {
            auth: {
              username: user.usuario,
              password: user.contrasena,
            },
          });
          if (response.data && response.data.datos) {
            setCursos(response.data.datos); // Guardar los cursos en el estado
          }
        }
      } catch (error) {
        console.error("Error al obtener cursos:", error);
      }
    };

    fetchCursos();
  }, [user, id]); // El id se agrega a las dependencias

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    if (selectedCurso) {
      // Redirigir a la URL correcta con los parámetros idEstudiante e idCurso
      navigate(`/teacher-dashboard/calificaciones/PorCurso?idEstudiante=${id}&idCurso=${selectedCurso.idCurso}`);
    } else {
      alert("Por favor, selecciona un curso.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-mt-4 p-px-3">
        <h1 className="p-text-center p-mb-3">Opciones para Calificaciones</h1>

        {/* Formulario para ver calificaciones por curso */}
        <div className="p-card p-shadow-4 p-p-4">
          <h3 className="p-text-center p-mb-3">Ver Calificaciones por Curso</h3>
          <div className="p-grid p-align-center">
            <div className="p-col-12 p-md-6">
              <Dropdown
                value={selectedCurso}
                onChange={(e) => setSelectedCurso(e.value)}
                options={cursos}
                optionLabel="materia"
                placeholder="Selecciona un curso"
                className="w-full"
              />
            </div>
            <div className="p-col-12 p-md-6">
              <Button
                label="Consultar"
                icon="pi pi-search"
                className="p-button-primary w-full"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>

        {/* Botón de regreso */}
        <div className="p-mt-4 p-text-center">
          <Button
            label="Regresar"
            icon="pi pi-arrow-left"
            className="p-button-success"
            onClick={() => navigate("/principal")}
          />
        </div>
      </div>
    </div>
  );
}

export default Opciones;
