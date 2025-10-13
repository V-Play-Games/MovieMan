import type {Movie} from "./movie.ts";

export class Game {
  movie: Movie
  guesses: string[] = []
  wrongGuesses: string[] = []
  name: string[]
  guessedName: number[] = []

  constructor(movie: Movie) {
    this.movie = movie
    this.name = movie.title.split("")
    for (let i = 0; i < this.name.length; i++) {
      const c = this.name[i].toLowerCase()
      if ("aeiou".includes(c) || c > "z" || c < "a") {
        this.guessedName.push(i)
      }
    }
    "AEIOU1234567890".split("").forEach(c => this.guesses.push(c))
  }

  public guess(letter: string) {
    letter = letter.toLowerCase()
    console.log(`Guessed Name: ${this.guessedName}`)
    if (this.guesses.includes(letter)) {
      return
    }
    let isCorrect = false
    for (let i = 0; i < this.name.length; i++) {
      const c = this.name[i].toLowerCase()
      if (c === letter) {
        isCorrect = true
        this.guessedName.push(i)
      }
    }
    if (isCorrect) {
      this.guesses.push(letter.toUpperCase())
    } else {
      this.wrongGuesses.push(letter.toUpperCase())
      if (this.wrongGuesses.length === 5) {
        this.wrongGuesses.push(" ")
      }
    }
  }

  public isGameLost(): boolean {
    return this.wrongGuesses.length >= 9;
  }

  public isGameWon(): boolean {
    return this.guessedName.length === this.name.length;
  }

  public isGameOver(): boolean {
    return this.isGameWon() || this.isGameLost();
  }
}
