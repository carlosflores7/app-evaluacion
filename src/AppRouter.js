import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "./components/Dashboard/StudentDashboard/StudentDashboard";
import MainPage from "./components/MainPage";
import Evaluation from "./components/Evaluation/Evaluation";
import Report from "./components/Report/Report";
import CreateEvaluation from "./components/Dashboard/TeacherDashboard/CreateEvaluation";
import ViewReports from "./components/Dashboard/TeacherDashboard/ViewReports";
import ViewFeedback from "./components/Dashboard/StudentDashboard/ViewFeedback";

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
          path="/teacher-dashboard/create-evaluation"
          element={
            <ProtectedRoute>
              <CreateEvaluation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher-dashboard/view-reports"
          element={
            <ProtectedRoute>
              <ViewReports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student-dashboard/view-feedback"
          element={
            <ProtectedRoute>
              <ViewFeedback />
            </ProtectedRoute>
          }
        />
        <Route
          path="/evaluations"
          element={
            <ProtectedRoute>
              <Evaluation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
