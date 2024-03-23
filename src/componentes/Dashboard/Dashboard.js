import React, { useState } from 'react';
import { FolderOutlined } from '@ant-design/icons';
import iconoLibreria from '../../imagenes/iconoLibreria.png';
import iconoPapelera from '../../imagenes/iconoPapelera.png';
import iconoCarpeta from "../../imagenes/iconoCarpeta.png";
import iconoPlayBlanco from "../../imagenes/iconoPlayBlanco.png";
import iconoLupa from "../../imagenes/iconoLupa.png";
import './style.css';

function Dashboard() {
    const [selectedRows, setSelectedRows] = useState([]);

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

        // Define los datos para cada fila
        const nombres = [
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
        ];

        const videos = [8, 21, 10, 2, 14, 6, 30, 2, 8, 14];

        const tamanos = [
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
        ];

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

        // Crea la fila con los datos correspondientes al índice proporcionado
        return (
            <tr
                key={index}
                onClick={() => handleRowClick(index)}
                className={isSelected ? 'selected' : ''}
            >
                <td>
                    <input type="checkbox" checked={isSelected} onChange={() => { }} />
                </td>
                <td className="expandirNombre"><FolderOutlined />{nombres[index]}</td>
                <td className="alinearCentro">{videos[index]}</td>
                <td className="alinearCentro">{tamanos[index]}</td>
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
                    <button className="buttonDashboardLeft">
                        <img src={iconoLibreria} style={{ color: "#4800fe" }} alt="Biblioteca" />
                        <span style={{ color: "#4800fe", fontWeight: "bold" }}>Biblioteca</span>
                        <div className="lineaDebajo"></div>
                    </button>
                    <button className="buttonDashboardLeft">
                        <img src={iconoPapelera} alt="Papelera<" />
                        <span>Papelera</span>
                    </button>
                </div>
                <div className='rightItems'>
                    <button className="buttonDashboardRight">
                        <img src={iconoCarpeta} alt="Nueva carpeta<" className='imagenesDashboardTop' />
                        <span>Nueva carpeta</span>
                    </button>
                    <button className="buttonDashboardRight" style={{ backgroundColor: "#4800fe" }}>
                        <img src={iconoPlayBlanco} alt="Nuevo video" className='imagenesDashboardTop' />
                        <span style={{ color: "white" }}>Nuevo video</span>
                    </button>
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
                            <th className="alinearDerecha">Videos</th>
                            <th className="alinearDerecha">Tamaño</th>
                            <th className="alinearDerecha">Última modificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
