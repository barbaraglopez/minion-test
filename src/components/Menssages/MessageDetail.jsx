import React from "react";

export const MessageDetail = ({ message }) => {
  if (!message) {
    return <div>Loading...</div>; // Otra lógica para cuando el mensaje está undefined
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Detalle del Mensaje</h2>
      <p className="font-bold">{message.name}</p>
      <p className="text-sm text-gray-500">
        {new Date(message.lastMessageReceivedDate).toLocaleString()}
      </p>
      <p>{message.lastMessageReceived}</p>
    </div>
  );
};
