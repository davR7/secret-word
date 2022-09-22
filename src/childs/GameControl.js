import './css/GameControl.css';
import { uniqueValues } from '../helpers/uniqueValues'
import { useState, useRef, useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

const GameControl = () => {
    const { gameProps, handlerGameProps, startGame } = useContext(GameContext)
    const { letters, score, points, guesses, guessedLetters, wrongLetters } = gameProps

    const [letter, setLetter] = useState("")
    const handlerLetter = ({ target }) => {
        const regex = /[\d\s,/./:/;/?/!/^/~/´/-/_]/g
        setLetter(target.value.replace(regex, ""))
    }

    const inputRef = useRef(null)

    const verifyLetter = letter => {
        const lowercase = letter.toLowerCase()

        const checkArrays = guessedLetters.includes(lowercase) ||
            wrongLetters.includes(lowercase)
        if (checkArrays) return

        if (letters.includes(lowercase)) {
            guessedLetters.push(lowercase)
            handlerGameProps({ guessedLetters })
        } else {
            wrongLetters.push(lowercase)
            handlerGameProps({
                wrongLetters,
                guesses: guesses - 1
            })
        }
    }

    const uniqueLetters = uniqueValues(letters)
    const victoryCondition = () => {
        guessedLetters.length === uniqueLetters.length && 
        startGame({ score: score + points })
    }

    const handlerSumbit = e => {
        e.preventDefault()
        verifyLetter(letter)
        victoryCondition()
        setLetter("")
        inputRef.current.focus()
    }

    return (
        <div className="game-control">
            <p className="game-control__text">Tente adivinhar uma letra da palavra:</p>
            <form onSubmit={handlerSumbit} className="game-control__form flex-row-c">
                <input
                    type="text"
                    name="letter"
                    onChange={handlerLetter}
                    value={letter}
                    ref={inputRef}
                    className="game-control__input"
                    maxLength="1"
                    required
                />
                <button className="game-control__btn btn" type="submit">Jogar</button>
            </form>
        </div>
    );
};

export default GameControl;