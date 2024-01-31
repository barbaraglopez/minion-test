import "./Sucursal.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../../../components/Sidebar/Sidebar.jsx";
import { Navbar } from "../../../components/Navbar/Navbar.jsx";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { Modal } from "../../../components/Modales/Modal.jsx";
import axios from "axios";

export const EditarSucursal = () => {
  const BASE_URL = "https://bot.yappastore.com";
  const navigate = useNavigate();
  const { state } = useLocation();
  const [anyInputChanges, setAnyInputChanges] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalObjetos, setModalObjetos] = useState({
    icono: null,
    texto: null,
  });

  /* Funcion para guradar la informacion de sucursal */
  const [sucursal, setSucursal] = useState({
    id: state.sucursal._id,
    nombre: state.sucursal.nombre,
    longitud: state.sucursal.longitud,
    latitud: state.sucursal.latitud,
    direccion: state.sucursal.direccion,
    telefono: state.sucursal.telefono,
    foto: state.sucursal.foto,
    comentarios: state.sucursal.comentarios,
  });

  /* Funcion para gurdar los datos de una modal exitosa */
  const modalExitosa = {
    icono: "../../../img/Modal_icono_ok.svg",
    texto: "Cambios guardads con éxito",
  };

  /* Funcion para gurdar los datos de una modal de error */
  const modalError = {
    icono: "../../../img/Modal_icono_warning.svg",
    texto: "Error al editar la sucursal",
  };

  /* Funcion para navegar a sucursales */
  const handleReturn = () => {
    navigate("/sucursales");
  };

  /* Funcion para guardar una modal */
  const abrirModal = (objetos) => {
    setModalObjetos({
      ...objetos,
    });
    setModalOpen(true);
  };

  /* Funcion para cerrar una modal */
  const cerrarModal = () => {
    setModalOpen(false);
  };

  /* Funcion para editar una sucursal */
  const handleEditarSucursal = () => {
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
        .patch(`${BASE_URL}/branches/${sucursal.id}`, sucursal)
        .then((response) => {
          abrirModal(modalExitosa);
        })
        .catch((error) => {
          abrirModal(modalError);
        });
    } else {
      let obj = {
        icono: "../../../img/Modal_icono_warning.svg",
        texto: "Los campos no han sido modificados",
      };
      abrirModal(obj);
    }
  };

  /* Funcion para manejar la informacion que ingresa el usuario */
  const handleChange = (e) => {
    setSucursal({
      ...sucursal,
      [e.target.name]: e.target.value,
    });
    setAnyInputChanges(true);
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
          <div className="main-container pt-10 pl-20 max-md:pl-10 max-md:flex max-md:flex-col max-md:items-center bg-slate-100 p-10 rounded-lg">
            <h2 className="text-3xl">Editar Sucursal</h2>
            <div className="grid grid-cols-2 max-md:flex max-md:flex-col max-md:items-center max-md:w-full">
              <div className="columna-izq">
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Nombre</b>
                  </p>
                  <input
                    name="nombre"
                    onChange={handleChange}
                    className="w-56"
                    placeholder={sucursal.nombre}
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Longitud</b>
                  </p>
                  <input
                    name="longitud"
                    onChange={handleChange}
                    className="w-56"
                    placeholder={sucursal.longitud}
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Teléfono</b>
                  </p>
                  <input
                    name="telefono"
                    onChange={handleChange}
                    className="w-56"
                    placeholder={sucursal.telefono}
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Mapa</b>
                  </p>
                  <input
                    name="mapa"
                    onChange={handleChange}
                    className="w-56"
                  ></input>
                </div>
              </div>
              <div className="columna-der">
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Latitud</b>
                  </p>
                  <input
                    name="latitud"
                    onChange={handleChange}
                    className="w-56"
                    placeholder={sucursal.latitud}
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Dirección</b>
                  </p>
                  <input
                    name="direccion"
                    onChange={handleChange}
                    className="w-56"
                    placeholder={sucursal.direccion}
                  ></input>
                </div>
                <div className="campo mt-10 w-60">
                  <p>
                    <b>Gerente</b>
                  </p>
                  <input
                    name="gerente"
                    onChange={handleChange}
                    className="w-56"
                    placeholder={sucursal.gerente}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-52 p-14 flex justify-end items-center">
            <button
              onClick={() => handleEditarSucursal()}
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
