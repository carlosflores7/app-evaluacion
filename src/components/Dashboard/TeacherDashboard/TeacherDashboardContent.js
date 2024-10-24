// TeacherDashboardContent.js
import React from "react";
import Navbar from "../../Navbar";
import ContentView from "../../ContentView";
import "primeflex/primeflex.css";

function TeacherDashboardContent() {
  return (
    <div className="p-grid">
      <Navbar />
      <ContentView />
    </div>
  );
}

export default TeacherDashboardContent;
