import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

function TeacherDashboardContent() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  const [teacher, setTeacher] = useState({
    idDocente: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    carrera: "",
  });
  const [displayDialog, setDisplayDialog] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Obtener docentes de la API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await api.get("/teachers");
        setTeachers(response.data);
      } catch (error) {
        console.error("Error al obtener los docentes", error);
      }
    };
    fetchTeachers();
  }, []);

  // Abrir el diálogo para agregar o editar un docente
  const openDialog = (selectedTeacher) => {
    if (selectedTeacher) {
      setTeacher(selectedTeacher); // Editar
      setIsEdit(true);
    } else {
      setTeacher({
        idDocente: "",
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        carrera: "",
      }); // Nuevo
      setIsEdit(false);
    }
    setDisplayDialog(true);
  };

  // Guardar un docente (agregar o editar)
  const saveTeacher = async () => {
    try {
      if (isEdit) {
        // Actualizar docente
        await api.put(`/teachers/${teacher.idDocente}`, teacher);
        setTeachers((prevTeachers) =>
          prevTeachers.map((t) =>
            t.idDocente === teacher.idDocente ? teacher : t
          )
        );
      } else {
        // Agregar nuevo docente
        const response = await api.post("/teachers", teacher);
        setTeachers((prevTeachers) => [...prevTeachers, response.data]);
      }
      setDisplayDialog(false);
    } catch (error) {
      console.error("Error al guardar el docente", error);
    }
  };

  // Eliminar un docente
  const deleteTeacher = async (idDocente) => {
    try {
      await api.delete(`/teachers/${idDocente}`);
      setTeachers((prevTeachers) =>
        prevTeachers.filter((t) => t.idDocente !== idDocente)
      );
    } catch (error) {
      console.error("Error al eliminar el docente", error);
    }
  };

  return (
    <div>
      <Card title="Panel del Docente">
        {/* Botón para agregar nuevo docente */}
        <Button
          label="Agregar Docente"
          className="p-button-success p-mt-3"
          onClick={() => openDialog(null)}
        />
        {/* Botones de Evaluaciones y Reportes */}
        <Button
          label="Crear Evaluación"
          onClick={() => navigate("/teacher-dashboard/create-evaluation")}
          className="p-button-warning p-mt-3"
        />
        <Button
          label="Ver Reportes"
          onClick={() => navigate("/teacher-dashboard/view-reports")}
          className="p-button-secondary p-mt-3"
        />

        {/* Tabla de docentes */}
        <DataTable
          value={teachers}
          paginator
          rows={5}
          className="p-datatable-sm"
        >
          <Column field="nombre" header="Nombre" />
          <Column field="apellidoPaterno" header="Apellido Paterno" />
          <Column field="apellidoMaterno" header="Apellido Materno" />
          <Column field="carrera" header="Carrera" />
          <Column
            header="Acciones"
            body={(rowData) => (
              <div>
                <Button
                  label="Editar"
                  className="p-button-rounded p-button-info p-mr-2"
                  onClick={() => openDialog(rowData)}
                />
                <Button
                  label="Eliminar"
                  className="p-button-rounded p-button-danger"
                  onClick={() => deleteTeacher(rowData.idDocente)}
                />
              </div>
            )}
          />
        </DataTable>

        {/* Diálogo para agregar/editar docente */}
        <Dialog
          header={isEdit ? "Editar Docente" : "Agregar Docente"}
          visible={displayDialog}
          style={{ width: "400px" }}
          footer={
            <>
              <Button
                label="Cancelar"
                icon="pi pi-times"
                onClick={() => setDisplayDialog(false)}
                className="p-button-text"
              />
              <Button
                label="Guardar"
                icon="pi pi-check"
                onClick={saveTeacher}
              />
            </>
          }
          onHide={() => setDisplayDialog(false)}
        >
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="nombre">Nombre</label>
              <InputText
                id="nombre"
                value={teacher.nombre}
                onChange={(e) =>
                  setTeacher({ ...teacher, nombre: e.target.value })
                }
              />
            </div>
            <div className="p-field">
              <label htmlFor="apellidoPaterno">Apellido Paterno</label>
              <InputText
                id="apellidoPaterno"
                value={teacher.apellidoPaterno}
                onChange={(e) =>
                  setTeacher({ ...teacher, apellidoPaterno: e.target.value })
                }
              />
            </div>
            <div className="p-field">
              <label htmlFor="apellidoMaterno">Apellido Materno</label>
              <InputText
                id="apellidoMaterno"
                value={teacher.apellidoMaterno}
                onChange={(e) =>
                  setTeacher({ ...teacher, apellidoMaterno: e.target.value })
                }
              />
            </div>
            <div className="p-field">
              <label htmlFor="carrera">Carrera</label>
              <InputText
                id="carrera"
                value={teacher.carrera}
                onChange={(e) =>
                  setTeacher({ ...teacher, carrera: e.target.value })
                }
              />
            </div>
          </div>
        </Dialog>
      </Card>
    </div>
  );
}

export default TeacherDashboardContent;
