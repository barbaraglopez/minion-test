import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../Modales/Modal'
import "./ConectSocialM.css"

export const ConectSocialM = () => {
  const navigate = useNavigate();
  const BASE_URL = 'https://bot.yappastore.com';
  const [qr, setQr] = useState('');
  const [picture, setPicture] = useState('');
  const [ profilestatus, setProfileStatus] = useState('')
  const [profilename, setProfileName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalObjetos, setModalObjetos] = useState({
    icono: null,
    texto: null
  })
  const [nombreBot, setNombreBot] = useState('');
  const [url, setUrl] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const fetchQRCode = () => {
      axios.get(`${BASE_URL}/qr-code`)
        .then(response => {
          setQr(response.data); // Asumiendo que la respuesta es una cadena base64 de la imagen
        })
        .catch(error => {
          console.error('Error al obtener el código QR:', error);
        });

        axios.get(`${BASE_URL}/config/BOT_WA_PROFILE_STATUS`)
        .then(response => {
          setProfileStatus(response.data.value);
        })
        .catch(error => {
          console.error('Error al obtener el código QR:', error);
        });

      axios.get(`${BASE_URL}/config/BOT_WA_PROFILE_PIC`)
        .then(response => {
          setPicture(response.data.value);
        })
        .catch(error => {
          console.error('Error al obtener el código QR:', error);
        });

      axios.get(`${BASE_URL}/config/BOT_WA_PROFILE_NAME`)
        .then(response => {
          setProfileName
            (response.data.value);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };

    // Llama a la función para cargar el código QR cuando el componente se monta
    fetchQRCode();

    const interval = setInterval(fetchQRCode, 5000); // Refrescar cada 5 segundos

    // Limpieza al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  console.log(nombreBot)

  const handleChange = (e) => {
    setNombreBot(e.target.value);
  };

  const handleChange2 = (e) => {
    setUrl(e.target.value);
  };

  const sendData = (key, value) => {
    if (nombreBot.trim() !== '' || url.trim() !== '') {
      axios.post(`${BASE_URL}/config`, { key:key, value:value })
        .then(response => {
          let obj = {
            icono: "../../../../../img/Modal_icono_ok.svg",
            texto: "La operación se realizó con éxito"
          };
          abrirModal(obj);
        })
        .catch(error => {
          let obj = {
            icono: "../../../../../img/Modal_icono_warning.svg",
            texto: "Error al enviar la api key: " + error
          };
          abrirModal(obj);
        })
        .finally(() => {
          setNombreBot(''); 
          setUrl('')
        });
    } else {
      let obj = {
        icono: "../../../../../img/Modal_icono_warning.svg",
        texto: "Completa el campo para enviar la información"
      };
      abrirModal(obj);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div className="bg-gris-claro flex justify-center font-medium">
      <Modal
        handleBotonModal={cerrarModal}
        handleCerrar={cerrarModal}
        iconoModal={modalObjetos.icono}
        textoModal={modalObjetos.texto}
        textoBoton={"Regresar"}
        isOpen={modalOpen}
      />
      <div className="p-10 flex flex-col">
        <img src="../../../img/Agregar_whatsapp.svg" className="h-6 mb-3" alt="Agregar WhatsApp" />
        <div className="grid grid-cols-2 gap-10 p-6 max-sm:flex-col max-sm:flex">
          <div className="flex justify-center p-1 container">
            {qr && <img src={qr} className="container-qr-imagen" alt="QR Code" />}
          </div>
          <div className="flex flex-col justify-center p-1">
            <div className='flex flex-col'>
    
                <p>{`${profilename}`}</p>
                <input
                  name="name"
                  type="name"
                  value={nombreBot}
                  onChange={handleChange}
                  className="mt-2 input" placeholder="Carlos Sanchez" />
              <button onClick={() => sendData('BOT_WA_PROFILE_NAME',nombreBot)} className="boton-primario text-xs p-2 h-9 w-32 mt-2 rounded-md">Cambiar nombre</button>
            </div>
            <div className="flex justify-center flex-col mt-2">
              <p>Foto del bot</p>
              <div className="flex justify-center items-center mt-2 container">
                {picture && <img src={picture} alt="Foto del bot" className='imagen'/>}
                <button onClick={toggleVisibility} className="boton-primario h-9 ml-3 text-xs p-2 rounded-md">Cambiar foto</button>
              </div>
            </div>
            <div>
              <div className={`${isVisible ? 'visible' : 'invisible'} mt-5`}>
                <p className='mb-2'>Ingresa la url de tu imagen aqui debajo</p>
                <input
                 name="url"
                 type="url"
                 value={url}
                 onChange={handleChange2}
                 placeholder='URL' className='input'/>
                <button onClick={() => sendData('BOT_WA_PROFILE_PIC',url)} className="boton-primario h-9 ml-3 text-xs p-2 rounded-md">Enviar</button>
              </div>
            </div>
            <div>
              <p className="mt-2">Estado del perfil : </p>
              <p>{`${profilestatus}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


