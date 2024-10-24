// MainPage.js
import React from "react";
import Navbar from "./Navbar";
import ContentView from "./ContentView";
import "primeflex/primeflex.css";

function MainPage() {
  return (
    <div className="p-grid">
      <Navbar />
      <ContentView />
    </div>
  );
}

export default MainPage;
