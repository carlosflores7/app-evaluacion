// MainContent.js
import React from "react";
import { Card } from "primereact/card"; // Importamos el componente Card de PrimeReact
import StudentList from "./Dashboard/StudentDashboard/StudentList";
import TeacherList from "./Dashboard/TeacherDashboard/TeacherList";
import EvaluationList from "./Evaluation/EvaluationList";
import "primeflex/primeflex.css"; // Asegúrate de importar PrimeFlex para la disposición responsiva

function MainContent() {
  return (
    <div className="p-grid p-dir-row">
      {/* Columna 1: Card para la lista de estudiantes */}
      <div className="p-col-4">
        <Card title="Lista de Estudiantes" className="p-shadow-3">
          <StudentList />
        </Card>
      </div>

      {/* Columna 2: Card para la lista de profesores */}
      <div className="p-col-4">
        <Card title="Lista de Profesores" className="p-shadow-3">
          <TeacherList />
        </Card>
      </div>

      {/* Columna 3: Card para la lista de evaluaciones */}
      <div className="p-col-4">
        <Card title="Lista de Evaluaciones" className="p-shadow-3">
          <EvaluationList />
        </Card>
      </div>
    </div>
  );
}

export default MainContent;
