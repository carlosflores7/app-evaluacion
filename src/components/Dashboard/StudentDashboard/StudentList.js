import React, { useEffect, useState } from "react";
import { ListBox } from "primereact/listbox";
import api from "../../../services/api"; // Importar la instancia de Axios para llamadas a la API
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Función para obtener estudiantes desde la API
    const fetchStudents = async () => {
      try {
        const response = await api.get("/students"); // Llamada a la API
        setStudents(response.data); // Guardar los estudiantes en el estado
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-col-4">
      <div className="card">
        <ListBox
          options={students}
          optionLabel="nombre" // Campo a mostrar en la lista
          itemTemplate={(student) => (
            <div>
              <span>
                {student.nombre} {student.apellidoPaterno}{" "}
                {student.apellidoMaterno}
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
