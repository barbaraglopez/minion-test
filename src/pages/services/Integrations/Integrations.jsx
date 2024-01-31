import "./Integrations.css"
import {useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Navbar } from "../../../components/Navbar/Navbar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { SocialMedia } from "../../../components/SocialMedia/SocialMedia";
import { SelectorModeloOpenAI } from "./SelectorModeloOpenAI";
import { ConfigurarAPIKey } from "./ConfigurarAPIKey";

export const Integrations = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/integraciones");
  };

  return (
    <>
      <BurguerNav />
      <div className="homeContainer max-md:align-middle flex items-stretch max-lg:flex-col">
        <Sidebar />
        <div className="lg:container p-5 flex-col">
          <Navbar
            imagen={"../../../../img/Integraciones.svg"}
            displayInput={"hidden"}
            displayButton={"hidden"}
            displayButtonAtras={"hidden"}
            funcionButtonAtras={handleReturn}
          />
          <div className="grid grid-cols-1 gap-10 p-5 h-80 max-md:grid-cols-1">
            <div className="integrations-sub-div">
              <SocialMedia
                imagenIcon={"../../../../img/Whatsapp_icon.svg"}
                imagenWord={"../../../../img/Whatsapp_word.svg"}
              />
            </div>
            <div className="grid grid-cols-2 bg-gris-claro p-10 max-lg:grid-cols-1">
              <SelectorModeloOpenAI />
              <ConfigurarAPIKey />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
