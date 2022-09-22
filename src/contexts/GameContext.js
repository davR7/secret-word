import { wordsList, categoryList, categoryPoints } from '../data/gameData';
import { pickWordCategoryPoints } from '../helpers/pickWordCategoryPoints';
import { createContext, useState } from 'react';

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
    const [gameProps, setGameProps] = useState({
        onStage: "start",
        onPopUp: "",
        category: "",
        points: 0,
        score: 0,
        square: 2,
        word: "",
        letters: [],
        guesses: 3,
        guessedLetters: [],
        wrongLetters: []
    })

    const handlerGameProps = newObj => {
        setGameProps({
            ...gameProps,
            ...newObj
        })
    }

    const startGame = (addObj = {}) => {
        const [category, word, points] = pickWordCategoryPoints(
        categoryList,
        wordsList,
        categoryPoints
        )

        const letters = word.split("").map(l => l.toLowerCase())

        const cleanLetters = {
            guessedLetters: [],
            wrongLetters: []
        }

        handlerGameProps({
            category,
            word,
            points,
            letters,
            square: 2,
            onStage: "game",
            ...cleanLetters,
            ...addObj
        });
    }

    const data = {
        gameProps,
        handlerGameProps,
        startGame
    }

    return (
        <GameContext.Provider value={data}>
            {children}
        </GameContext.Provider>
    );
}