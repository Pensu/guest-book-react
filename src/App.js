import React, { useState, useEffect } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export default function App() {
  const [messages, setMessages] = useState([]);

  /**
   * Get all the messages on page load
   */
  useEffect(() => {
    getMessages();
  }, []);

  /**
   * Get all the messages from our API
   */
  function getMessages() {
    fetch(`${apiUrl}/messages`)
      .then((res) => res.json())
      .then(setMessages);
  }

  /**
   * Make the POST request to our API to create a message
   */
  function createMessage(text) {
    fetch(`${apiUrl}/messages`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => getMessages()); // triggers the above useEffect
  }

  // show an error if a user hasnt configured their REACT_APP_API_URL env variable
  if (!apiUrl)
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-center text-3xl text-white"
        style={{
          backgroundImage: `url('https://www.digitalocean.com/static/bg-home-hero-3-bb4b33b77274db09b969f629ad81c4d5.svg')`,
        }}
      >
        Please add your REACT_APP_API_URL environment variable.
      </div>
    );

  return (
    <div
      className="min-h-screen bg-center"
      style={{
        backgroundImage: `url('https://www.digitalocean.com/static/bg-home-hero-3-bb4b33b77274db09b969f629ad81c4d5.svg')`,
      }}
    >
      <div className="max-w-xl mx-auto px-10 py-20">
        {/* header title */}
        <h1 className="mb-20 text-white text-center">
          <span className="block text-2xl opacity-75">
            Welcome to the App Platform
          </span>
          <span className="block text-6xl">Guest Book</span>
          <span className="block text-2xl opacity-75">by DigitalOcean</span>
        </h1>

        {/* message form */}
        <p className="mb-3 text-xl text-white">Write a message!</p>
        <MessageForm createMessage={createMessage} />

        {/* show all messages */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Form component to create new messages
 */
function MessageForm({ createMessage }) {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    createMessage(message);
  }

  return (
    <form className="mb-10 flex" onSubmit={handleSubmit}>
      <input
        className="flex-grow rounded-l-lg bg-white outline-none focus:outline-none p-4"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className="flex-shrink bg-yellow-400 text-yellow-800 rounded-r-lg py-4 px-6">
        Add Message
      </button>
    </form>
  );
}

/**
 * Component to display messages. May be overkill
 */
function Message({ message }) {
  return (
    <div className="p-10 bg-white rounded shadow-xl leading-relaxed text-gray-800">
      {message.text}
    </div>
  );
}
