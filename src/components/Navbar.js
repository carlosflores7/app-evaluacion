import React, { useContext } from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useContext(AuthContext);

  const isActive = (path) => location.pathname === path;

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => navigate("/main"),
      className: isActive("/main") ? "p-highlight" : "",
    },
    {
      label: "Panel Docente",
      icon: "pi pi-users",
      command: () => navigate("/teacher-dashboard"),
      className: isActive("/teacher-dashboard") ? "p-highlight" : "",
    },
  ];

  const end = (
    <Button
      icon="pi pi-sign-out"
      label="Salir"
      className="p-button-danger"
      onClick={() => {
        logout();
        navigate("/");
      }}
    />
  );

  return <Menubar model={items} end={end} />;
}

export default Navbar;
