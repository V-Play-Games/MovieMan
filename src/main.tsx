import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '../index.css'
import {GuessGame} from "./components/GuessGame.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-[#0e0f10] text-white w-screen h-screen">
      <header className="p-4 iterms-center text-center">
        <h1 className="text-2xl font-bold">Movie Guesser (alpha)</h1>
        <p className="p-4">
          This is a simple movie guessing game. Try to guess the movie based on the hints provided.
        </p>
      </header>
      <div>
        <GuessGame/>
      </div>
    </div>
  </StrictMode>
)
