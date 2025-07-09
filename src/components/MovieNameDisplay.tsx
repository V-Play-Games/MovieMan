import React from "react";
import { Game } from "../types/Game";

interface MovieNameDisplayProps {
  game: Game;
}

export const MovieNameDisplay: React.FC<MovieNameDisplayProps> = ({ game }) => (
  <div className="flex flex-row flex-wrap items-center justify-center mb-2">
    {game.name.map((c, index) => (
      (c === ' ') ? (
        <button key={index} className="text-gray-500 dark:text-gray-400 text-5xl">/</button>
      ) : game.autoRevealedName.includes(index) || game.guessedName.includes(index) ? (
        <button key={index}
                className="bg-gray-200 dark:bg-green-700 text-gray-800 dark:text-gray-200 p-2 ml-1 rounded">{c}</button>
      ) : (
        <button key={index}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 ml-1 rounded">_</button>
      )
    ))}
  </div>
);

