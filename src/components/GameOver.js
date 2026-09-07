import './css/GameOver.css';
import AppHeading from '../childs/AppHeading';
import Button from '../childs/Button';
import { useGame } from '../hooks/useGame';

const GameOver = () => {
    const { game, resetGame } = useGame();
    
    const exitGame = () => resetGame()

    return (
        <main className="game-over container">
            <AppHeading
                title="Game Over"
                description={`Total de Pontos: ${game.score}`}
            />
            <Button type="button" className="game-over__btn" onClick={() => exitGame()}>Sair do jogo</Button>
        </main>
    );
};

export default GameOver;