import axios from "axios";
import { useEffect, useState } from "react";

export const EstadoBot = () => {
  const BASE_URL = "https://bot.yappastore.com";

  const [estadoBot, setEstadoBot] = useState({
    appUptime: null,
    whatsappConnectionStatus: null,
    whatsappUptime: null,
  });

  useEffect(() => {
    const fetchEstadoDelBot = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/info`);
        setEstadoBot(response.data);
      } catch (error) {
        console.error("Error al traer el estado del bot: ", error);
      }
    };
    fetchEstadoDelBot();
  }, []);

  const updateInfo = () =>{
    window.location.reload();
  }

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="container flex flex-col items-center mt-2 h-auto p-2">
          <p className="font-extrabold p-3 text-2xl max-lg:text-xl">
            Estado del bot
          </p>
          <div className="flex flex-col p-5 items-center">
            <div>
              <span className="font-semibold">
                Estado de conexión de Whatsapp:
              </span>{" "}
              {estadoBot.whatsappConnectionStatus}
            </div>
            <div>
              <span className="font-semibold">Tiempo de conexion del Bot:</span>{" "}
              {estadoBot.appUptime}
            </div>
            {estadoBot.whatsappConnectionStatus === "Conectado" && (
              <div>
                <span className="font-semibold">
                  Tiempo de conexión del Bot a Whatsapp:
                </span>{" "}
                {estadoBot.whatsappUptime}
              </div>
            )}
          </div>
          <button onClick={()=>updateInfo()} className="boton-primario p-1 rounded-md">
            Actualizar informacion
          </button>
        </div>
      </div>
    </>
  );
};
