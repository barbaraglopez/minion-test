import "./Chats.css"
import { useNavigate } from "react-router-dom";

function Chats() {
  const navigate = useNavigate();
  /* function navigateTo(){
    navigate("/messages");
  } */

     const chat = [
       {
         title: "Luis Fernando Paya",
         date: "24/24/24",
         profile: "/../img/Profile_chats.svg",
       },
       {
         title: "Luis Fernando Paya",
         date: "24/24/24",
         profile: "/../img/Profile_chats.svg",
       },
       {
         title: "Luis Fernando Paya",
         date: "24/24/24",
         profile: "/../img/Profile_chats.svg",
       },
       {
         title: "Luis Fernando Paya",
         date: "24/24/24",
         profile: "/../img/Profile_chats.svg",
       },
       {
         title: "Luis Fernando Paya",
         date: "24/24/24",
         profile: "/../img/Profile_chats.svg",
       },
       {
         title: "Luis Fernando Paya",
         date: "24/24/24",
         profile: "/../img/Profile_chats.svg",
       },
       {
         title: "Luis Fernando Paya",
         date: "24/24/24",
         profile: "/../img/Profile_chats.svg",
       },
     ];


    return (
      <div>
        <ul className="flex flex-col items-center gap-3 bg-slate-50 p-4 w-full max-xl:w-full">
          {chat.map((Chat, index) => (
            <>
              <li
                key={index}
                className="flex mb-4 p-3 h-16 w-80 items-center bg-white rounded-md hover:bg-slate-200 hover:cursor-pointer max-xl:w-full max-xl:p-2"
              >
                <div className="mr-3 flex">
                  <img src={Chat.profile} className="h-11" />
                </div>
                <div className="text-sm font-medium leading-6 text-gray-900">
                  {Chat.title}
                </div>
                <div className="text-xs ml-12 font-light leading-6 text-gray-800">
                  {Chat.date}
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
}

export default Chats;
