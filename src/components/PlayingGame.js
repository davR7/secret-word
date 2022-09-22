import './css/PlayingGame.css'
import AppHeading from '../childs/AppHeading';
import SecretWord from '../childs/SecretWord';
import GameControl from '../childs/GameControl';
import WrongWords from '../childs/WrongWords';
import { useEffect } from 'react';
import { useGame } from '../hooks/useGame';



const PlayingGame = () => {
    const { gameProps, handlerGameProps } = useGame();
    const { category, guesses } = gameProps;

    useEffect(() => {
        if (guesses === 0)
            handlerGameProps({ onStage: "end" })
    }, [guesses, handlerGameProps])

    return (
        <main className="playing-game">
            <AppHeading 
                title="Qual é a Palavra Misteriosa?" 
                subtitle={`Dica sobre a palavra: ${category}`}
                text={`Você ainda tem ${guesses} tentativa(s)`}
            />
            <SecretWord />
            <GameControl />
            <WrongWords />
        </main>
    );
};

export default PlayingGame;