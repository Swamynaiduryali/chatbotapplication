import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blank");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900 gap-4">
      <h1 className="text-white text-3xl">Good Morning, James</h1>
      <div className="flex items-center px-2 bg-gray-700 rounded-xl w-1/2 max-w-xl">
        <input
          type="text"
          placeholder="Ask the chatbot..."
          className="flex-1 bg-transparent p-3 text-white focus:outline-none"
        />
        <button
          className="text-green-300 px-3 border-2 border-green-300 rounded-lg p-1 h-10 w-10"
          onClick={handleClick}
        >
          <Icon icon="iconoir:send" />
        </button>
      </div>
    </div>
  );
};

