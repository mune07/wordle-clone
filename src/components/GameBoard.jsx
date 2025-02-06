import WordRow from "./WordRow";

export default function GameBoard({ guesses }) {
    return (
        <div className="guess-grid">
            {guesses.map((guess, index) => (
                <WordRow key={index} guess={guess} />
            ))}
        </div>
    );
}

