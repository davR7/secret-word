import './css/SecretWord.css'
import { useGame } from '../hooks/useGame'


const SecretWord = () => {
    const { game, handlerGame } = useGame()
    const { letters, score, revealedLetters, points, guesses, guessedLetters } = game
    
    const handlerSquare = index => {
        if (revealedLetters > 0 && letters.length < 6){
            guessedLetters.push(letters[index])
            handlerGame({ revealedLetters: revealedLetters - 2})
        }else if (revealedLetters > 0 && letters.length >= 6){
            guessedLetters.push(letters[index])
            handlerGame({ revealedLetters: revealedLetters - 1})
        }
    }

    return (
        <div className="secret-word flex-column-xy">
            <div className="display flex-row-xy">
                <p className="display__item score">
                    <span className="display__icon">⭐</span>
                    <span className="display__label">
                        <span className="display__name">Score:</span>
                        <span className="display__value">{score}</span>
                    </span>
                </p>
                <p className="display__item points">
                    <span className="display__icon">🏆</span>
                    <span className="display__label">
                        <span className="display__name">Prêmio:</span>
                        <span className="display__value">{points}</span>
                    </span>
                </p>
                <p className="display__item guesses">
                    <span className="display__icon">❤️</span>
                    <span className="display__label">
                        <span className="display__name">Chances:</span>
                        <span className="display__value">{guesses}</span>
                    </span>
                </p>
                <p className="display__item reveals">
                    <span className="display__icon">🔍</span>
                    <span className="display__label">
                        <span className="display__name">Revelar:</span>
                        <span className="display__value">{revealedLetters}</span>
                    </span>
                </p>
            </div>
            <div className="secret-word__letters">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className="secret-word__letter">{letter}</span>
                    ) : (
                        <span key={i} onClick={() => handlerSquare(i)} className="secret-word__blank-square"></span>
                    )
                ))}
            </div>
        </div>
    );
};

export default SecretWord;