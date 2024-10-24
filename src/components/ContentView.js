// ContentView.js
import React from "react";
import { useLocation } from "react-router-dom";
import MainContent from "./MainContent";
import StudentDashboardContent from "./Dashboard/StudentDashboard/StudentDashboardContent";
import TeacherDashboardContent from "./Dashboard/TeacherDashboard/TeacherDashboardContent";

function ContentView() {
  const location = useLocation(); // Detectar la ruta actual

  // Determinar qué componente cargar basándose en la ruta
  const renderContent = () => {
    switch (location.pathname) {
      case "/main":
        return <MainContent />;
      case "/student-dashboard":
        return <StudentDashboardContent />;
      case "/teacher-dashboard":
        return <TeacherDashboardContent />;
      default:
        return <p>No se ha encontrado la página solicitada.</p>;
    }
  };

  return (
    <div>
      {renderContent()} {/* Renderizar el contenido basado en la ruta */}
    </div>
  );
}

export default ContentView;
