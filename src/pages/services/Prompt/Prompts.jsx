import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Prompt } from "./Prompt.jsx";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from '../../../components/Modales/Modal.jsx'

export const Prompts = () => {
  const navigate = useNavigate();
  const BASE_URL = "https://bot.yappastore.com";
  const [prompts, setPrompts] = useState([]);
  const [search, setSearch] = useState("");
  const [idPromptaBorrar, setidPromptaBorrar] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [promptPrivado, setPromptPrivado] = useState()
  const [promptPublico, setPromptPublico] = useState()
  const [modalObjetos, setModalObjetos] = useState({
    icono: null,
    texto: null
  })
  const [modalPrivacidadPrompts, setModalPrivacidadPrompts] = useState(false)
  const [mensajeModal, setMensajeModal] = useState("")

  const abrirModal = (objetos) => {
    setModalObjetos({
      ...objetos
    })
    setModalOpen(true);
  }

  const cerrarModal = () => {
    setModalOpen(false);
  }

  const modalExitosa = {
    icono: "../../../img/Modal_icono_ok.svg",
    texto: "Cambios guardados con éxito"
  }

  const modalError = {
    icono: "../../../img/Modal_icono_warning.svg",
    texto: "Error al editar el prompt"
  }

  const modalPregunta = {
    icono: "../../../../img/Danger.svg",
    texto: "¿Seguro que deseas eliminar este prompt?"
  }

  useEffect(() => {
    fetchPrompts();
    fetchPromptPrivadoyPublico()
  }, []);

  const fetchPrompts = () => {
    axios.get(`${BASE_URL}/promptsraw`)
      .then(response => {
        setPrompts(response.data)
      })
      .catch(error => console.error('Error al traer los prompts:  ', error));
  }

  const fetchPromptPrivadoyPublico=()=>{
    axios
      .get(`${BASE_URL}/config`)
      .then((response) => {
        setPromptPrivado(response.data.PROMPT_PRIVADO);
        setPromptPublico(response.data.PROMPT);
      })
      .catch((error) => console.error("Error al traer la data:  ", error)); 
  }  

  const handleAgregar = () => {
    navigate("/agregar-prompt");
  }

  const handleBorrar = (idPrompt) => {
    abrirModal(modalPregunta)
    setidPromptaBorrar(idPrompt)
  }

  const handleModal = () => {
    axios.delete(`${BASE_URL}/prompts/${idPromptaBorrar}`)
      .then(response => {
        cerrarModal()
        setidPromptaBorrar("")
        fetchPrompts();
      })
      .catch(error => console.log('Error al borrar prompt: ' + idPromptaBorrar, error))
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  
  useEffect(() => {
    if (search !== null && search !== "") {
      const lowerCaseSearch = search.toLowerCase();
      setPrompts(
        prompts.filter((p) => p.name.toLowerCase().includes(lowerCaseSearch))
      );
    } else if (search === "") {
      fetchPrompts();
    } else {
      // Manejar el caso en que search es null
    }
  }, [search]);

  const handleElegidoPublico = (name) => {
       axios
         .post(`${BASE_URL}/config`, {
           key: "PROMPT",
           value: name,
         })
         .then((response) => {
           setMensajeModal("Operacion realizada con exito");;
         })
         .catch((error) => {
           setMensajeModal("Hubo un problema:"+error);
         });
         
        setModalPrivacidadPrompts(true);
};

  const handleElegidoPrivado = (name) => {
      axios
        .post(`${BASE_URL}/config`, {
          key: "PROMPT_PRIVADO",
          value: name
        })
        .then((response) => {
          setMensajeModal("Operacion realizada con exito");
        })
        .catch((error) => {
          setMensajeModal("Hubo un problema:" + error);
        });
         
        setModalPrivacidadPrompts(true)
  };

        const confirmar =()=>{
            window.location.reload();
            setModalPrivacidadPrompts(false);
            setMensajeModal("");
        }

  return (
    <>
      <BurguerNav />
      {modalPrivacidadPrompts ? (
        <div className=" modal-bg w-full h-full flex items-center justify-center">
          <div className="modal-content flex flex-col justify-around p-3 w-96 h-80">
            <div className="botonCerrar">
              <button onClick={() => confirmar()} className="w-6 h-6">
                <img
                  src="../../../../img/Modal_icono_boton_close.svg"
                  className="w-full"
                />
              </button>
            </div>
            <div className="title-modal flex justify-center items-center w-full text-xl">
              <img src="../../../../img/Modal_icono_ok.svg" />
            </div>
            <div className="texto-modal flex justify-center items-center text-xl font-bold">
              <p className="items-center flex justify-center">{mensajeModal}</p>
            </div>
            <div className="boton-modal flex justify-center items-center">
              <button
                onClick={() => confirmar()}
                className="boton-large boton-primario w-full h-full"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="homeContainer flex items-stretch max-lg:flex-col">
        <Modal
          handleBotonModal={handleModal}
          handleCerrar={cerrarModal}
          iconoModal={modalObjetos.icono}
          textoModal={modalObjetos.texto}
          textoBoton={"Confirmar"}
          isOpen={modalOpen}
        />
        <Sidebar />
        <div className="w-full p-5 max-lg:p-1">
          <Navbar
            imagen={"../../../../img/Prompts.svg"}
            displayButtonAtras={"hidden"}
            funcionButton={"Crear nuevo prompt"}
            eventoFuncion={handleAgregar}
            funcionSearchBar={handleSearch}
          />
          <div className="main-container pl-10">
            <div className="flex text-xs mb-2 justify-between">
              <p>Prompt privado: {promptPrivado}</p>
              <p>Prompt publico: {promptPublico}</p>
            </div>
            <div className="grid grid-cols-2 gap-5 max-md:flex max-md:flex-col">
              {prompts.map((prompt, index) => (
                <Prompt
                  key={index}
                  prompt={prompt}
                  funcionBorrar={handleBorrar}
                  funcionElegidoPublico={handleElegidoPublico}
                  funcionElegidoPrivado={handleElegidoPrivado}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
