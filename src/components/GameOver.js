import './css/GameOver.css';
import AppHeading from '../childs/AppHeading';
import { useGame } from '../hooks/useGame';

const GameOver = () => {
    const { gameProps, handlerGameProps } = useGame();
    
    const retry = () => {
        handlerGameProps({
            score: 0,
            guesses: 3,
            guessedLetters: [],
            wrongLetters: [],
            onStage: "start"
        });
    };

    return (
        <main className="game-over">
            <AppHeading
                title="Game Over"
                subtitle={`Total de Pontos: ${gameProps.score} pts`}
            />
            <button onClick={retry} type="button" className="btn">Sair</button>
        </main>
    );
};

export default GameOver;