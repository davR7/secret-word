import './css/WrongWords.css'
import { useGame } from '../hooks/useGame'

const WrongWords = () => {
    const { gameProps } = useGame()
    const { wrongLetters } = gameProps

    return (
        <div className="wrong-words">
            <p className="wrong-words__text">Tentativas sem sucesso:</p>
            <div className="wrong-words__letters">
                {wrongLetters.map((letter, i )=> (
                    <span key={i} className="wrong-words__letter">{letter}, </span>
                ))}
            </div>
        </div>
    );
};

export default WrongWords;