import React from "react";

interface BackspaceKeyProps {
  index: string;
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
}

export const BackspaceKey: React.FC<BackspaceKeyProps> = ({index, currentGuess, setCurrentGuess}) => {
  return (
    currentGuess === "" ? (
      <button
        key={index}
        className="bg-gray-500 text-white material-symbols-outlined p-2 m-1 rounded"
      >
        backspace
      </button>
    ) : (
      <button
        key={index}
        className="bg-red-500 text-white material-symbols-outlined p-2 m-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-all"
        onClick={() => setCurrentGuess("")}
      >
        backspace
      </button>
    )
  )
}
