import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BurguerNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
       icon: "/img/Message_circle.svg",
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
      title: "Cerrar sesion",
      url: "/login",
      icon: "/img/Logout.svg",
    },
   ];

  return (
    <div
      className="flex items-center justify-between border-b border-gray-400 py-8 hidden max-lg:block max-lg:flex max-lg:justify-between p-5 w-screen containerNav">
      <div>
        <img
          src="../../../img/Icono_minion_app.svg"
          className="h-7 ml-3"/>
      </div>
      <nav>
        <section
          className="MOBILE-MENU flex lg:hidden items-center">
            <img
              src="../../../img/Profile.svg"
              className="h-8 ml-4"/>
            <div
              className='HAMBURGER-ICON space-y-2 h-8 ml-4 p-1 hover:cursor-pointer'
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
            <span
              className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span
              className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span
              className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
            <div
              className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}>
                <svg
                  className="h-8 w-8 text-gray-600 hover:cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                  className='hover:cursor-pointer'/>
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                   />
                </svg>
              </div>
              <ul
                className="flex flex-col items-center justify-between min-h-[250px]">
                {Menus.map((menu, index) => (
                  <li
                    key={index}
                    onClick={() => navigate(menu.url)}
                    className="border-b border-gray-400 my-8 uppercase justify-center flex bg-slate-100 h-12 mt-2 items-center rounded-xl hover:bg-slate-200 hover:cursor-pointer">
                    <div className='iconContainer'>
                      <img
                        src={menu.icon} className='ml-4 mr-2'/>
                    </div>
                    <div className='mr-5'>{menu.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </nav>
        <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
    `   }</style>
    </div>
  );
};
