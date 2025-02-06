Wordle Clone
A simple Wordle-like game built using React. The game allows users to guess a 5-letter word within 6 attempts. The feedback is color-coded to indicate whether the guessed letters are correct, misplaced, or incorrect.

Features
Core Features:
Game Logic:

The user has 6 attempts to guess a 5-letter word.
Color-coded feedback after each guess:
Green: Correct letter in the correct position.
Yellow: Correct letter in the wrong position.
Gray: Incorrect letter.
Prevents invalid words from being submitted.
UI/UX:

A grid displaying previous guesses with color-coded feedback.
A message indicating if the user wins or loses.
A "New Game" button to restart the game.
State Management:

Manages guessed words, remaining attempts, and game status.
Performance & Code Quality:

Clean, modular, and readable code.
Proper component structure.
Bonus (Optional):
Animations for letter feedback.
Dark mode toggle.
Tech Stack
React/NextJS
CSS or TailwindCSS for styling
No backend (words are hardcoded)
Installation
Clone the repository:
git clone https://github.com/your-username/wordle-clone.git
2.Navigate to the project folder:

cd wordle-clone
3.Install the dependencies:
npm install
4.Start the development server:
npm start
