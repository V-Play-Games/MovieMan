import React from "react";

interface BackspaceKeyProps {
  index: string;
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
}

export const BackspaceKey: React.FC<BackspaceKeyProps> = ({index, currentGuess, setCurrentGuess}) => {
  return (
    <button
      key={index}
      className={`material-symbols-outlined p-2 m-1 rounded text-white duration-300 animate-all ${
        currentGuess === ""
          ? "bg-gray-500"
          : "bg-red-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      }`}
      onClick={currentGuess === "" ? undefined : () => setCurrentGuess("")}
    >
      backspace
    </button>
  )
}
