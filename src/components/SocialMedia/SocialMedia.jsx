import "./SocialMedia.css"
import { useNavigate } from "react-router-dom";

export const SocialMedia =({imagenIcon, imagenWord})=>{
  const navigate = useNavigate();

    return (
      <div className="grid grid-cols-2 gap-40 bg-gris-claro">
        <div className="flex">
          <img src={imagenIcon} className="h-10" />
          <img src={imagenWord} className="ml-4 max-sm:h-10" />
        </div>
        <div className="flex max-sm:items-center">
          <button
            onClick={() => {
              navigate("/addintegrations");
            }}
            className="boton-large boton-primario button-socialmedia max-sm:h-7"
          >
            Agregar
          </button>
        </div>
      </div>
    );
}