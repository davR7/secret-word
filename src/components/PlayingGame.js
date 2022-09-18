import './css/PlayingGame.css'
import AppHeading from '../childs/AppHeading.js';
import SecretWord from '../childs/SecretWord';
import GameControl from '../childs/GameControl';
import WrongWords from '../childs/WrongWords';

const PlayingGame = () => {
    return (
        <main className="playing-game">
            <AppHeading 
                title="Qual é a Palavra Misteriosa?" 
                subtitle="Dica sobre a palavra: "
                text="Você ainda tem 3 tentativa(s)"
                vars="Computador"
            />
            <SecretWord />
            <GameControl />
            <WrongWords />
        </main>
    );
};

export default PlayingGame;