import React, { useState } from "react";
import Menu from "../Menu/Menu";
import Dashboard from "../Dashboard/Dashboard";
import "./style.css";

function Home() {

    const [textoUltimaModificacionVideos, setTextoUltimaModificacionVideos] = useState("Videos");
    const [textoUltimaModificacionTamaño, setTextoUltimaModificacionTamaño] = useState("Tamaño");
    const [nombres, setNombres] = useState([
        "Afiliado Master",
        "BeMaster",
        "Comizzión",
        "Creador de Contenido",
        "Exportados Wil",
        "Afiliado Master",
        "BeMaster",
        "Comizzión",
        "Creador de Contenido",
        "Exportados Wil"
    ]);
    const [tamaños, setTamaños] = useState([8, 21, 10, 2, 14, 6, 30, 2, 8, 14]);
    const [duracion, setDuración] = useState([
        "7.3 GB",
        "1.4 GB",
        "284 MB",
        "4.3 GB",
        "500 MB",
        "7.3 GB",
        "1.4 GB",
        "284 MB",
        "4.3 GB",
        "500 MB"
    ]);

    const handleVideosClick = () => {
        setTextoUltimaModificacionVideos("Tamaño");
        setTextoUltimaModificacionTamaño("Duración");
        setNombres([
            "Entrenamiento.mp4",
            "Salida-al-mercado-versión nueva.mp4",
            "Como-cerrar-una-venta.mp4",
            "Crea-un-ticket-valioso.mp4",
            "Conquista-el-mercado-digital.mp4",
            "Entrenamiento.mp4",
            "Salida-al-mercado-versión nueva.mp4",
            "Como-cerrar-una-venta.mp4",
            "Crea-un-ticket-valioso.mp4",
            "Conquista-el-mercado-digital.mp4",
        ]);

        // Actualizar el estado de la matriz tamaños
        setTamaños([
            "7.3 GB", "1.4 GB", "284 MB", "4.3 GB", "500 MB",
            "7.3 GB", "1.4 GB", "284 MB", "4.3 GB", "500 MB"
        ]);
        setDuración([
            "04:11:37", " 47:55", " 10:12", "03:50:22", "5:00",
            "04:11:37", " 47:55", "10:12", "03:50:22", "5:00"
        ]);
    };


    return (
        <div className="container">
            <div className="menuIzquierda">
                <Menu onVideosClick={handleVideosClick} />
            </div>
            <div className="contenido">
                <Dashboard
                    textoUltimaModificacionVideos={textoUltimaModificacionVideos}
                    textoUltimaModificacionTamaño={textoUltimaModificacionTamaño}
                    nombres={nombres}
                    tamaños={tamaños}
                    duracion={duracion}
                />
            </div>
        </div>
    );
}

export default Home;
