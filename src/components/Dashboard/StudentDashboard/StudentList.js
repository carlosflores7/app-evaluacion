import React from "react";
import { ListBox } from "primereact/listbox";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const students = [
  { id: 1, name: "Juan Pérez" },
  { id: 2, name: "Ana López" },
  { id: 3, name: "Carlos García" },
];

function StudentList() {
  return (
    <div className="p-col-4">
      <div className="card">
        <ListBox
          options={students}
          optionLabel="name"
          itemTemplate={(student) => (
            <div>
              <span>{student.name}</span>
            </div>
          )}
          style={{ width: "30%" }} //
        />
      </div>
    </div>
  );
}

export default StudentList;
