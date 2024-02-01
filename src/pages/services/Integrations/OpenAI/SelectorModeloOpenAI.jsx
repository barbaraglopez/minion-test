import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../../components/Modales/Modal";

export const SelectorModeloOpenAI = () => {
  const BASE_URL = "https://bot.yappastore.com";
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalObjetos, setModalObjetos] = useState({
    icono: null,
    texto: null,
  });

  const modalExitosa = {
    icono: "../../../../../img/Modal_icono_ok.svg",
    texto: "La operacion se realizo con exito",
  };

  const modalError = {
    icono: "../../../../../img/Modal_icono_warning.svg",
    texto: "Hubo un error",
  };

  const abrirModal = (objetos) => {
    setModalObjetos({
      ...objetos,
    });
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
  };

  const handleChangeSelect = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
  };

  const sendData = () => {
    axios
      .post(`${BASE_URL}/config`, {
        key: "OPENAI_MODEL",
        value: opcionSeleccionada,
      })
      .then((response) => {
        response;
        let obj = {
          icono: "../../../../../img/Modal_icono_ok.svg",
          texto: "La operacion se realizo con exito",
        };
        abrirModal(obj);
      })
      .catch((error) => {
        let obj = {
          icono: "../../../../../img/Modal_icono_warning.svg",
          texto: "Error al enviar la api key:" + error,
        };
        abrirModal(obj);
      });
  };

  return (
    <div className="containerParametros p-5 max-lg:mb-6">
      <Modal
        handleBotonModal={cerrarModal}
        handleCerrar={cerrarModal}
        iconoModal={modalObjetos.icono}
        textoModal={modalObjetos.texto}
        textoBoton={"Regresar"}
        isOpen={modalOpen}
      />
      <img
        src="../../../../img/Selector_del_modelo_OpenAi.svg"
        className="p-6"
      />
      <div className="containerLabelInput mb-3">
        <p className="text-lg">Elije un modelo</p>
        <div className="containerLabelInput">
          <div className="relative h-10  min-w-[200px] inputContainer">
            <select
              id="opciones"
              value={opcionSeleccionada}
              onChange={handleChangeSelect}
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 bg-white"
            >
              <option value="GPT-3.5 Turbo">GPT-3.5 Turbo</option>
              <option value="GPT-4">GPT-4</option>
              <option value="GPT-4 Turbo">GPT-4 Turbo</option>
            </select>
            <label className="before:content[' ']after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Selecciona
            </label>
            <button
              onClick={() => sendData()}
              className="boton-primario w-64 text-sm p-2 mt-4 rounded-md font-semibold"
            >
              Actualizar modelo
            </button>
            <div className="containerLabelInput"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
