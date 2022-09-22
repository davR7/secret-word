import './css/SecretWord.css'
import { useGame } from '../hooks/useGame'


const SecretWord = () => {
    const { gameProps, handlerGameProps } = useGame()
    const { letters, score, square, points, guessedLetters } = gameProps
    const handlerSquare = index => {
        if (square > 0 && letters.length < 6){
            guessedLetters.push(letters[index])
            handlerGameProps({ square: square - 2})
        }else if (square > 0 && letters.length >= 6){
            guessedLetters.push(letters[index])
            handlerGameProps({ square: square - 1})
        }
    }

    return (
        <div className="secret-word flex-column-c">
            <div className="secret-word__display flex-row-c">
                <p className="secret-word__score">Score: {score}pts</p>
                <p className="secret-word__points">Prêmio: {points}pts</p>
                <p className="secret-word__points">Square: {square}</p>
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