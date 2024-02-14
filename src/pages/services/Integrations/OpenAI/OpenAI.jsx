import {SelectorModeloOpenAI} from "./SelectorModeloOpenAI"
import { ConfigurarAPIKey } from "./ConfigurarAPIKey";
import { BurguerNav } from "../../../../components/BurguerNav/BurguerNav";
import { Sidebar } from "../../../../components/Sidebar/Sidebar";
import { Navbar } from "../../../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const OpenAI =()=>{
    const navigate = useNavigate();

    const handleReturn = () => {
      navigate("/integraciones");
    };

    return (
      <>
        <BurguerNav />
        <div className="containerHome max-md:align-middle flex items-stretch max-lg:flex-col">
          <Sidebar />
          <div className="lg:container p-5 flex-col">
            <Navbar
              imagen={"../../../../img/Integraciones.svg"}
              displayInput={"hidden"}
              displayButton={"hidden"}
              funcionButtonAtras={handleReturn}
            />
            <div className="grid grid-cols-1 gap-20 p-5 h-auto max-md:grid-cols-1 bg-gris-claro">
              <SelectorModeloOpenAI />
              <ConfigurarAPIKey />
            </div>
          </div>
        </div>
      </>
    );
}