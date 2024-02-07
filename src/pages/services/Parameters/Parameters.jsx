import axios from "axios";
import { useEffect, useState } from "react";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import "./Parameters.css"

export const Parameters = () => {
    const BASE_URL = "https://bot.yappastore.com";
    const [info, setInfo] = useState("")
    const [modalPrivacidadPrompts, setmodalPrivacidadPrompts]= useState(false)
    const [valorInput, setValorInput] = useState("");
    const [keyItem, setKeyItem] = useState("");
    console.log(valorInput)

    const fetchDATA = () => {
      axios
        .get(`${BASE_URL}/config`)
        .then((response) => {
          setInfo(response.data);
        })
        .catch((error) =>
          console.error("Error al traer el estado del bot: ", error)
        );
    };

    useEffect(() => {
      fetchDATA();
    }, []);

    const modalAbierta =(key)=>{
        setmodalPrivacidadPrompts(true)
        setKeyItem(key)
    }

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


     const sendData = (key, valor) => {
       if (valorInput.trim() !== "") {
         axios
           .post(`${BASE_URL}/config`, { key: key, value: valor })
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
         setValorInput("");
       } else {
         let obj = {
           icono: "../../../../../img/Modal_icono_warning.svg",
           texto: "Completa el campo para enviar la informacion",
         };
         abrirModal(obj);
       }
     };

    const confirmar = () => {
        if(valorInput.trim() !== ""){
            sendData(keyItem, valorInput);
        }
        setmodalPrivacidadPrompts(true);
        setmodalPrivacidadPrompts(false);
        setTimeout(() => {
          window.location.reload();
          setKeyItem("");
          setValorInput("");
        }, 1000);
    };

    const cerrar =()=>{
        window.location.reload();
    }

  return (
    <div className="max-md:align-middle flex items-stretch max-lg:flex-col homeContainer">
      <Sidebar />
      <BurguerNav />
      {modalPrivacidadPrompts ? (
        <div className=" modal-bg w-full h-full flex items-center justify-center">
          <div className="modal-content flex flex-col justify-around p-3 w-96 h-80">
            <div className="botonCerrar flex flex-col">
              <button onClick={() => cerrar()} className="w-6 h-6">
                <img
                  src="../../../../img/Modal_icono_boton_close.svg"
                  className="w-full"
                />
              </button>
            </div>
            <div className="texto-modal flex flex-col justify-center items-center h-full text-xl font-bold p-5">
              <p className="items-center flex justify-center">
                Ingrese el nuevo valor
              </p>
              <input
                className="bg-gris-claro input mt-2 text-sm"
                type="text"
                value={valorInput}
                onChange={(e) => setValorInput(e.target.value)}
                id="miInput"
              />
              <button
                onClick={() => confirmar()}
                className="boton-large boton-primario w-full h-full mt-2"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="container p-5">
        <Navbar
          imagen={"../../../../img/parametros-title.PNG"}
          displayInput={"hidden"}
          displayButton={"hidden"}
          nombre={"Sara Hebe"}
          funcionBoton={"Crear nueva sucursal"}
        />
        <div className="containerInfo h-full w-full p-3">
          <div className="bg-white p-6 h-full">
            <div className="item bg-gris-claro">
              {`Bot home : ${info.BOT_HOME}`}
              <button
                onClick={() => modalAbierta("BOT_HOME")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Bot number: ${info.BOT_NUMBER}`}
              <button
                onClick={() => modalAbierta("BOT_NUMBER")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Bot name: ${info.BOT_NAME}`}
              <button
                onClick={() => modalAbierta("BOT_NAME")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Prefix: ${info.PREFIX}`}
              <button
                onClick={() => modalAbierta("PREFIX")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Empresa: ${info.EMPRESA}`}
              <button
                onClick={() => modalAbierta("EMPRESA")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Chatbot: ${info.CHATBOT}`}
              <button
                onClick={() => modalAbierta("CHATBOT")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Chatvoz: ${info.CHATVOZ}`}
              <button
                onClick={() => modalAbierta("CHATVOZ")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Chatbot privado: ${info.CHATBOT_PRIVADO}`}
              <button
                onClick={() => modalAbierta("CHATBOT_PRIVADO")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Sucursales: ${info.SUCURSALES}`}
              <button
                onClick={() => modalAbierta("SUCURSALES")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Sreenshot: ${info.SCREENSHOT}`}
              <button
                onClick={() => modalAbierta("SCREENSHOT")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
            <div className="item bg-gris-claro">
              {`Enviar imagenes: ${info.ENVIAR_IMAGENES}`}
              <button
                onClick={() => modalAbierta("ENVIAR_IMAGENES")}
                className="boton-primario:hover boton-primario btn"
              >
                Cambiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
