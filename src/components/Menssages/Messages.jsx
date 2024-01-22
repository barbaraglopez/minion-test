import { useState, useContext } from "react";
import { useAuth, AppContext } from "../../context/useContext";

const Messages = () => {
  const { user } = useAuth();

  const Message = [
       {
         title: "Lorem",
         profile: "/../img/Profile_chats.svg",
       },
       {
          title: "Lorem fjfjfjfiewifjfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
         profile: "/../img/Profile_chats.svg",
       },
      ]

  return (
    <div className="flex flex-col gap-5 bg-slate-50 p-4 ml-10 w-full">
      <ul className="flex flex-col flex-wrap gap-3 bg-slate-50 p-4">
        {Message.map((Chat, index) => (
          <>
            <li
              key={index}
              className="flex p-3 items-center bg-white rounded-md hover:bg-slate-200 hover:cursor-pointer flex-wrap w-auto"
            >
              <div className="mr-3 flex flex-wrap">
                <img src={Chat.profile} className="h-5" />
              </div>
              <div className="text-sm font-medium leading-6 w-fit text-gray-900">
                {Chat.title}
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};


export default Messages