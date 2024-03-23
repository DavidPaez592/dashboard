import React, { useState, useEffect } from 'react';
import { FolderOutlined, PlayCircleOutlined } from '@ant-design/icons';
import iconoLibreria from '../../imagenes/iconoLibreria.png';
import iconoPapelera from '../../imagenes/iconoPapelera.png';
import iconoCarpeta from "../../imagenes/iconoCarpeta.png";
import iconoPlayBlanco from "../../imagenes/iconoPlayBlanco.png";
import iconoLupa from "../../imagenes/iconoLupa.png";
import iconoRegreso from "../../imagenes/iconoRegreso.png";
import './style.css';

function Dashboard({ textoUltimaModificacionVideos, textoUltimaModificacionTamaño, nombres, tamaños, duracion }) {
    const [selectedRows, setSelectedRows] = useState([]);
    const [showLibraryButton, setShowLibraryButton] = useState(true);
    const [showTrashButton, setShowTrashButton] = useState(true);
    const [showHomeButton, setShowHomeButton] = useState(false);

    const handleHomeClick = () => {
        window.location.href = '/';
    };

    useEffect(() => {
        if (textoUltimaModificacionVideos === "Videos") {
            setShowLibraryButton(true);
            setShowTrashButton(true);
            setShowHomeButton(false);
        } else {
            setShowLibraryButton(false);
            setShowTrashButton(false);
            setShowHomeButton(true);
        }
    }, [textoUltimaModificacionVideos]);

    const handleRowClick = (index) => {
        const selectedIndex = selectedRows.indexOf(index);
        let newSelectedRows = [];

        if (selectedIndex === -1) {
            newSelectedRows = newSelectedRows.concat(selectedRows, index);
        } else if (selectedIndex === 0) {
            newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
        } else if (selectedIndex === selectedRows.length - 1) {
            newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedRows = newSelectedRows.concat(
                selectedRows.slice(0, selectedIndex),
                selectedRows.slice(selectedIndex + 1)
            );
        }

        setSelectedRows(newSelectedRows);
    };

    const renderTableRow = (index) => {
        const isSelected = selectedRows.indexOf(index) !== -1;
        const ultimasModificaciones = [
            "30/may/2023",
            "22/jun/2022",
            "11/sep/2021",
            "21/jun/2023",
            "5/abr/2023",
            "30/may/2023",
            "22/jun/2022",
            "11/sep/2021",
            "21/jun/2023",
            "5/abr/2023"
        ];

        return (
            <tr
                key={index}
                onClick={() => handleRowClick(index)}
                className={isSelected ? 'selected' : ''}
            >
                <td>
                    <input type="checkbox" checked={isSelected} onChange={() => { }} />
                </td>
                <td className="expandirNombre">
                    {textoUltimaModificacionVideos === "Videos" ? <FolderOutlined /> : <PlayCircleOutlined />}
                    {nombres[index]}
                </td>

                <td className="alinearCentro">{tamaños[index]}</td>
                <td className="alinearCentro">{duracion[index]}</td>
                <td className="alinearCentro">{ultimasModificaciones[index]}</td>
            </tr>
        );
    };

    const renderTableRows = () => {
        const rows = [];
        for (let i = 0; i < 10; i++) {
            rows.push(renderTableRow(i));
        }
        return rows;
    };

    return (
        <div className='divBorde'>
            <div className='superior'>
                <div className='leftItems'>
                    {showLibraryButton && (
                        <button className="buttonDashboardLeft">
                            <img src={iconoLibreria} style={{ color: "#4800fe" }} alt="Biblioteca" />
                            <span style={{ color: "#4800fe", fontWeight: "bold" }}>Biblioteca</span>
                            <div className="lineaDebajo"></div>
                        </button>
                    )}
                    {showTrashButton && (
                        <button className="buttonDashboardLeft">
                            <img src={iconoPapelera} alt="Papelera<" />
                            <span>Papelera</span>
                        </button>
                    )}
                    {showHomeButton && (
                        <button className="buttonDashboardLeft" onClick={handleHomeClick}>
                            <img src={iconoRegreso} style={{
                                color: "#4800fe",
                                width: "45px",
                                height: "40px"
                            }} alt="Biblioteca" />
                            <span style={{
                                color: "black",
                                fontSize: "20px"
                            }}>Home /</span> <span style={{
                                fontWeight: "bold",
                                color: "black",
                                fontSize: "20px"
                            }}>BeMaster</span>
                        </button>
                    )}
                </div>
                <div className='rightItems'>
                    {textoUltimaModificacionVideos !== "Tamaño" && (
                        <button className="buttonDashboardRight">
                            <img src={iconoCarpeta} alt="Nueva carpeta<" className='imagenesDashboardTop' />
                            <span>Nueva carpeta</span>
                        </button>
                    )}
                    {textoUltimaModificacionVideos !== "Tamaño" && (
                        <button className="buttonDashboardRight" style={{ backgroundColor: "#4800fe" }}>
                            <img src={iconoPlayBlanco} alt="Nuevo video" className='imagenesDashboardTop' />
                            <span style={{ color: "white" }}>Nuevo video</span>
                        </button>
                    )}
                </div>

            </div>
            <div className='busqueda'>
                <div className="searchBar">
                    <img src={iconoLupa} alt="Icono de búsqueda" className="searchIcon" />
                    <span className="separator">|</span>
                    <input type="text" placeholder="Buscar Video" className="searchInput" />
                </div>
            </div> 
            <div className='contenidoDashboard'>
                <table className="dashboardTable">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th className="expandirNombre">Nombre</th>
                            <th className="alinearDerecha">{textoUltimaModificacionVideos}</th>
                            <th className="alinearDerecha">{textoUltimaModificacionTamaño}</th>
                            <th className="alinearDerecha">Última modificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
                <hr style={{ width: '100%', borderTop: '1px solid #ccc', marginTop: "10%" }} />
            </div>
        </div>
    );
}

export default Dashboard;
