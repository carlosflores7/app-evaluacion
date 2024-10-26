// MainPage.js
import React from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import "primeflex/primeflex.css";

function MainPage() {
  return (
    <div className="p-grid">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default MainPage;
