import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Sidebar } from "../../../components/Sidebar/Sidebar.jsx";
import { Navbar } from "../../../components/Navbar/Navbar.jsx";
import { Sucursal } from "./Sucursal.jsx";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav.jsx";
import axios from 'axios';

export const Sucursales = () => {
    const BASE_URL = "https://bot.yappastore.com";
    const [sucursales, setSucursales] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSucursales();
    }, []);

    const fetchSucursales = () =>{
      axios.get(`${BASE_URL}/branches`)
        .then(response => {
          setSucursales(response.data);
        })
        .catch(error => {
          console.error('Error al realizar la operación GET:', error);
        });
    }

   const handleAgregar = () => {
      navigate("/agregar-sucursal")
   }

  const handleBorrar = (idSucursal) =>{
    axios.delete(`${BASE_URL}/branches/${idSucursal}`)
      .then(response => {
        fetchSucursales()
      })
      .catch(error => console.log('Error al borrar prompt: ' + idSucursal, error))
  }

    return (
      <>
        <BurguerNav />
        <div className="homeContainer flex items-stretch">
          <Sidebar />
          <div className="coontainer p-5">
            <Navbar
              imagen={"../../../../img/Sucursales.svg"}
              displayButtonAtras={"hidden"}
              displayInput={"hidden"}
              funcionButton={"Agregar sucursal"}
              eventoFuncion={handleAgregar}
            />
            <div className="main-container pl-10">
              <div className="my-cols column-titles grid grid-cols-8 mb-8">
                <div className="column-nom w-40 max-xl:w-20">
                  <b>Nombre</b>
                </div>
                <div className="column-lat w-40 max-xl:w-20">
                  <b>Latitud</b>
                </div>
                <div className="column-lon w-40 max-xl:w-20">
                  <b>Longitud</b>
                </div>
                <div className="column-dir w-32 max-xl:w-20">
                  <b>Dirección</b>
                </div>
                <div className="column-tel w-32 max-xl:w-20">
                  <b>Teléfono</b>
                </div>
                <div className="column-ger w-40 max-xl:w-20">
                  <b>Gerente</b>
                </div>
                <div className="column-map w-48 max-xl:w-20">
                  <b>Mapa</b>
                </div>
                <div className="column-acc w-48max-xl:w-20 ">
                  <b>Acciones</b>
                </div>
              </div>
              <div className="column-elements">
                {sucursales && sucursales.map((suc, key) => (
                    <Sucursal key={key} sucursal={suc} funcionBorrar={handleBorrar} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

