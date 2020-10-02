import React from "react";

export default function Header() {
  return (
    <>
      {/* header title */}
      <h1 className="mb-20 text-white text-center">
        <span className="block text-2xl opacity-75">
          Welcome to the App Platform
        </span>
        <span className="block text-6xl">Guest Book</span>
        <span className="block text-2xl opacity-75">by DigitalOcean</span>
      </h1>
    </>
  );
}
