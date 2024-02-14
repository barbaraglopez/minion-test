// En Sucursal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export const Sucursal = ({ sucursal, funcionBorrar, isCompact }) => {
  const navigate = useNavigate();

  /* Funcion para enviar la informacion de sucursal */
  const handelClick = () => {
    navigate("/editar-sucursal", { state: { sucursal: sucursal } });
  };

  return (
    <>
      {isCompact ? (
        <div className="bg-white rounded-lg shadow-md p-4">
          <p>
            <strong>Nombre:</strong> {sucursal.nombre}
          </p>
          <p>
            <strong>Latitud:</strong> {sucursal.latitud}
          </p>
          <p>
            <strong>Longitud:</strong> {sucursal.longitud}
          </p>
          <p>
            <strong>Dirección:</strong> {sucursal.direccion}
          </p>
          <p>
            <strong>Teléfono:</strong> {sucursal.telefono}
          </p>
          <p>
            <strong>Gerente:</strong> Gerente
          </p>
          <button className="boton-medium boton-mapa mt-2">Ver Mapa</button>
          <div className="action-buttons flex gap-2 mt-2">
            <button
              onClick={() => handelClick()}
              className="boton-small boton-primario w-20"
            >
              Editar
            </button>
            <button
              onClick={() => funcionBorrar(sucursal._id)}
              className="boton-small boton-secundario"
            >
              Borrar
            </button>
          </div>
        </div>
      ) : (
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">{sucursal.nombre}</td>
          <td className="px-6 py-4 whitespace-nowrap">{sucursal.latitud}</td>
          <td className="px-6 py-4 whitespace-nowrap">{sucursal.longitud}</td>
          <td className="px-6 py-4 whitespace-nowrap">{sucursal.direccion}</td>
          <td className="px-6 py-4 whitespace-nowrap">{sucursal.telefono}</td>
          <td className="px-6 py-4 whitespace-nowrap">Gerente</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="boton-medium boton-mapa">Ver Mapa</button>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="action-buttons flex gap-2">
              <button
                onClick={() => handelClick()}
                className="boton-small boton-primario w-20"
              >
                Editar
              </button>
              <button
                onClick={() => funcionBorrar(sucursal._id)}
                className="boton-small boton-secundario"
              >
                Borrar
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};
