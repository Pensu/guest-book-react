import React, { useState } from "react";
import { createMessage } from "../api-stuff";

/**
 * Form component to create new messages
 */
export default function MessageForm({ addMessage }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setText("");
    createMessage(text).then(addMessage);
  }

  return (
    <form className="mb-10 flex" onSubmit={handleSubmit}>
      <input
        className="flex-grow rounded-l-lg bg-white outline-none focus:outline-none p-4"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="flex-shrink bg-yellow-400 text-yellow-800 rounded-r-lg py-4 px-6">
        Add Message
      </button>
    </form>
  );
}
