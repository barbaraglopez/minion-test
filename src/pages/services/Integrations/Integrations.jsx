import "./Integrations.css";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Navbar } from "../../../components/Navbar/Navbar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { SocialMedia } from "../../../components/SocialMedia/SocialMedia";

export const Integrations = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/integraciones");
  };

  const accessToOpenAI = () => {
    navigate("/openAI");
  };

  return (
    <>
      <BurguerNav />
      <div className="max-md:align-middle flex items-stretch max-lg:flex-col">
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
            <div className="integrations-sub-div">
              <img
                src="../../../../img/openai.png"
                className="ml-4 max-md:h-6 max-md:w-32 h-9"
              />
              <button
                onClick={() => accessToOpenAI()}
                className="boton-large boton-primario button-socialmedia max-lg:w-20"
              >
                Acceder
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
