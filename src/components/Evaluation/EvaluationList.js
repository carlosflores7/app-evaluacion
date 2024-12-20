import React from "react";
import { ListBox } from "primereact/listbox";
import "primereact/resources/themes/saga-blue/theme.css"; // Tema de PrimeReact
import "primereact/resources/primereact.min.css"; // Estilos principales de PrimeReact
import "primeicons/primeicons.css"; // Íconos de PrimeReact

const evaluations = [
  { id: 1, name: "Evaluación Matemáticas" },
  { id: 2, name: "Evaluación Historia" },
  { id: 3, name: "Evaluación Física" },
];

function EvaluationList() {
  return (
    <div className="p-col-4">
      <div className="card">
        <ListBox
          options={evaluations}
          optionLabel="name"
          itemTemplate={(evaluation) => (
            <div>
              <span>{evaluation.name}</span>
            </div>
          )}
          style={{ width: "30%" }} // Ajusta al 100% del contenedor
        />
      </div>
    </div>
  );
}

export default EvaluationList;
