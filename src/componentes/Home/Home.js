import React from "react";
import Menu from "../Menu/Menu";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <div className="menuIzquierda">
      <Menu />
      </div>
      <div className="contenido"></div>
    </div>
  );
}

export default Home;
