import React, { useEffect, useState, useContext } from "react";
import { Card } from "primereact/card";
import api from "../../../services/api";
import { AuthContext } from "../../../contexts/AuthContext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function TeacherDashboardContent() {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        if (user && user.usuario && user.contrasena) {
          const response = await api.get("/estudiantes", {
            auth: {
              username: user.usuario,
              password: user.contrasena,
            },
          });

          if (response.data && response.data.datos) {
            setStudents(response.data.datos);
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
  }, [user]);

  return (
    <>
      <h1 className="bg bg-info">LISTADO DE ESTUDIANTES A LOS QUE TIENES ACCESO</h1>
      <Card>
        <div className="center-table">
          <table style={{ width: '80%', margin: '0 auto' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>ID Estudiante</th>
                <th style={{ textAlign: 'center' }}>Nombre Completo</th>
                <th style={{ textAlign: 'center' }}>Grado</th>
                <th style={{ textAlign: 'center' }}>Grupo</th>
                <th style={{ textAlign: 'center' }}>CURP</th>
                <th style={{ textAlign: 'center' }}>Correo</th>
                <th style={{ textAlign: 'center' }}>Ver</th>
              </tr>
            </thead>
            <tbody>
              {students.map((estudiante) => (
                <tr key={estudiante.idEstudiante}>
                  <td style={{ textAlign: 'center' }}>{estudiante.idEstudiante}</td>
                  <td style={{ textAlign: 'center' }}>
                    {estudiante.nombre} {estudiante.apellido_p} {estudiante.apellido_m}
                  </td>
                  <td style={{ textAlign: 'center' }}>{estudiante.grado}</td>
                  <td style={{ textAlign: 'center' }}>{estudiante.grupo}</td>
                  <td style={{ textAlign: 'center' }}>{estudiante.curp}</td>
                  <td style={{ textAlign: 'center' }}>{estudiante.correo}</td>
                  <td style={{ textAlign: 'center' }}>
                    <a href={`/teacher-dashboard/opciones/${estudiante.idEstudiante}`}>
                      Ver Calificaciones
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <a href="/principal" className="btn btn-success">
        <span className="glyphicon glyphicon-arrow-left"></span> Regresar
      </a>
    </>
  );
}

export default TeacherDashboardContent;
