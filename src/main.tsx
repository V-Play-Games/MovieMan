import {createRoot} from 'react-dom/client'
import '../index.css'
import {GuessGame} from "./components/GuessGame.tsx";

createRoot(document.getElementById('root')!).render(<GuessGame/>)
