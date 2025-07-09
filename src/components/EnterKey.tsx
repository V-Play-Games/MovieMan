import React from "react";

interface EnterKeyProps {
  index: string;
  currentGuess: string;
  handleGuess: (guess: string) => void;
}

export const EnterKey: React.FC<EnterKeyProps> = ({index, currentGuess, handleGuess}) => {
  return (
    <button
      key={index}
      className={`text-white text-sm p-2 m-1 rounded duration-300 animate-all ${
        currentGuess === ""
          ? "bg-gray-500"
          : "bg-green-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      }`}
      onClick={() => handleGuess(currentGuess)}
      disabled={currentGuess === ""}
    >
      Enter
    </button>
  )
}
