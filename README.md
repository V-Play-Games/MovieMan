# Movie Man

A hangman-style game where players guess movie titles letter by letter.<br/>
Inspired by the pen and paper game "Bollywood" which I used to play back in school.

## Features

### Core Gameplay

- **Hangman-Style Guessing**: Players guess one letter at a time to reveal a hidden movie title
- **Auto-Revealed Characters**: Vowels (A, E, I, O, U) and numbers/special characters are automatically revealed
- **Visual Feedback**: Wrong guesses are tracked visually with the "MOVIE MAN" title being crossed out letter by letter
- **Win/Loss Conditions**:
  - Win: Successfully guess all consonants in the movie title
  - Lose: Make 8 incorrect guesses

### Movie Filtering System

- **Filter Menu**: Toggleable interface for selecting specific movie criteria:
  - Filter by Year: Select one or multiple years
  - Filter by Category: Choose from various movie categories
- **Multiple Selection**: Support for selecting multiple years and categories simultaneously
- **Applied Filters**: Filters are sent to the API when fetching a new movie.
This was made possible by the [Wikipedia Movie API](https://github.com/V-Play-Games/wikipedia-movie-api)

## How to Play

1. The game starts with a random movie title hidden behind underscores.
2. All vowels (A, E, I, O, U), numbers, and special characters are automatically revealed.
3. Click on a letter from the on-screen keyboard to make a guess.
4. If the letter is in the movie title, it will be revealed in all positions.
5. If the letter is not in the title, it counts as a wrong guess and part of "MOVIE MAN" gets crossed out.
6. You win if you successfully reveal the entire movie title.
7. You lose if you make 8 incorrect guesses (i.e. the "MOVIE MAN" title is fully crossed out).
8. After the game ends, you'll see all details about the movie and can choose to play again.

## Filtering Movies

1. Click the menu button in the top right corner to open the filter menu.
2. Select one or multiple years and/or categories.
3. Click "Apply" to fetch a new movie matching your criteria.
4. The same filters will be applied when using "Play Again" from the game end screen.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Ktor

## Future Enhancements

Potential future improvements to the game could include:
- User accounts to track statistics
- Star system for fastest guesses
- Leaderboards for most stars
- Difficulty levels that reveal fewer characters initially
- Hint system for challenging movie titles

## Screenshots
![Screenshot 2025-07-10 005039.png](assets/Screenshot%202025-07-10%20005039.png)
![Screenshot 2025-07-10 005102.png](assets/Screenshot%202025-07-10%20005102.png)
![Screenshot 2025-07-10 005838.png](assets/Screenshot%202025-07-10%20005838.png)
![Screenshot 2025-07-10 005911.png](assets/Screenshot%202025-07-10%20005911.png)
