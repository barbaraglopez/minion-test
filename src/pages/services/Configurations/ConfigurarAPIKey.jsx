import axios from "axios";
import { useState } from "react";
import { Modal } from "../../../components/Modales/Modal";
import { useNavigate } from "react-router-dom";

export const ConfigurarAPIKey = () => {
   const [valorInput, setValorInput] = useState('');
   const navigate = useNavigate();
   const [anyInputChanges, setAnyInputChanges] = useState(false)
   const BASE_URL = "https://bot.yappastore.com";
   const [modalOpen, setModalOpen] = useState(false);
   const [modalObjetos, setModalObjetos] = useState({
      icono: null,
      texto: null
   })

   const handleChange = (e) => {
      setValorInput(event.target.value);
      setAnyInputChanges(true);
   };

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

   const sendData = () => {
      if (valorInput.trim() !== '') {
         axios.post(`${BASE_URL}/config`, { key: "OPENAI_API_KEY", value: valorInput })
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
      } else {
         let obj = {
            icono: "../../../../../img/Modal_icono_warning.svg",
            texto: "Completa el campo para enviar la informacion"
         }
         abrirModal(obj)
      }
   }

   const deleteApi = () => {
      axios.post(`${BASE_URL}/config`, { key: "OPENAI_API_KEY", value: "" })
         .then(response => {
            (response)
            let obj = {
               icono: "../../../../../img/Modal_icono_ok.svg",
               texto: "La operacion se realizo con exito"
            }
            abrirModal(obj)
         })
         .catch(error => console.error('Error al borrar la api key: ', error));
      let obj = {
         icono: "../../../../../img/Modal_icono_warning.svg",
         texto: "Hubo un error"
      }
      abrirModal(obj)
   }

   const handleReturn = () => {
      navigate("/configuraciones")
   }

   return (
      <div className="flex flex-col">
         <Modal
            handleBotonModal={cerrarModal}
            handleCerrar={cerrarModal}
            iconoModal={modalObjetos.icono}
            textoModal={modalObjetos.texto}
            textoBoton={"Regresar"}
            isOpen={modalOpen}
         />
         <div>
            <img src={"../../../../img/Configurar_API_Key.svg"} className="p-5" alt="Configurar API Key" />
            <div>
               <p className="text-lg pl-5">Nueva API Key</p>
               <input
                  name="name"
                  type="name"
                  value={valorInput}
                  onChange={handleChange}
                  className="w-full pl-2 ml-5"
                  placeholder="EJEMPLO: AKHFBEOAUBF51655"
               />
            </div>
         </div>
         <div className="mt-14 pl-5 flex gap-2">
            <button onClick={() => sendData()} className="boton-large boton-primario">Guardar</button>
            <button onClick={() => deleteApi()} className="boton-large boton-secundario text-sm"> Eliminar API Key </button>
         </div>
      </div>
   );
};
