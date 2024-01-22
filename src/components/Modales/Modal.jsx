import './Modal.css';
import {useNavigate} from "react-router-dom";
export const Modal = ({handleBotonModal, handleCerrar, textoModal, textoBoton, isOpen, iconoModal}) =>{
	const navigate = useNavigate();
	const display = isOpen ? 'display' : 'hidden';

	return(
    <>
      <div onClick={handleCerrar} className={`${display} modal-bg w-full h-full`}></div>
        <div className={`${display} modal-content flex flex-col justify-around p-3 w-96 h-80`}>
          <div className="botonCerrar">
            <button onClick={() => handleCerrar()} className="w-6 h-6">
              <img src='../../../img/Modal_icono_boton_close.svg' className="w-full"/>
            </button>
          </div>
          <div className="title-modal flex justify-center items-center w-full text-xl">
            <img src={iconoModal ?? '../../../img/Modal_icono_ok.svg'}/>
          </div>
          <div className="texto-modal flex justify-center items-center text-xl font-bold">
            <p className='items-center flex justify-center'>{textoModal}</p>
          </div>
          <div className="boton-modal flex justify-center items-center">
            <button onClick={() => handleBotonModal()} className="boton-large boton-primario w-full h-full">{textoBoton}</button>
          </div>
        </div>

    </>
	)
}