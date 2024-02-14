import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Sidebar } from "../../../components/Sidebar/Sidebar.jsx";
import { Navbar } from "../../../components/Navbar/Navbar.jsx";
import { Modal } from "../../../components/Modales/Modal.jsx";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav.jsx";

export const AgregarSucursal = () => {
  const BASE_URL = "https://bot.yappastore.com";
  const navigate = useNavigate();
  const [anyInputChanges, setAnyInputChanges] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  /* Funcion para guardar la informacion de una modal */
  const [modalObjetos, setModalObjetos] = useState({
    icono: null,
    texto: null,
  });

  /* Funcion para guardar la informacion de una sucursal */
  const [sucursal, setSucursal] = useState({
    nombre: null,
    latitud: null,
    longitud: null,
    direccion: null,
    telefono: null,
    foto: "default",
    comentarios: ["default"],
  });

  /* Funcion para guardar la informacion de una sucursal exitosa*/
  const modalExitosa = {
    icono: "../../../img/Modal_icono_ok.svg",
    texto: "Sucursal creada con éxito",
  };

  /* Funcion para guardar la informacion de una modal error */
  const modalError = {
    icono: "../../../img/Modal_icono_warning.svg",
    texto: "Error al crear la sucursal",
  };

  /* Funcion para navegar a sucursales */
  const handleReturn = () => {
    navigate("/sucursales");
  };

  /* Funcion para guardar la informacion de una modal */
  const abrirModal = (objetos) => {
    setModalObjetos({
      ...objetos,
    });
    setModalOpen(true);
  };

  /* Funcion para cerrar modal */
  const cerrarModal = () => {
    setModalOpen(false);
  };

  /* Funcion para guardar la informacion dque ingresa el usuario en el input */
  const handleChange = (e) => {
    setSucursal({
      ...sucursal,
      [e.target.name]: e.target.value,
    });
    setAnyInputChanges(true);
  };

  /* Funcion para enviar la informacion de la nueva sucursal a la API */
  const handleGuardarSucursal = () => {
    if (!anyInputChanges) {
      let obj = {
        icono: "../../../img/Modal_icono_warning.svg",
        texto: "Los campos no han sido modificados",
      };
      abrirModal(obj);
    } else if (
      sucursal.nombre != null &&
      sucursal.latitud != null &&
      sucursal.longitud != null &&
      sucursal.direccion != null &&
      sucursal.telefono != null &&
      sucursal.comentarios != null
    ) {
      axios
        .post(`${BASE_URL}/branches`, sucursal)
        .then((response) => {
          abrirModal(modalExitosa);
        })
        .catch((error) => {
          abrirModal(modalError);
        });
    } else {
      let obj = {
        icono: "../../../img/Modal_icono_warning.svg",
        texto: "Los campos deben estar completos",
      };
      abrirModal(obj);
    }
  };

  return (
    <>
      <BurguerNav />
      <div className="homeContainer flex items-stretch">
        <Modal
          handleBotonModal={handleReturn}
          handleCerrar={cerrarModal}
          iconoModal={modalObjetos.icono}
          textoModal={modalObjetos.texto}
          textoBoton={"Ver todas las sucursales"}
          isOpen={modalOpen}
        />
        <Sidebar />
        <div className="container p-5">
          <Navbar
            imagen={"../../../../img/Sucursales.svg"}
            displayButton={"hidden"}
            displayInput={"hidden"}
            funcionButtonAtras={handleReturn}
          />
          <div className="pt-10 pl-20 bg-gris-claro p-4 max-md:flex max-md:flex-col max-md:justify-center max-md:pl-0 max-md:items-center max-md:pt-0 max-md:p-3 ">
            <img
              src="../../../../img/Agregar Sucursal.svg"
              className="h-5 max-md:mt-5"
            />
            <div className="grid grid-cols-2 max-md:grid-cols-1">
              <div className="columna-izq">
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Nombre</b>
                  </p>
                  <input
                    name="nombre"
                    tabIndex="1"
                    onChange={handleChange}
                    className="pl-1 w-56"
                    placeholder="Sucursal Uno"
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Longitud</b>
                  </p>
                  <input
                    name="longitud"
                    type="number"
                    tabIndex="3"
                    onChange={handleChange}
                    className="pl-1 w-56"
                    placeholder="99.9999"
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Teléfono</b>
                  </p>
                  <input
                    name="telefono"
                    type="tel"
                    tabIndex="5"
                    onChange={handleChange}
                    className="pl-1 w-56"
                    placeholder="+99 9 9999-999999"
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Mapa</b>
                  </p>
                  <input name="mapa" tabIndex="7" className="pl-1 w-56"></input>
                </div>
              </div>
              <div className="columna-der">
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Latitud</b>
                  </p>
                  <input
                    name="latitud"
                    type="number"
                    tabIndex="2"
                    onChange={handleChange}
                    className="pl-1 w-56"
                    placeholder="99.9999"
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Dirección</b>
                  </p>
                  <input
                    name="direccion"
                    tabIndex="4"
                    onChange={handleChange}
                    className="pl-1 w-56"
                    placeholder="Avenida Siempreviva 742"
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Gerente</b>
                  </p>
                  <input
                    name="gerente"
                    tabIndex="6"
                    className="pl-1 w-56"
                    placeholder="Juan Pérez"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-52 p-14 flex justify-end items-center max-md:h-20">
            <button
              onClick={() => handleGuardarSucursal()}
              className="boton-large boton-primario"
            >
              Guardar Sucursal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
