import { MAX_GUESSES, MAX_REVEALED_LETTERS } from "../shared/constants";

export const initialGameState = {
  onStage: "start",
  onPopUp: "",
  points: 0,
  score: 0,
  revealedLetters: MAX_REVEALED_LETTERS,
  question: {
    word: "",
    clue: "",
  },
  letters: [],
  guesses: MAX_GUESSES,
  guessedLetters: [],
  wrongLetters: [],
};
