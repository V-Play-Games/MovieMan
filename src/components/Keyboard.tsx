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
  const rows = "Q W E R T Y U I O P\nA S D F G H J K L\nENTER Z X C V B N M BACKSPACE";
  return (
    <div className="fixed left-0 right-0 bottom-0 w-full flex justify-center bg-[#0e0f10] pb-2 md:pb-4 px-1 md:px-2">
      <div className="w-full max-w-4xl flex flex-col">
        {rows.split("\n").map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-nowrap justify-center">
            {row.split(" ").map((key) => (
              key === "ENTER" ? (
                <EnterKey index={key} currentGuess={currentGuess} handleGuess={handleGuess}/>
              ) : key === "BACKSPACE" ? (
                <BackspaceKey index={key} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
              ) : (
                <Key char={key} index={key} game={game} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
              )
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
