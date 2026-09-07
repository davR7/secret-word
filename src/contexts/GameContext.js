import { createContext, useState } from "react";
import { initialGameState } from "./GameContextProps";
import { GameAudioController } from "./GameAudioController";
import { questionList } from "../data/gameData";
import { selectRandomQuestionWithPoints } from "../helpers/selectRandomQuestionWithPoints";

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
    const [game, setGame] = useState(initialGameState)
    const [myWords, setMyWords] = useState([]);

    const handlerGame = value => {
        setGame((prev) => ({
            ...prev,
            ...value
        }))
    }

    const handlerMyWords = value => {
        setMyWords(value)
    }

    const startGame = (newGame = { score: 0, onPopUp: "" }) => {
        const [points, question, words] = selectRandomQuestionWithPoints(questionList, myWords)

        const letters = question.word.split("").map(l => l.toLowerCase())

        const cleanLetters = {
            guessedLetters: [],
            wrongLetters: []
        }

        handlerMyWords(words);

        handlerGame({
            ...newGame,
            ...cleanLetters,
            points,
            question,
            letters,
            square: 2,
            onStage: "game",
        });
    }

    const gameOver = () => {
        handlerGame({
            onPopUp: "", 
            onStage: "end"
        })
    }
    
    const resetGame = () => {
        setGame({ ...initialGameState })
    }

    const resetMyWords = () => {
        setMyWords([])
    }

    return (
        <GameContext.Provider value={{ game, handlerGame, myWords, handlerMyWords, resetMyWords, startGame, gameOver, resetGame }}>
            <GameAudioController onStage={game.onStage} />
            {children}
        </GameContext.Provider>
    );
}
