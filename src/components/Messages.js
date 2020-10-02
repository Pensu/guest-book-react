import React from "react";

export default function Message({ messages }) {
  return (
    <div className="space-y-6">
      {messages.map((message, index) => (
        <div
          key={index}
          className="p-10 bg-white rounded shadow-xl leading-relaxed text-gray-800"
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}
