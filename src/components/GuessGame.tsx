import React, {useEffect, useState} from "react";
import {Game} from "../types/Game";
import {Keyboard} from "./Keyboard";
import {FilterMenu} from "./FilterMenu";
import {MovieNameDisplay} from "./MovieNameDisplay";
import {GameEndModal} from "./GameEndModal";

const baseUrl = "https://movie.vaibhavgt0.hackclub.app";

export const GuessGame: React.FC = () => {
  const [game, setGame] = useState<Game | string>()
  const [guesses, setGuesses] = useState<string[]>([""])
  const [currentGuess, setCurrentGuess] = useState<string>("")
  const [years, setYears] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Fetch years and categories on mount
  useEffect(() => {
    fetch(baseUrl + '/years')
      .then(res => res.json())
      .then(setYears)
      .catch(() => setYears([]));
    fetch(baseUrl + '/categories')
      .then(res => res.json())
      .then(categories => categories.sort())
      .then(setCategories)
      .catch(() => setCategories([]));
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovie = () => {
    let url = baseUrl;
    const params: string[] = [];
    if (selectedYears.length > 0) params.push(`year=${selectedYears.join(',')}`);
    if (selectedCategories.length > 0) params.push(`category=${selectedCategories.join(',')}`);
    if (params.length > 0) url += '?' + params.join('&');
    setGame(undefined);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        return response.json();
      })
      .then(value => {
        if (value == null) {
          setGame('No movie found for the given filters!')
        } else {
          const game = new Game(value);
          setGame(game)
          setGuesses(game.guesses)
        }
      })
      .catch(() => {
        setGame('Error fetching movie data. Please try again later.');
      })
  };

  const handleGuess = (guess: string) => {
    if (game instanceof Game) {
      game.guess(guess)
      guesses.push(guess)
      setCurrentGuess("")
    }
  }

  return (
    <div className="bg-[#0e0f10] text-white w-screen h-screen">
      <header className="p-4 items-center text-center">
        <h1 className="mt-4 text-5xl font-bold">{
          "MOVIE MAN".split("").map((c, i) => (
            (c === " " || !(game instanceof Game) || game.wrongGuesses.length <= i) ? (
              <span key={i}>{c}</span>
            ) : (
              <span key={i} className="strikediag text-red-500">{c}<sub className="text-sm">{game.wrongGuesses[i]}</sub></span>
            )
          ))
        }</h1>
      </header>
      <FilterMenu
        years={years}
        categories={categories}
        selectedYears={selectedYears}
        selectedCategories={selectedCategories}
        setSelectedYears={setSelectedYears}
        setSelectedCategories={setSelectedCategories}
        onFetchMovie={fetchMovie}
      />


      <div className="flex flex-col items-center w-full content-center">
        {(game === undefined) ? (
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        ) : (game instanceof Game) ? (
          <div className="flex flex-col items-center w-full space-y-6">
            <MovieNameDisplay game={game}/>
            Year: {game.movie.year} |
            Category: {game.movie.category.split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")}
            {currentGuess === "" ? (
              <span>Guess a letter!</span>
            ) : (
              <span>Will you guess {currentGuess}?</span>
            )}
            <Keyboard game={game} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}
                      handleGuess={handleGuess}/>
            <GameEndModal
              game={game}
              onPlayAgain={fetchMovie}
              selectedYears={selectedYears}
              selectedCategories={selectedCategories}
            />
          </div>
        ) : (
          <div className="text-gray-600 dark:text-gray-300">{game}</div>
        )}
      </div>
    </div>
  )
}
