import axios from "axios";
import { useEffect, useState } from "react";

export const EstadoBot = () => {
  const BASE_URL = "https://bot.yappastore.com";

  const [estadoBot, setEstadoBot] = useState({
    whatsappConnectionStatus: null,
    appUptimeSeconds: 0, // Almacenaremos el uptime en segundos para facilitar los cálculos
    whatsappUptimeSeconds: 0,
  });

  // Convertir el tiempo en formato HH:MM:SS a segundos
  const uptimeToSeconds = (uptime) => {
    const [hours, minutes, seconds] = uptime.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  useEffect(() => {
    const fetchEstadoDelBot = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/info`);
        setEstadoBot({
          whatsappConnectionStatus: data.whatsappConnectionStatus,
          appUptimeSeconds: uptimeToSeconds(data.appUptime),
          whatsappUptimeSeconds: uptimeToSeconds(data.whatsappUptime),
        });
      } catch (error) {
        console.error("Error al traer el estado del bot: ", error);
      }
    };

    fetchEstadoDelBot();

    // Establecer un intervalo para incrementar el uptime cada segundo
    const intervalId = setInterval(() => {
      setEstadoBot((currentState) => ({
        ...currentState,
        appUptimeSeconds: currentState.appUptimeSeconds + 1,
        whatsappUptimeSeconds: currentState.whatsappUptimeSeconds + 1,
      }));
    }, 1000); // Incrementa los contadores cada segundo

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);

  // Convertir segundos a formato HH:MM:SS para mostrar
  const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return [hours, minutes, sec]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  };

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
              {formatUptime(estadoBot.appUptimeSeconds)}
            </div>
            {estadoBot.whatsappConnectionStatus === "Conectado" && (
              <div>
                <span className="font-semibold">
                  Tiempo de conexión del Bot a Whatsapp:
                </span>{" "}
                {formatUptime(estadoBot.whatsappUptimeSeconds)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
