import './Sidebar.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {useAuth} from '../../context/useContext'

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

    const Menus = [
      {
        title: "Home",
        url: "/home",
        icon: "/img/Settings.svg",
      },
      {
        title: "Chats",
        url: "/chatswhatsapp",
        icon: "/../img/Message_circle.svg",
      },
      {
        title: "Prompts",
        url: "/prompts",
        icon: "/img/Union.svg",
      },
      {
        title: "Sucursales",
        url: "/sucursales",
        icon: "/img/Home.svg",
      },
      {
        title: "Integraciones",
        url: "/integraciones",
        icon: "/img/Vector.svg",
      },
      {
        title: "Parametros",
        url: "/parametros",
        icon: "/img/Settings.svg",
      },
    ];

  return (
    <div className="flex flex-col w-60 bg-gris-claro justify-between max-lg:hidden">
      <ul className="flex flex-col gap-5 m-5 ">
        <img src="../../../img/Icono_minion_app.svg" className="p-5" />
          {
            Menus.map((menu, index) => (
              <li onClick={() => navigate(menu.url)} key={index} className="elemento-sidebar flex mb-4 p-3 items-center bg-white rounded-md opciones">
                <div className="mr-3 flex">
                  <img src={menu.icon} className={`h-5`} />
                </div>
                <div className="text-sm font-medium leading-6 text-gray-900">
                  {menu.title}
                </div>
              </li>
            ))
          }
      </ul>
      <div className="flex gap-3 m-5">
        <div className="flex items-center bg-white rounded-md hover:bg-slate-300 hover:cursor-pointer p-3 w-56 text-sm font-medium leading-6 text-gray-900">
          <img src="/img/Logout.svg" className="h-5 mr-2" />
          <button onClick={() => navigate("/login")}>Cerrar sesion</button>
        </div>
      </div>
    </div>
  );
}
