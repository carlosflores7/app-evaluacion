import React from "react";
import Navbar from "../../Navbar";
import StudentDashboardContent from "./StudentDashboardContent";

function StudentDashboard() {
  return (
    <div className="p-grid">
      <Navbar />
      <StudentDashboardContent />
    </div>
  );
}

export default StudentDashboard;
