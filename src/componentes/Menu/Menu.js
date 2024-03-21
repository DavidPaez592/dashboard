import React from "react";
import iconoPlay from "../../imagenes/iconoPlay.png";
import iconoDashboard from "../../imagenes/iconoDashboard.png";
import iconoCarpeta from "../../imagenes/iconoCarpeta.png";
import iconoPlayMenu from "../../imagenes/iconoPlayMenu.png";
import iconoAnalytics from "../../imagenes/iconoAnalytics.png";
import iconoConfig from "../../imagenes/iconoConfig.png";
import "./style.css";

function Menu() {
    return (
        <div className="left-box">
            <div className="icon">
                <img src={iconoPlay} alt="Icono Play" />
            </div>
            <ol>
                <li>
                    <button className="button">
                        <img src={iconoDashboard} alt="Dashboard" />
                        <span style={{ fontWeight: "bold" }}>Dashboard</span>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <img src={iconoCarpeta} alt="Videos" />
                        <span>Videos</span>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <img src={iconoPlayMenu} alt="Player" />
                        <span>Player</span>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <img src={iconoAnalytics} alt="Analytics" />
                        <span>Analytics</span>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <img src={iconoConfig} alt="Configuraciones" />
                        <span>Configuraciones</span>
                    </button>
                </li>
            </ol>
            <div className="bottom-div">
                <h1>Mi Plan - Plus</h1>
                <h4> El uso se renueva el: 3-may-23</h4>
                <br />
                <div className="almacenamiento">
                    <span className="textoAlmacenamiento">Almacenamiento</span>
                    <span className="gb">23.5 GB / 1 TB</span>
                </div>
                <div className="progress-bar">
                    <div className="progressAlmacenamiento"></div>
                </div>
                <br />
                <div className="banda-mensual">
                    <span className="textoBanda">Banda Mensual</span>
                    <span className="gbBanda">3.4 TB / 5 TBB</span>
                </div>
                <div className="progress-bar">
                    <div className="progressBanda"></div>
                </div>
                <br />
                <button className="administrar-plan-button">Administrar Plan</button>
            </div>
        </div>
    );
}

export default Menu;
