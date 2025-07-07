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
    game.wrongGuesses.includes(char) ? (
      <button key={index} className="bg-red-500 text-white p-2 m-1 rounded">{char}</button>
    ) : game.guesses.includes(char) ? (
      <button key={index} className="bg-gray-500 text-white p-2 m-1 rounded">{char}</button>
    ) : currentGuess === "" ? (
      <button
        key={index}
        className="bg-gray-800 text-white p-2 m-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-all"
        onClick={() => setCurrentGuess(char)}
      >
        {char}
      </button>
    ) : currentGuess === char ? (
      <button key={index} className="bg-blue-500 text-white p-2 m-1 rounded">{char}</button>
    ) : (
      <button key={index} className="bg-gray-500 text-white p-2 m-1 rounded">{char}</button>
    )
  )
}
