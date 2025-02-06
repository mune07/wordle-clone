import { useState } from "react";

export default function Keyboard({ onSubmit }) {
    const [input, setInput] = useState("");

    const handleChange = (e) => setInput(e.target.value.toUpperCase());
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length === 5) {
            onSubmit(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="keyboard input-container">
            <input type="text" value={input} onChange={handleChange} maxLength="5" className="guess-input" />
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
}
