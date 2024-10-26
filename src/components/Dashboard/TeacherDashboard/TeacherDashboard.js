import React from "react";
import Navbar from "../../Navbar";
import TeacherDashboardContent from "../TeacherDashboard/TeacherDashboardContent";

function TeacherDashboard() {
  return (
    <div className="p-grid">
      <Navbar />
      <TeacherDashboardContent />
    </div>
  );
}

export default TeacherDashboard;
