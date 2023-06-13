import React from "react";

// Component
import Navbar from "../components/Navbar";

// css
import "./css/Homepage.css";

function Homepage() {
  return (
    <div className="home_1">
      <Navbar />
      <div>
        <img alt="Foto test" className="background_1" />
      </div>
    </div>
  );
}

export default Homepage;
