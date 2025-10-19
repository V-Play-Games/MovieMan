import React from "react";
import {Game} from "../types/Game.ts";

interface KeyProps {
  index: string
  char: string,
  game: Game,
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
}

export const Key: React.FC<KeyProps> = ({index, char, game, currentGuess, setCurrentGuess}) => {
  return (
    <button
      key={index}
      className={`text-white text-base md:text-2xl p-1.5 md:p-2 m-0.5 md:m-1 rounded duration-300 animate-all min-w-[32px] md:min-w-[44px] ${
        game.wrongGuesses.includes(char) ? (
          "bg-red-500"
        ) : game.guesses.includes(char) ? (
          "bg-gray-500"
        ) : currentGuess === "" ? (
          "bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ) : currentGuess === char ? (
          "bg-blue-500"
        ) : (
          "bg-gray-500"
        )}`
      }
      onClick={() => setCurrentGuess(char)}
      disabled={currentGuess !== "" || game.guesses.includes(char) || game.wrongGuesses.includes(char)}
    >
      {char}
    </button>)
}
