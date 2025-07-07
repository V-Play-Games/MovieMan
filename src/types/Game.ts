import type {Movie} from "./movie.ts";

export class Game {
  movie: Movie
  guesses: string[] = []
  wrongGuesses: string[] = []
  name: string[]
  autoRevealedName: number[] = []
  guessedName: number[] = []

  constructor(movie: Movie) {
    this.movie = movie
    this.name = movie.title.toLowerCase().split("")
    for (let i = 0; i < this.name.length; i++) {
      const c = this.name[i]
      if ("aeiou".includes(c) || c > "z") {
        this.autoRevealedName.push(i)
      }
    }
    "AEIOU1234567890".split("").forEach((c) => {
      this.guesses.push(c)
    })
  }

  public guess(letter: string): number[] {
    letter = letter.toLowerCase()
    if (!this.guesses.includes(letter)) {
      return [];
    }
    const tor = []
    for (let i = 0; i < this.name.length; i++) {
      const c = this.name[i]
      if (c === letter) {
        this.guessedName.push(i)
        tor.push(i)
      }
    }
    return tor;
  }
}
