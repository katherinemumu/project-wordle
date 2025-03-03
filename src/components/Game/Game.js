import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  let won = false;
  let lost = false;

  // if the last guess is the answer, set won to true
  if (guesses[guesses.length - 1] === answer) {
    won = true;
  }

  // if there are 6 guesses, set lost to true
  if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
    lost = true;
  }

  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess
          result={checkGuess(guess, answer)}
          key={`${guess}-${Math.random()}`}
        />
      ))}
      <GuessInput
        disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED || won || lost}
        addNewGuess={(guess) => setGuesses([...guesses, guess])}
      />
      {won && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>{" "}
        </div>
      )}
      {lost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default Game;
