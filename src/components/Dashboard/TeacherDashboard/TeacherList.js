import React from "react";
import { ListBox } from "primereact/listbox";
import "primereact/resources/themes/saga-blue/theme.css"; // Tema de PrimeReact
import "primereact/resources/primereact.min.css"; // Estilos principales de PrimeReact
import "primeicons/primeicons.css"; // Íconos de PrimeReact

const teachers = [
  { id: 1, name: "Profesor Martínez" },
  { id: 2, name: "Profesora Sánchez" },
  { id: 3, name: "Profesor Díaz" },
];

function TeacherList() {
  return (
    <div className="p-col-4">
      <div className="card">
        <ListBox
          options={teachers}
          optionLabel="name"
          itemTemplate={(teacher) => (
            <div>
              <span>{teacher.name}</span>
            </div>
          )}
          style={{ width: "30%" }} //
        />
      </div>
    </div>
  );
}

export default TeacherList;
