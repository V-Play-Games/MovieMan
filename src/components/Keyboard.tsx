import React from "react";
import type {Game} from "../types/Game.ts";
import {EnterKey} from "./EnterKey.tsx";
import {BackspaceKey} from "./BackspaceKey.tsx";
import {Key} from "./Key.tsx";

interface KeyboardProps {
  game: Game;
}

export const Keyboard: React.FC<KeyboardProps> = ({game}) => {
  const rows = "1 2 3 4 5 6 7 8 9 0\nQ W E R T Y U I O P\nA S D F G H J K L\nENTER Z X C V B N M BACKSPACE";
  return (
    <>
      <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=backspace"/>
      {rows.split("\n").map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap contain-content justify-center">
          {row.split(" ").map((key, index) => (
            key === "ENTER" ? (
              <EnterKey index={`${rowIndex}-${index}`}/>
            ) : key === "BACKSPACE" ? (
              <BackspaceKey index={`${rowIndex}-${index}`}/>
            ) : (
              <Key char={key} index={`${rowIndex}-${index}`} game={game}/>
            )
          ))}
        </div>
      ))}
    </>
  )
}
