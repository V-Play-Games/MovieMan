import React from "react";

interface EnterKeyProps {
  index: string;
  currentGuess: string;
  handleGuess: (guess: string) => void;
}

export const EnterKey: React.FC<EnterKeyProps> = ({index, currentGuess, handleGuess}) =>
  <button
    key={index}
    className={`text-white text-sm md:text-base p-1.5 md:p-2 m-0.5 md:m-1 rounded duration-300 animate-all min-w-[50px] md:min-w-[65px] ${
      currentGuess === ""
        ? "bg-gray-500"
        : "bg-green-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    }`}
    onClick={() => handleGuess(currentGuess)}
    disabled={currentGuess === ""}
  >
    Enter
  </button>
