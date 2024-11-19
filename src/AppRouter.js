import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard/TeacherDashboard";
import Opciones from "./components/Dashboard/TeacherDashboard/Opciones";
import CalificacionesCurso from "./components/Dashboard/TeacherDashboard/CalificacionesCurso";
import MainPage from "./components/MainPage";

import ProtectedRoute from "./components/ProtectedRoute";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher-dashboard"
          element={
            <ProtectedRoute>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/teacher-dashboard/opciones/:id" 
  element={

      <Opciones />
    
  }
/>
<Route
  path="/teacher-dashboard/calificaciones/PorCurso"
  element={<CalificacionesCurso />}
/>


      </Routes>
    </Router>
    
  );
}

export default AppRouter;
