// ContentView.js
import React from "react";
import { useLocation } from "react-router-dom";
import MainContent from "./MainContent";
import StudentDashboard from "./Dashboard/StudentDashboard/StudentDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard/TeacherDashboard";

function ContentView() {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/main":
        return <MainContent />;
      case "/student-dashboard":
        return <StudentDashboard />;
      case "/teacher-dashboard":
        return <TeacherDashboard />;
      default:
        return <p>No se ha encontrado la página solicitada.</p>;
    }
  };

  return <div>{renderContent()}</div>;
}

export default ContentView;
