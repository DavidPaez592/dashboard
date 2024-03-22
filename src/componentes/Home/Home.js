import React from "react";
import Menu from "../Menu/Menu";
import Dashboard from "../Dashboard/Dashboard";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <div className="menuIzquierda">
      <Menu />
      </div>
      <div className="contenido">
      <Dashboard />
      </div>
    </div>
  );
}

export default Home;
