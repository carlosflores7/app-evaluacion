import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import api from "../../../services/api";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import Navbar from "../../Navbar";

function CalificacionesCurso() {
  const { user } = useContext(AuthContext);
  const [calificaciones, setCalificaciones] = useState([]);
  const [calificacionesInputs, setCalificacionesInputs] = useState({});
  const [alertMessage, setAlertMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idEstudiante = params.get("idEstudiante");
  const idCurso = params.get("idCurso");

  const auth = {
    username: user.usuario,
    password: user.contrasena
  };

  const fetchCalificaciones = async () => {
    try {
      const response = await api.get(`/calificaciones/estudiantes/${idEstudiante}/cursos/${idCurso}`, {
        auth
      });

      if (response.data.estatus === "OK") {
        setCalificaciones(response.data.calificaciones || []);
      } else {
        setAlertMessage("No se encontraron calificaciones para este estudiante.");
      }
    } catch (error) {
      console.error("Error al obtener calificaciones", error);
      setAlertMessage("Hubo un problema al cargar las calificaciones.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCalificaciones();
  }, [idEstudiante, idCurso]);

  const meses = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleAgregar = async (mes, valor) => {
    const valorNumerico = parseInt(valor, 10);
  
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      setAlertMessage("Por favor ingresa una calificación válida.");
      return;
    }
  
    const json = {
      idEstudiante,
      idCurso,
      mes,
      valor: valorNumerico
    };

    if (!window.confirm(`¿Estás seguro de que deseas agregar la calificación ${valorNumerico} para el mes ${mes}?`)) {
      return;
    }
  
    try {
      const response = await api.post('/calificaciones', json, { auth });
  
      if (response.data.estatus === "OK") {
        fetchCalificaciones();
        setAlertMessage(`Calificación agregada con éxito para el mes ${mes}.`);
      } else {
        setAlertMessage("Hubo un error al agregar la calificación.");
      }
    } catch (error) {
      console.error("Error al agregar calificación:", error);
      setAlertMessage("Hubo un error al agregar la calificación.");
    }
  };
  
  const handleEditar = async (idCalificacion, mes) => {
    const valor = calificacionesInputs[mes]; // Tomar valor directamente del input
    const valorNumerico = parseInt(valor, 10);
  
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      setAlertMessage("Por favor ingresa una calificación válida.");
      return;
    }

    if (!window.confirm(`¿Estás seguro de que deseas editar la calificación del mes ${mes} a ${valorNumerico}?`)) {
      return;
    }
  
    const json = {
      idCalificacion,
      valor: valorNumerico
    };
  
    try {
      const response = await api.put('/calificaciones', json, { auth });
  
      if (response.data.estatus === "OK") {
        fetchCalificaciones();
        setAlertMessage("Calificación editada con éxito.");
      } else {
        setAlertMessage("Hubo un error al editar la calificación.");
      }
    } catch (error) {
      console.error("Error al editar calificación:", error);
      setAlertMessage("Hubo un error al editar la calificación.");
    }
  };
  
  const handleEliminar = async (idCalificacion, mes) => {
    const calificacion = calificaciones.find((item) => item.idCalificacion === idCalificacion);
  
    if (!calificacion) {
      setAlertMessage("No se encontró la calificación para eliminar.");
      return;
    }

    if (!window.confirm(`¿Estás seguro de que deseas eliminar la calificación del mes ${mes} con valor ${calificacion.valor}?`)) {
      return;
    }
  
    try {
      const response = await api.delete(`/calificaciones/${idCalificacion}`, { auth });
  
      if (response.data.estatus === "OK") {
        setCalificacionesInputs((prev) => ({
          ...prev,
          [mes]: "" // Limpiar el input correspondiente
        }));
        fetchCalificaciones();
        setAlertMessage("Calificación eliminada con éxito.");
      } else {
        setAlertMessage("Hubo un error al eliminar la calificación.");
      }
    } catch (error) {
      console.error("Error al eliminar calificación:", error);
      setAlertMessage("Hubo un error al eliminar la calificación.");
    }
  };

  const handleCalificacionChange = (mes, event) => {
    const valor = event.target.value;
    setCalificacionesInputs({
      ...calificacionesInputs,
      [mes]: valor
    });
  };

  const getCalificacion = (mes) => {
    const calificacion = calificaciones.find((item) => item.mes === mes);
    return calificacion ? calificacion : { valor: "", idCalificacion: null };
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="calificaciones-container">
      <Navbar />
      <h1 className="title">Calificaciones del Estudiante</h1>
      {alertMessage && <div className="alert alert-danger">{alertMessage}</div>}

      <table className="table">
        <thead>
          <tr>
            <th>Mes</th>
            <th>Calificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {meses.map((mes) => {
            const calificacion = getCalificacion(mes);
            return (
              <tr key={mes}>
                <td>{mes}</td>
                <td>
                  <InputText
                    type="number"
                    inputMode="numeric"
                    value={calificacionesInputs[mes] || calificacion.valor || ""}
                    onChange={(event) => handleCalificacionChange(mes, event)}
                    placeholder={calificacion.valor ? "" : "Agrega una calificación"}
                    className="input-calificacion"
                  />
                </td>
                <td>
                  {calificacion.idCalificacion ? (
                    <>
                      <Button
                        icon={<FaEdit />}
                        className="p-button-rounded p-button-warning"
                        onClick={() => handleEditar(calificacion.idCalificacion, mes)}
                      >
                        Editar
                      </Button>
                      <Button
                        icon={<FaTrashAlt />}
                        className="p-button-rounded p-button-danger"
                        onClick={() => handleEliminar(calificacion.idCalificacion, mes)}
                      >
                        Eliminar
                      </Button>
                    </>
                  ) : (
                    <Button
                      icon={<FaPlusCircle />}
                      className="p-button-rounded p-button-success"
                      onClick={() => handleAgregar(mes, calificacionesInputs[mes] || "")}
                    >
                      Agregar
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CalificacionesCurso;
