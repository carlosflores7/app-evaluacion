import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Importar AuthContext
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Tema de PrimeReact
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function MainContent() {
  // Obtener el usuario desde el AuthContext
  const { user } = useContext(AuthContext);

  return (
    <div className="p-grid p-justify-center p-align-center p-mt-4">
      <div className="p-col-12 p-md-8">
        {/* Mensaje de bienvenida */}
        <Card className="p-shadow-4 p-mb-3">
          {user ? (
            <h2 className="p-text-center">Bienvenido, {user.nombreCompleto} 👋</h2>
          ) : (
            <h2 className="p-text-center">Bienvenido a la Plataforma de Calificaciones</h2>
          )}
          <p className="p-text-center">
            Aquí puedes gestionar estudiantes, profesores y evaluaciones de manera fácil y organizada.
          </p>
        </Card>
      </div>

      {/* Sección de accesos rápidos */}
      <div className="p-col-12 p-md-8">
        <div className="p-grid p-justify-between">
          <div className="p-col-12 p-md-4">
            <Card title="Estudiantes" className="p-shadow-3">
              <p>Consulta y gestiona los registros de estudiantes.</p>
              <Button
                label="Ver Estudiantes"
                icon="pi pi-users"
                className="p-button-info p-button-sm"
              />
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card title="Profesores" className="p-shadow-3">
              <p>Gestiona información y asignaciones de profesores.</p>
              <Button
                label="Ver Profesores"
                icon="pi pi-briefcase"
                className="p-button-warning p-button-sm"
              />
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card title="Evaluaciones" className="p-shadow-3">
              <p>Consulta y administra evaluaciones y calificaciones.</p>
              <Button
                label="Ver Evaluaciones"
                icon="pi pi-file"
                className="p-button-success p-button-sm"
              />
            </Card>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="p-col-12 p-mt-4">
        <Card className="p-shadow-2">
          <p className="p-text-center">
            © 2024 Plataforma de Calificaciones | Desarrollado para una mejor gestión educativa.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default MainContent;
