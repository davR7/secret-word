import AppHeading from '../childs/AppHeading';
import './css/GameOver.css'
import {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';

const GameOver = () => {
    const { gameProps, handlerGameProps } = useContext(GameContext);
    

    const retry = () => {
        handlerGameProps({
            score: 0,
            guesses: 3,
            onStage: gameProps.stages[0]
        })
    }

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