import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "primereact/button";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Obtener la ruta actual

  // Función para verificar si un ítem es activo
  const isActive = (path) => location.pathname === path;

  // Opciones del menú
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => navigate("/main"),
      className: isActive("/main") ? "p-highlight" : "", // Aplicar clase activa de PrimeReact
    },
    {
      label: "Panel Docente",
      icon: "pi pi-users",
      command: () => navigate("/teacher-dashboard"),
      className: isActive("/teacher-dashboard") ? "p-highlight" : "",
    },
    {
      label: "Panel Estudiante",
      icon: "pi pi-user",
      command: () => navigate("/student-dashboard"),
      className: isActive("/student-dashboard") ? "p-highlight" : "",
    },
    {
      label: "Evaluaciones",
      icon: "pi pi-list",
      command: () => navigate("/evaluations"),
      className: isActive("/evaluations") ? "p-highlight" : "",
    },
    {
      label: "Reportes",
      icon: "pi pi-chart-bar",
      command: () => navigate("/reports"),
      className: isActive("/reports") ? "p-highlight" : "",
    },
    {
      label: "Perfil",
      icon: "pi pi-id-card",
      command: () => navigate("/profile"),
      className: isActive("/profile") ? "p-highlight" : "",
    },
  ];

  // Definir el botón de cerrar sesión
  const end = (
    <Button
      icon="pi pi-sign-out"
      label="Salir"
      className="p-button-danger"
      onClick={() => navigate("/")}
    />
  );

  return <Menubar model={items} end={end} />;
}

export default Navbar;
