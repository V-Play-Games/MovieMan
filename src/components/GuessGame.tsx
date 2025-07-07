import React, {useEffect, useState} from "react";
import {Game} from "../types/Game.ts";
import {Keyboard} from "./Keyboard.tsx";

const baseUrl = "http://127.0.0.1:8080"

export const GuessGame: React.FC = () => {
  const [game, setGame] = useState<Game | null>()
  // const [guesses, setGuesses] = useState<string[]>([])
  useEffect(() => {
    fetch(baseUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        return response.json();
      })
      .then(value => {
        if (value.size === 0) {
          setGame(null)
        } else {
          setGame(new Game(value))
        }
      })
  })

  return (
    (game === undefined) ? (
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    ) : (game === null) ? (
      <div className="text-gray-600 dark:text-gray-300">No movie found for the given filters!</div>
    ) : (
      <Keyboard game={game}/>
    )
  )
}
