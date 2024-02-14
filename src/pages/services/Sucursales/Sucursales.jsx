// En Sucursales.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../../../components/Sidebar/Sidebar.jsx";
import { Navbar } from "../../../components/Navbar/Navbar.jsx";
import { Sucursal } from "./Sucursal.jsx";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav.jsx";

export const Sucursales = () => {
  const BASE_URL = "https://bot.yappastore.com";
  const [sucursales, setSucursales] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSucursales();
  }, []);

  /* Peticion a la API de sucursales */
  const fetchSucursales = () => {
    axios
      .get(`${BASE_URL}/branches`)
      .then((response) => {
        setSucursales(response.data);
      })
      .catch((error) => {
        console.error("Error al realizar la operación GET:", error);
      });
  };

  /* Borra un elemento a la API de sucursales */
  const handleBorrar = (idSucursal) => {
    axios
      .delete(`${BASE_URL}/branches/${idSucursal}`)
      .then((response) => {
        fetchSucursales();
      })
      .catch((error) =>
        console.log("Error al borrar prompt: " + idSucursal, error)
      );
  };

  /* Funcion para navegar a la pestana para agregar sucursal */
  const handleAgregar = () => {
    navigate("/agregar-sucursal");
  };

  return (
    <>
      <BurguerNav />
      <div className="homeContainer flex items-stretch">
        <Sidebar />
        <div className="container p-5">
          <Navbar
            imagen={"../../../../img/Sucursales.svg"}
            displayButtonAtras={"hidden"}
            displayInput={"hidden"}
            funcionButton={"Agregar sucursal"}
            eventoFuncion={handleAgregar}
          />
          <div className="main-container pl-10 overflow-x-scroll">
            {sucursales && (
              <div className="grid grid-cols-1 lg:flex flex-col gap-4">
                <div className="hidden lg:block">
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Latitud</th>
                          <th>Longitud</th>
                          <th>Dirección</th>
                          <th>Teléfono</th>
                          <th>Gerente</th>
                          <th>Mapa</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sucursales.map((suc, key) => (
                          <Sucursal
                            key={key}
                            sucursal={suc}
                            funcionBorrar={handleBorrar}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="lg:hidden">
                  {sucursales.map((suc, key) => (
                    <Sucursal
                      key={key}
                      sucursal={suc}
                      funcionBorrar={handleBorrar}
                      isCompact={true}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
