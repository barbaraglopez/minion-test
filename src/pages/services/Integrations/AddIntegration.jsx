import "./AddIntegration.css"
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Navbar } from "../../../components/Navbar/Navbar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { SocialMedia } from "../../../components/SocialMedia/SocialMedia";
import { ConectSocialM } from "../../../components/SocialMedia/ConectSocialM";
import { useNavigate } from "react-router-dom";

export const AddIntegration = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/integraciones");
  };

  return (
    <div className="containerHome max-md:items-center flex items-stretch max-lg:flex-col w-full">
      <Sidebar />
      <BurguerNav />
      <div className="container p-5">
        <Navbar
          imagen={"../../../../img/Integraciones.svg"}
          displayInput={"hidden"}
          displayButton={"hidden"}
          nombre={"Sara Hebe"}
          funcionBoton={"Crear nueva sucursal"}
          funcionButtonAtras={handleReturn}
        />
        <div className="mx-auto max-w-screen-lg">
          <ConectSocialM />
        </div>
      </div>
    </div>
  );
};
