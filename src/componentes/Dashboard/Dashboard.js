import React from 'react';
import { FolderOutlined } from '@ant-design/icons';
import iconoLibreria from '../../imagenes/iconoLibreria.png';
import iconoPapelera from '../../imagenes/iconoPapelera.png';
import iconoCarpeta from "../../imagenes/iconoCarpeta.png";
import iconoPlayBlanco from "../../imagenes/iconoPlayBlanco.png";
import iconoLupa from "../../imagenes/iconoLupa.png";
import './style.css';

function Dashboard() {
    const renderTable = () => {
        return (
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
                    <tr>
                        <td></td>
                        <td><FolderOutlined />Texto Genérico</td>
                        <td>Texto Genérico</td>
                        <td>Texto Genérico</td>
                        <td>Texto Genérico</td>
                    </tr>
                </tbody>
            </table>
        );
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
                {renderTable()}
            </div>
        </div>
    )
}

export default Dashboard;
