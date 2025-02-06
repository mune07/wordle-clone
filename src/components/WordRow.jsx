export default function WordRow({ guess }) {
    return (
        <div className="guess-row">
            {guess.word.split("").map((letter, i) => (
                <span key={i} className={`letter-box ${guess.feedback[i]}`}>
                    {letter}
                </span>
            ))}
        </div>
    );
}
