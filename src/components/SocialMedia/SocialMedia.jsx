import "./SocialMedia.css"
import { useNavigate } from "react-router-dom";

export const SocialMedia =({imagenIcon, imagenWord})=>{
  const navigate = useNavigate();

    return (
      <div
        className="grid grid-cols-2 w-full
       bg-gris-claro"
      >
        <div className="flex max-lg:items-center">
          <img src={imagenIcon} className="h-10 ml-4 max-lg:h-6" />
          <img
            src={imagenWord}
            className="ml-4 max-lg:h-6 max-sm:ml-1 max-sm:w-28"
          />
        </div>
        <div className="flex max-sm:items-center justify-end">
          <button
            onClick={() => {
              navigate("/addintegrations");
            }}
            className="boton-large boton-primario button-socialmedia max-lg:w-20"
          >
            Agregar
          </button>
        </div>
      </div>
    );
}