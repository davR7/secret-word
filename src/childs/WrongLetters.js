import './css/WrongLetters.css';
import { useGame } from '../hooks/useGame';

const WrongLetters = () => {
    const { game } = useGame();

    return (
        <div className="wrong-letters">
            <span className="wrong-letters__title">
                Letras erradas:
            </span>

            <div className="wrong-letters__list">
                {game.wrongLetters.length > 0 ? (
                    game.wrongLetters.map((letter) => (
                        <span
                            className="wrong-letters__letter"
                            key={letter}
                        >
                            {letter.toUpperCase()}
                        </span>
                    ))
                ) : (
                    <span className="wrong-letters__empty">
                        Nenhuma ainda
                    </span>
                )}
            </div>
        </div>
    )
}

export default WrongLetters;