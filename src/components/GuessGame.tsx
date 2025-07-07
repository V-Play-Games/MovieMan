import React, {useEffect, useState} from "react";
import {Game} from "../types/Game.ts";
import {Keyboard} from "./Keyboard.tsx";

const baseUrl = "http://127.0.0.1:8080?category=bollywood,hindi";

export const GuessGame: React.FC = () => {
  const [game, setGame] = useState<Game | null>(null)
  const [guesses, setGuesses] = useState<string[]>([""])
  const [currentGuess, setCurrentGuess] = useState<string>("")

  useEffect(() => {
    fetch(baseUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        return response.json();
      })
      .then(value => {
        if (value == null) {
          setGame(null)
        } else {
          const game = new Game(value);
          setGame(game)
          setGuesses(game.guesses)
        }
      })
  }, [])

  const handleGuess = (guess: string) => {
    game!.guess(guess)
    setGuesses([...guesses, guess])
    setCurrentGuess("")
  }

  return (
    <div className="flex justify-center items-center w-full content-center">
      {(game === undefined) ? (
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      ) : (game === null) ? (
        <div className="text-gray-600 dark:text-gray-300">No movie found for the given filters!</div>
      ) : (
        <div className="flex flex-col items-center w-full space-y-6">
          <div>{
            game.name.map((c, index) => (
              (c === ' ') ? (
                <button key={index} className="text-gray-500 dark:text-gray-400">/</button>
              ) : game.autoRevealedName.includes(index) || game.guessedName.includes(index) ? (
                <button key={index}
                        className="bg-gray-200 dark:bg-green-700 text-gray-800 dark:text-gray-200 p-2 m-1 rounded">{c}</button>
              ) : (
                <button key={index}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 m-1 rounded">_</button>
              )
            ))
          }</div>
          Year: {game.movie.year} |
          Category: {game.movie.category.split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")}
          <div>{
            currentGuess === "" ? (<span>Guess a letter!</span>) : (<span>Will you guess {currentGuess}?</span>)
          }</div>
          <Keyboard game={game} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} handleGuess={handleGuess}/>
        </div>
      )}
    </div>
  )
}
