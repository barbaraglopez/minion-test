import { useNavigate } from "react-router-dom";
import "./Sucursal.css";
export const Sucursal = ({sucursal, funcionBorrar}) => {
    const navigate = useNavigate();

    const handelClick = () => {
        navigate('/editar-sucursal', { state: { sucursal: sucursal } });
    }

    return (
      <div className="grid grid-cols-8 h-14">
        <div className="column-nom w-40">{sucursal.nombre}</div>
        <div className="column-lat w-40">{sucursal.latitud}</div>
        <div className="column-lon w-40">{sucursal.longitud}</div>
        <div className="column-dir w-32">{sucursal.direccion}</div>
        <div className="column-tel w-32">{sucursal.telefono}</div>
        <div className="column-ger w-40">Gerente</div>
        <div className="column-map w-48">
          <button className="boton-medium boton-mapa">Ver Mapa</button>
        </div>
        <div className="column-acc w-48 max-xl:w-20">
          <div className="action-buttons flex gap-2">
            <button
              onClick={() => handelClick()}
              className="boton-small boton-primario w-20"
            >
              Editar
            </button>
            <button onClick={() => funcionBorrar(sucursal._id)} className="boton-small boton-secundario">Borrar</button>
          </div>
        </div>
      </div>
    );
}