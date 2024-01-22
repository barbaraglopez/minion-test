import "./AddIntegration.css"
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Navbar } from "../../../components/Navbar/Navbar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { SocialMedia } from "../../../components/SocialMedia/SocialMedia";
import { ConectSocialM } from "../../../components/SocialMedia/ConectSocialM";

export const AddIntegration = () => {
  return (
    <div className="max-md:align-middle flex items-stretch max-lg:flex-col homeContainer">
      <Sidebar />
      <BurguerNav />
      <div className="container p-5">
        <Navbar
          imagen={"../../../../img/Integraciones.svg"}
          displayInput={"hidden"}
          displayButton={"hidden"}
          nombre={"Sara Hebe"}
          funcionBoton={"Crear nueva sucursal"}
        />
        <ConectSocialM/>
      </div>
    </div>
  );
};
