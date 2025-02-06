import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import Message from "./components/Message";
import NewGameButton from "./components/NewGameButton";
import "./styles.css";


const SECRET_WORD = "PLANT";

export default function App() {
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const checkGuess = (guess) => {
    return guess.split("").map((letter, i) => {
      // letter in the correct position
      if (letter === SECRET_WORD[i]) return "green";
      //  letter but in the wrong position
      if (SECRET_WORD.includes(letter)) return "yellow";
      // If it's not correct, it's gray
      return "gray";
    });
  };

  const handleSubmit = (input) => {
    if (gameOver || input.length !== 5) return;

    const guess = input.toUpperCase();
    const feedback = checkGuess(guess);

    if (guess === SECRET_WORD) {
      setMessage("You won! 🎉");
      setGameOver(true);
    } else if (guesses.length + 1 >= 6) {
      setMessage(`Game Over! The word was "${SECRET_WORD}"`);
      setGameOver(true);
    }

    setGuesses([...guesses, { word: guess, feedback }]);
  };

  const handleNewGame = () => {
    setGuesses([]);
    setMessage("");
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1 className="text-2xl font-bold">Wordle Clone</h1>
      <GameBoard guesses={guesses} />
      <Keyboard onSubmit={handleSubmit} />
      <Message text={message} />
      <NewGameButton onClick={handleNewGame} />
    </div>
  );
}
