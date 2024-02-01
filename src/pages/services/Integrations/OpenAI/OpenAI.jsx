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
        <div className="homeContainer max-md:align-middle flex items-stretch max-lg:flex-col">
          <Sidebar />
          <div className="lg:container p-5 flex-col">
            <Navbar
              imagen={"../../../../img/Integraciones.svg"}
              displayInput={"hidden"}
              displayButton={"hidden"}
              funcionButtonAtras={handleReturn}
            />
            <div className="grid grid-cols-1 gap-20 p-16 h-80 max-md:grid-cols-1">
              <SelectorModeloOpenAI/>
              <ConfigurarAPIKey/>
            </div>
          </div>
        </div>
      </>
    );
}