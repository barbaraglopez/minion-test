import "./Configuraciones.css"
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { Navbar } from "../../../components/Navbar/Navbar";
import {ParametrosBot} from "./ParametrosBot.jsx";
import {EstadoBot} from "./EstadoBot.jsx";
import {ControlBot} from "./ControlBot.jsx";

export const Configuraciones = () => {

  return (
    <>
      <BurguerNav />
      <div className="containerHome max-md:align-middle flex items-stretch max-lg:flex-col">
        <Sidebar />
        <div className="lg:container p-5 flex flex-col">
          <Navbar
            imagen={"../../../../img/Configuraciones.svg"}
            displayInput={"hidden"}
            displayButton={"hidden"}
            displayButtonAtras={"hidden"}
          />
          {/* <div className="grid grid-cols-1 containerDiv gap-5 mb-10 max-md:grid-cols-1 max-md:gap-2 max-md:mb-0 max-lg:h-auto max-lg:mb-5">
            <div className="bg-gris-claro rounded-md p-5 max-lg:h-auto ">
              <ParametrosBot />
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-5 mt-9 max-lg:grid-cols-1 max-md:gap-2 max-lg:mt-5">
            <div className="bg-gris-claro containerDivs rounded-md max-lg:h-auto max-lg:mb-5 max-lg:mt-5">
              {" "}
              <EstadoBot />
            </div>
            <div className="bg-gris-claro containerDivs rounded-md max-lg:mb-5 max-lg:h-full">
              <ControlBot />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
