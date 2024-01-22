import "./Prompt.css";
import { useNavigate } from "react-router-dom";
import Switch from "./Switch.jsx";
import { useState } from "react";
import {
  useEffect
} from "react";
import { useAuth } from "../../../context/useContext";

export const Prompt = ({
  prompt,
  funcionBorrar,
  funcionElegidoPrivado,
  funcionElegidoPublico,
}) => {
  const navigate = useNavigate();

  const handleEditar = () => {
    navigate("/editar-prompt", { state: { prompt: prompt } });
  };

  return (
    <div className="cards rounded-lg bg-gris-claro">
      <div className="flex justify-between">
        <div className="text-xs font-medium self-center flex justify-between w-full rounded-sm mb-2">
          <button
            onClick={() => funcionElegidoPrivado(prompt.name)}
            className="p-2 bg-violeta-claro rounded-lg boton-prompt max-md:p-1 max-md:m-1"
          >
            Seleccionar prompt Privado
          </button>
          <button
            onClick={() => funcionElegidoPublico(prompt.name)}
            className="p-2 bg-violeta-claro rounded-lg boton-prompt max-md:p-1 max-md:m-1"
          >
            Seleccionar prompt Publico
          </button>
        </div>
      </div>
      <div className="cardText m-5">
        <p className="font-bold text-gray-600">{prompt.name}</p>
        <p className="text-sm font-medium leading-6 text-gray-900 p-1">
          {prompt.description}
        </p>
      </div>
      <div className="buttonsContainer flex justify-between p-5">
        <button
          onClick={() => handleEditar()}
          className="boton-primario p-2 text-sm text-slate-50 font-bold rounded-lg w-48 max-2xl:w-32"
        >
          Editar
        </button>
        <button
          onClick={() => funcionBorrar(prompt._id)}
          className="boton-secundario p-2 text-sm text-slate-50 font-bold rounded-lg w-48 max-2xl:w-32"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};
