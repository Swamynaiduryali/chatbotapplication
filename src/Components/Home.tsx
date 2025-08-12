import { useState } from "react";
import { Icon } from "@iconify/react";

export const Home = () => {
  return (
      <div className="flex flex-col justify-center items-center h-full w-full bg-gray-900 gap-4">
        <h1 className="text-white text-3xl">Good Morning, James</h1>
        <div className="flex items-center px-2 bg-gray-700 rounded-xl w-1/2">
          <input
            type="text"
            placeholder="Ask the chatbot..."
            className="flex-1 bg-transparent p-3 text-white focus:outline-none"
          />
          <button className="text-green-300 px-3 border-2 border-green-300 rounded-lg p-1 h-10 w-10">
            <Icon icon="iconoir:send" />
          </button>
        </div>
      </div>
  );
};
