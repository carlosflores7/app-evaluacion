import React, { useEffect, useState } from "react";
import { ListBox } from "primereact/listbox";
import api from "../../../services/api"; // Importa la instancia de Axios
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await api.get("/teachers"); // Llamada a la API
        setTeachers(response.data);
      } catch (error) {
        console.error("Error al obtener docentes:", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="p-col-4">
      <div className="card">
        <ListBox
          options={teachers}
          optionLabel="nombre"
          itemTemplate={(teacher) => (
            <div>
              <span>
                {teacher.nombre} {teacher.apellidoPaterno}{" "}
                {teacher.apellidoMaterno}
              </span>
            </div>
          )}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default TeacherList;
