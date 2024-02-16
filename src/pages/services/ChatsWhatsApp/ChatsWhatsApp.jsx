import "./ChatsWhatsApp.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, useAuth } from "../../../context/useContext";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { Navbar } from "../../../components/Navbar/Navbar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import axios from "axios";

export const ChatsWhatsApp = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const fetchMessages = () => {
    axios
      .get(`https://bot.yappastore.com/api/chats`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener mensajes:", error);
      });
  };

  const handleContactClick = (id, message, date) => {
    setSelectedContact(id);
    const formattedMessage = `${message}`;
    setSelectedMessage(formattedMessage);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <BurguerNav />
      <div className="homeContainer flex items-stretch">
        <Sidebar />
        <div className="container p-5">
          <Navbar
            imagen={"../../../../img/Chats.svg"}
            displayButtonAtras={"hidden"}
            displayInput={"hidden"}
            displayButton={"hidden"}
          />
          <div className="flex flex-row h-screen">
            <div className="w-1/2 border-r border-gray-300">
              <input
                type="text"
                placeholder="Buscar contacto..."
                value={searchValue}
                onChange={handleSearchChange}
                className="text-lg font-bold p-4 w-full"
              />
              <ul className="divide-y divide-gray-300">
                {messages
                  .filter((contact) =>
                    contact.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .map((contact) => (
                    <li
                      key={contact.id}
                      onClick={() =>
                        handleContactClick(
                          contact.id,
                          contact.lastMessageReceived,
                          contact.lastMessageReceivedDate
                        )
                      }
                      className={`p-4 cursor-pointer ${
                        selectedContact === contact.id ? "bg-gray-200" : ""
                      }`}
                    >
                      <p className="font-bold">{contact.name}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(
                          contact.lastMessageReceivedDate
                        ).toLocaleString()}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold p-4">Mensajes</h1>
              <div className="p-4">
                {selectedMessage && (
                  <div className="mb-4">
                    <p>{selectedMessage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
