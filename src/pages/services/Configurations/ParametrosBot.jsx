import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../components/Modales/Modal"

export const ParametrosBot = () => {
    const BASE_URL = "https://bot.yappastore.com";
    const navigate = useNavigate();
    const [valorInput, setValorInput] = useState('');
    const [valorInput2, setValorInput2] = useState('');
    const [anyInputChanges, setAnyInputChanges] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalObjetos, setModalObjetos] = useState({
        icono: null,
        texto: null
    })

    const modalExitosa = {
        icono: "../../../../../img/Modal_icono_ok.svg",
        texto: "La operacion se realizo con exito"
    }

    const modalError = {
        icono: "../../../../../img/Modal_icono_warning.svg",
        texto: "Hubo un error"
    }

    const abrirModal = (objetos) => {
        setModalObjetos({
            ...objetos
        })
        setModalOpen(true);
    }

    const cerrarModal = () => {
        setModalOpen(false);
    }

    const handleChange = (e) => {
        setValorInput(e.target.value);
        setAnyInputChanges(true);
    };

    const handleChange2 = (e) => {
        setValorInput2(e.target.value);
        setAnyInputChanges(true);
    };


    const sendData = (key, valor) => {
        if (valorInput.trim() !== '' || valorInput2.trim() !== '') {
            axios.post(`${BASE_URL}/config`, { key: key, value: valor })
                .then(response => {
                    (response)
                    let obj = {
                        icono: "../../../../../img/Modal_icono_ok.svg",
                        texto: "La operacion se realizo con exito"
                    }
                    abrirModal(obj)
                })
                .catch(error => {
                    let obj = {
                        icono: "../../../../../img/Modal_icono_warning.svg",
                        texto: "Error al enviar la api key:" + error
                    }
                    abrirModal(obj)
                })
            setValorInput('')
            setValorInput2('')
        } else {
            let obj = {
                icono: "../../../../../img/Modal_icono_warning.svg",
                texto: "Completa el campo para enviar la informacion"
            }
            abrirModal(obj)
        }
    }

    return (
        <div className="containerParametros">
            <Modal
                handleBotonModal={cerrarModal}
                handleCerrar={cerrarModal}
                iconoModal={modalObjetos.icono}
                textoModal={modalObjetos.texto}
                textoBoton={"Regresar"}
                isOpen={modalOpen}
            />
            <img
                src="../../../../img/Parametros_del_bot.svg"
                className="p-6"
            />
            <div className="containerLabelInput mb-3">
                <label>
                    Activador de comandos simbolos de comandos del admin
                </label>
                <div className="">
                    <div className="relative w-full inputContainer max-lg:mb-4">
                        <input
                            name="name"
                            type="name"
                            value={valorInput}
                            onChange={handleChange}
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-white"
                            placeholder=" "
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-x-hidden truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                            !
                        </label>
                        <button onClick={() => sendData("PREFIX", valorInput)}
                            className="boton-primario w-64 text-sm p-2 mt-2 rounded-md font-semibold ">
                            Actualizar simbolo de comandos
                        </button>
                    </div>
                </div>
            </div>
            <div className="containerLabelInput">
                <label>
                    Nombre del bot(para activar el bot del grupo privado)
                </label>
                <div className="inputContainer">
                    <div className="relative w-full h-10">
                        <input
                            name="name"
                            type="name"
                            value={valorInput2}
                            onChange={handleChange2}
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-white"
                            placeholder=" "
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-x-hidden truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                            Sonya
                        </label>
                    </div>
                </div>
                <button onClick={() => sendData("BOT_NAME", valorInput2)} className="boton-primario w-64 text-sm p-2 mt-2 rounded-md font-semibold mb-2">
                    Guardar
                </button>
            </div>
        </div>
    )
}