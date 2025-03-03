import React from "react";

function GuessInput({addNewGuess, disabled}) {
  const [guess, setGuess] = React.useState("");

  return (
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(guess);
          addNewGuess(guess);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          disabled={disabled}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
          pattern="[A-Za-z]{5}"
        />
      </form>
  );
}

export default GuessInput;
