import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../../../components/Sidebar/Sidebar.jsx";
import { Navbar } from "../../../components/Navbar/Navbar.jsx";
import { Modal } from "../../../components/Modales/Modal.jsx";
import axios from "axios";

export const AgregarSucursal = () =>{
  const BASE_URL = "https://bot.yappastore.com"
	const navigate = useNavigate();
  const [ anyInputChanges, setAnyInputChanges ] = useState(false)
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ modalObjetos, setModalObjetos ] = useState({
    icono: null,
    texto: null
  })
	const [ sucursal , setSucursal ] = useState({
		nombre: null,
    latitud: null,
    longitud: null,
    direccion: null,
    telefono: null,
    foto: "default",
    comentarios: ["default"]
	})

  const modalExitosa = {
    icono: "../../../img/Modal_icono_ok.svg",
    texto: "Sucursal creada con éxito"
  }

  const modalError = {
    icono: "../../../img/Modal_icono_warning.svg",
    texto: "Error al crear la sucursal"
  }

	const handleReturn = () => {
		navigate("/sucursales")
	}

  const abrirModal = (objetos) =>{
    setModalObjetos({
      ...objetos
    })
    setModalOpen(true);
  }

	const cerrarModal = () =>{
		setModalOpen(false);
	}

	const handleChange = (e) => {
		setSucursal({
			...sucursal,
			[e.target.name] : e.target.value
		})
    setAnyInputChanges(true);
	}

  const handleGuardarSucursal = () => {
    if(!anyInputChanges){
      let obj = {
        icono: "../../../img/Modal_icono_warning.svg",
        texto: "Los campos no han sido modificados"
      }
      abrirModal(obj)
    }else if(sucursal.nombre != null && sucursal.latitud != null && sucursal.longitud != null && sucursal.direccion != null && sucursal.telefono != null && sucursal.comentarios != null){
      axios.post(`${BASE_URL}/branches`, sucursal)
        .then(response => {
          abrirModal(modalExitosa);
        })
        .catch(error => {
          abrirModal(modalError)
        });
    }else{
      let obj = {
        icono: "../../../img/Modal_icono_warning.svg",
        texto: "Los campos deben estar completos"
      }
      abrirModal(obj)
    }
  };

	return (
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
        <div className="main-container pt-10 pl-20 bg-gris-claro p-4">
          <img src="../../../../img/Agregar Sucursal.svg" className="h-5" />
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
        <div className="w-full h-52 p-14 flex justify-end items-center">
          <button
            onClick={() => handleGuardarSucursal()}
            className="boton-large boton-primario"
          >
            Guardar Sucursal
          </button>
        </div>
      </div>
    </div>
  );
}