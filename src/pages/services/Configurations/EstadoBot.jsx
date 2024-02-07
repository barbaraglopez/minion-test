import axios from "axios";
import { useEffect,useState } from "react";

export const EstadoBot = () =>{
    const [estadoBot, setEstadoBot]= useState({
        appUptime: null,
        whatsappConnectionStatus: null,
        whatsappUptime: null
      })

    const BASE_URL = "https://bot.yappastore.com";
    const fetchEstadoDelBot = () => {
        axios.get(`${BASE_URL}/info`)
          .then(response => {
            setEstadoBot(response.data)
          })
          .catch(error => console.error('Error al traer el estado del bot: ', error));
      }

      useEffect(() => {
        fetchEstadoDelBot();
      }, []);



    return (
      <>
        <div className="flex flex-col justify-center">
          <div className="container flex flex-col items-center mt-5">
            <p className="font-extrabold p-2 text-2xl max-lg:text-xl">
              Estado de las integraciones
            </p>
            <div className="">{`Estado de coneccion : ${estadoBot.whatsappConnectionStatus}`}</div>
            <div className="">{`Tiempo desconectado: ${estadoBot.appUptime}`}</div>
            <div className="">{`Tiempo de coneccion: ${estadoBot.whatsappUptime}`}</div>
          </div>
        </div>
      </>
    );}