import React from "react";
import {Game} from "../types/Game";

interface GameModalProps {
  game: Game;
  onPlayAgain: () => void;
  yearRange: { min: number; max: number };
  allYears: string[];
  selectedCategories: string[];
}

export const GameEndModal: React.FC<GameModalProps> =
  ({
     game,
     onPlayAgain,
     yearRange,
     allYears,
     selectedCategories
   }) => {
    if (!game.isGameOver()) return null;

    const movie = game.movie;
    const isWon = game.isGameWon();

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[#1a1b1c] border border-gray-700 rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl">
          <div className="flex flex-col">
            <h2 className={`text-3xl font-bold mb-4 ${isWon ? 'text-green-500' : 'text-red-500'}`}>
              {isWon ? 'You Won!' : 'Game Over!'}
            </h2>

            <div className="mb-4">
              <p className="text-xl font-semibold mb-2">The movie was:</p>
              <p className="text-2xl font-bold text-yellow-400">{game.name.join("")}</p>
            </div>

            <div className="bg-[#2a2b2c] p-4 rounded mb-4">
              <h3 className="text-lg font-semibold mb-2">Movie Details:</h3>
              <div className="space-y-1 text-gray-300">
                <p><span className="font-medium text-white">Year:</span> {movie.year}</p>
                <p><span
                  className="font-medium text-white">Category:</span> {movie.category.split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")}
                </p>
                {movie.director && <p><span className="font-medium text-white">Director:</span> {movie.director}</p>}
                {movie.genre && <p><span className="font-medium text-white">Genre:</span> {movie.genre.join(", ")}</p>}
                {movie.cast && <p><span className="font-medium text-white">Cast:</span> {movie.cast}</p>}
              </div>
            </div>

            {(yearRange.min !== parseInt(allYears[0]) || yearRange.max !== parseInt(allYears[allYears.length - 1]) || selectedCategories.length !== 0) && (
              <div className="bg-[#2a2b2c] p-4 rounded mb-6">
                <h3 className="text-lg font-semibold mb-2">Filter Used:</h3>
                <div className="text-gray-300">
                  {(yearRange.min !== parseInt(allYears[0]) || yearRange.max !== parseInt(allYears[allYears.length - 1])) && (
                    <p><span className="font-medium text-white">Years:</span> {yearRange.min} - {yearRange.max}</p>
                  )}
                  {selectedCategories.length > 0 && (
                    <p><span className="font-medium text-white">Categories:</span> {selectedCategories.map(cat =>
                      cat.split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")
                    ).join(", ")}</p>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  You can play again with the same filters by clicking the button below.
                </p>
              </div>
            )}

            <button
              onClick={onPlayAgain}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  };
