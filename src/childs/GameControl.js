import './css/GameControl.css'
import Button from './Button';
import { uniqueValues } from '../helpers/uniqueValues';
import { useState, useRef } from 'react';
import { useGame } from '../hooks/useGame';
import { MAX_WORD_REVEALS } from '../shared/constants';

const GameControl = () => {
    const { game, handlerGame, myWords, resetMyWords } = useGame()
    const { letters, guesses, guessedLetters, onPopUp, wrongLetters } = game

    const [letter, setLetter] = useState("")
    
    const handleLetter = ({ target }) => {
        const regex = /[^a-zA-ZÀ-ÿ]/g;
        const nextValue = target.value
            .replace(regex, "")
            .slice(0, 1)
            .toUpperCase();

        setLetter(nextValue);
    }

    const inputRef = useRef(null)

    const verifyLetter = letter => {
        const lowercase = letter.toLowerCase()

        const checkArrays = guessedLetters.includes(lowercase) ||
            wrongLetters.includes(lowercase)
        if (checkArrays) return

        if (letters.includes(lowercase)) {
            guessedLetters.push(lowercase)
            handlerGame({ guessedLetters })
        } else {
            wrongLetters.push(lowercase)
            handlerGame({
                wrongLetters,
                guesses: guesses - 1
            })
        }
    }

    const uniqueLetters = uniqueValues(letters)
    
    const handleGameResult = () => {
        const isWordLimitReached = myWords.length === MAX_WORD_REVEALS

        if (guessedLetters.length === uniqueLetters.length && isWordLimitReached) {
            handlerGame({ onPopUp: "victory" })
            return resetMyWords();
        }

        if (guessedLetters.length === uniqueLetters.length) {
            return handlerGame({ onPopUp: "continue" })
        }
    }

    const handlerSumbit = e => {
        e.preventDefault()
        verifyLetter(letter)
        handleGameResult()
        setLetter("")
        inputRef.current.focus()
    }

    return (
        <div className="game-control">
            <p className="game-control__text">Tente adivinhar uma letra da palavra:</p>
            <form onSubmit={handlerSumbit} className="game-control__form flex-row-xy">
                <input
                    type="text"
                    name="letter"
                    onChange={handleLetter}
                    value={letter}
                    ref={inputRef}
                    className="game-control__input"
                    required
                    disabled={onPopUp ?? false}
                />
                <Button className="game-control__btn" type="submit">Jogar</Button>
            </form>
        </div>
    );
};

export default GameControl