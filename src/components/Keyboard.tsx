import React from "react";
import type {Game} from "../types/Game.ts";
import {EnterKey} from "./EnterKey.tsx";
import {BackspaceKey} from "./BackspaceKey.tsx";
import {Key} from "./Key.tsx";

interface KeyboardProps {
  game: Game;
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
  handleGuess: (guess: string) => void;
}

export const Keyboard: React.FC<KeyboardProps> = ({game, currentGuess, setCurrentGuess, handleGuess}) => {
  const rows = "1 2 3 4 5 6 7 8 9 0\nQ W E R T Y U I O P\nA S D F G H J K L\nENTER Z X C V B N M BACKSPACE";
  return (
    <div className="absolute bottom-0 container max-w-4xl">
      {rows.split("\n").map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap contain-content justify-center">
          {row.split(" ").map((key, index) => (
            key === "ENTER" ? (
              <EnterKey index={`${rowIndex}-${index}`} currentGuess={currentGuess} handleGuess={handleGuess}/>
            ) : key === "BACKSPACE" ? (
              <BackspaceKey index={`${rowIndex}-${index}`} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
            ) : (
              <Key char={key} index={`${rowIndex}-${index}`} game={game} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
            )
          ))}
        </div>
      ))}
    </div>
  )
}
