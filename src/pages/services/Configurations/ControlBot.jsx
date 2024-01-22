import axios from "axios";
import { useEffect, useState } from "react";
import './ControlBot.css'

export const ControlBot = () => {
    const BASE_URL = "https://bot.yappastore.com";
    const [boton1Disabled, setBoton1Disabled] = useState(false);
    const [boton2Disabled, setBoton2Disabled] = useState(false);

    const fetchReiniciarElBot = () => {
        axios.get(`${BASE_URL}/reiniciar`)
            .catch(error => console.error('Error al reiniciar el bot: ', error));
    }

    const fetchApagarElBot = () => {
        axios.get(`${BASE_URL}/apagar`)
            .catch(error => console.error('Error al apagar el bot: ', error));
    }

    const handleReiniciarBot = () => {
        fetchReiniciarElBot()
        setBoton1Disabled(true);
        setTimeout(() => {
            setBoton1Disabled(false);
        }, 20000)
    }

    const handleApagarBot = () => {
        fetchApagarElBot()
        setBoton2Disabled(true);
        setTimeout(() => {
            setBoton2Disabled(false);
        }, 20000)
    }

    return (
        <div className="flex flex-col items-center">
            <div>
                <img src={"../../../../img/Control_del_Bot.svg"} className="p-5" alt="Control del Bot" />
            </div>
            <div className="flex flex-col gap-4">
                <button
                    onClick={handleReiniciarBot}
                    disabled={boton1Disabled}
                    className={`${boton1Disabled ? 'boton-desactivado' : 'boton-primario boton-large'}`}
                >
                    Reiniciar Bot
                </button>
                <button
                    onClick={handleApagarBot}
                    disabled={boton2Disabled}
                    className={`${boton2Disabled ? 'boton-desactivado' : 'boton-primario boton-large'}`}
                >
                    Apagar Bot
                </button>
            </div>
        </div>
    )
}
