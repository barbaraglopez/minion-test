import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components/Sidebar/Sidebar.jsx";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav.jsx";
import { Navbar } from "../../../components/Navbar/Navbar.jsx";
import  { useState } from "react";
import { Modal } from "../../../components/Modales/Modal.jsx";
import axios from "axios";

export const AgregarPrompt = () => {
  const BASE_URL = "https://bot.yappastore.com";
  const navigate = useNavigate();
  const [ anyInputChanges, setAnyInputChanges ] = useState(false)
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ modalObjetos, setModalObjetos ] = useState({
    icono: null,
    texto: null
  })

  const [ prompt, setPrompt ] = useState({
    name: null,
    description: null,
    basePrompt: null,
    examples: [],
    negativePrompt: null,
    additionalInfo: null,
    __v: 0
  })

  const modalExitosa = {
    icono: "../../../img/Modal_icono_ok.svg",
    texto: "Prompt creado con éxito"
  }

  const modalError = {
    icono: "../../../img/Modal_icono_warning.svg",
    texto: "Error al crear el prompt"
  }

  const handleReturn = () =>{
    navigate("/prompts")
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
    setPrompt({
      ...prompt,
      [e.target.name] : e.target.value
    })
    setAnyInputChanges(true);
  }

  const handleExamplesInput = (e) =>{
    let ejemplos = (e.target.value).split(',').map((x) => x.trim());
    setPrompt({
      ...prompt,
      examples: ejemplos
    })
  }

  const handleGuardarPrompt = () => {
    if(!anyInputChanges){
      let obj = {
        icono: "../../../img/Modal_icono_warning.svg",
        texto: "Los campos no han sido modificados"
      }
      abrirModal(obj)
    }else if(prompt.name != null && prompt.description != null && prompt.basePrompt != null && prompt.examples.length > 0 && prompt.negativePrompt != null){
      axios.post(`${BASE_URL}/prompts`, prompt)
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
    <>
      <BurguerNav />
      <div className="homeContainer flex max-lg:flex-col items-stretch">
        <Modal
          handleBotonModal={handleReturn}
          handleCerrar={cerrarModal}
          iconoModal={modalObjetos.icono}
          textoModal={modalObjetos.texto}
          textoBoton={"Ver todos los prompts"}
          isOpen={modalOpen}
        />
        <Sidebar />
        <div className="container p-5 flex flex-col">
          <Navbar
            imagen={"../../../../img/Prompts.svg"}
            displayButton={"hidden"}
            displayInput={"hidden"}
            funcionBoton={"Crear nueva sucursal"}
            funcionButtonAtras={handleReturn}
          />
          <div className="w-full flex-col h-30 flex p-10 max-md:p-3 rounded-xl h-full font-semibold">
            <div className="flex justify-between p-3 items-center max-lg:flex-col max-lg:h-16">
              <img
                src="../../../../img/Nuevo_prompt.svg"
                className="h-5 max-lg:mb-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-10 p-5 items-center justify-center max-xl:grid-cols-1 bg-gris-claro p-5">
              <div className="containerLabelInput">
                <label>Nombre</label>
                <div className="">
                  <div className="relative w-full h-20 inputContainer ">
                    <input
                      name="name"
                      onChange={handleChange}
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-white"
                      placeholder=""
                    />
                    <label className="overflow-x-hidden flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Nombre del prompt se recomienda un nombre corto y sin
                      espacios
                    </label>
                  </div>
                </div>
              </div>
              <div className="containerLabelInput">
                <label>Tipo de prompt</label>
                <div className="relative h-10  min-w-[200px] inputContainer">
                  <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 bg-white text-slate-950">
                    <option value="Opcion01">Opcion01</option>
                    <option value="Opcion02">Opcion02</option>
                    <option value="Opcion03">Opcion03</option>
                    <option value="Opcion04">Opcion04</option>
                  </select>
                  <label className="before:content[' ']after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Selecciona
                  </label>
                </div>
              </div>
              <div className="containerLabelInput">
                <label>Descripcion</label>
                <div className="">
                  <div className="relative w-full h-20 inputContainer">
                    <input
                      name="description"
                      onChange={handleChange}
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-white"
                      placeholder=""
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-x-hidden  truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Ingrese una descripcion para el prompt
                    </label>
                  </div>
                </div>
              </div>
              <div className="containerLabelInput">
                <label>Prompt Base</label>
                <div className="">
                  <div className="relative w-full h-20 inputContainer">
                    <input
                      name="basePrompt"
                      onChange={handleChange}
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-white"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-x-hidden  truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Ingrese una descripcion para el prompt
                    </label>
                  </div>
                </div>
              </div>
              <div className="containerLabelInput">
                <label>Ejemplos (preguntas y respuestas)</label>
                <div className="">
                  <div className="relative w-full h-20 inputContainer">
                    <input
                      name="examples"
                      onChange={handleExamplesInput}
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-white"
                      placeholder=""
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-x-hidden truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Ingrese una descripcion para el prompt
                    </label>
                  </div>
                </div>
              </div>
              <div className="containerLabelInput">
                <label>Prompt negativo</label>
                <div className="">
                  <div className="relative w-full h-20 inputContainer">
                    <input
                      name="negativePrompt"
                      onChange={handleChange}
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-white"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-x-hidden truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Ingrese una descripcion para el prompt
                    </label>
                  </div>
                </div>
              </div>
              <div className="containerLabelInput">
                <label>Información adicional</label>
                <div className="">
                  <div className="relative w-full h-20 inputContainer">
                    <input
                      name="aditionalInfo"
                      onChange={handleChange}
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-white"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-x-hidden truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Ingrese una descripcion para el prompt
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end max-lg:justify-center">
              <button
                onClick={() => handleGuardarPrompt()}
                className="boton-large boton-primario rounded-lg p-2 text-slate-100 w-52 max-lg:w-40 mt-5 mb-5"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};