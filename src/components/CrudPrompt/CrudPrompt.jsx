import "./CrudPrompt.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modales/Modal.jsx";
import axios from "axios";

export const CrudPrompt = () =>{
  const BASE_URL = "https://bot.yappastore.com";
  const navigate = useNavigate();
  const [ modalOpen, setModalOpen ] = useState(false);
  

  const abrirModal = () =>{
    setModalOpen(true);
  }

  const cerrarModal = () =>{
    setModalOpen(false);
  }

    return (
      <div>
        Hola
      </div>
    );
};
