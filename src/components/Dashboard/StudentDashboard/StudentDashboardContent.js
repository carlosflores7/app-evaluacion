import React from "react";
import { Card } from "primereact/card";

function StudentDashboardContent() {
  return (
    <>
      <h1>Student Dashboard Content</h1>
      <div className="p-grid p-dir-row">
        {/* Columna 1: Card para la lista de estudiantes */}
        <div className="p-col-4">
          <Card title="Lista de Estudiantes" className="p-shadow-3"></Card>
        </div>

        {/* Columna 2: Card para la lista de profesores */}
        <div className="p-col-4">
          <Card title="Lista de Profesores" className="p-shadow-3"></Card>
        </div>

        {/* Columna 3: Card para la lista de evaluaciones */}
        <div className="p-col-4">
          <Card title="Lista de Evaluaciones" className="p-shadow-3"></Card>
        </div>
      </div>
    </>
  );
}

export default StudentDashboardContent;
