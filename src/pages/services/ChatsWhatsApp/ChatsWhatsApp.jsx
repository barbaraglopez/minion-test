import "./ChatsWhatsApp.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, useAuth } from "../../../context/useContext";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Navbar}  from "../../../components/Navbar/Navbar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import ClockLoader from "react-spinners/ClipLoader";
import Chats from "../../../components/Chats/Chats";
import Messages from "../../../components/Menssages/Messages";
/* import { getAllProducts } from '../products' */

export const ChatsWhatsApp = () => {
  const { setCard } = useContext(AppContext);

  const navigate = useNavigate();

  const [error, seetError] = useState(false);

  useEffect(() => {
  }, []);


  return (
    <>
      <BurguerNav />
      <div className="homeContainer flex items-stretch max-xl:justify-center">
        <Sidebar />
        <div className="container">
          <Navbar
            imagen={"../../../../img/Chats.svg"}
            displayButtonAtras={"hidden"}
            displayButton={"hidden"}
            displayInput={"hidden"}
          />
          <div className="flex items-stretch max-xl:flex-col p-5">
            <Chats />
            <div className="max-xl:hidden w-full h-full">
              <Messages/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
