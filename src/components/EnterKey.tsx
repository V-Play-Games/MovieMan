import React from "react";

interface EnterKeyProps {
  index: string;
  currentGuess: string;
  handleGuess: (guess: string) => void;
}

export const EnterKey: React.FC<EnterKeyProps> = ({index, currentGuess, handleGuess}) => {
  return (
    currentGuess === "" ? (
      <button
        key={index}
        className="bg-gray-500 text-white text-sm p-2 m-1 rounded"
      >
        Enter
      </button>
    ) : (
      <button
        key={index}
        className="bg-green-500 text-white text-sm p-2 m-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-all"
        onClick={() => handleGuess(currentGuess)}
      >
        Enter
      </button>
    )
  )
}
