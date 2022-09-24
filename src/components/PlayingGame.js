import './css/PlayingGame.css'
import AppHeading from '../childs/AppHeading';
import SecretWord from '../childs/SecretWord';
import GameControl from '../childs/GameControl';
import WrongWords from '../childs/WrongWords';
import PopUp from '../childs/PopUp';
import { useEffect } from 'react';
import { useGame } from '../hooks/useGame';

const PlayingGame = () => {
    const { gameProps, handlerGameProps, startGame } = useGame();
    const { letters, category, guesses, score, points, onPopUp } = gameProps;

    const lowercase = letters.join("")
    const word = lowercase.replace(/^./, lowercase[0].toUpperCase())

    useEffect(() => {
        if (guesses === 0 && onPopUp === "")
            handlerGameProps({ onPopUp: "defeat" })
    }, [guesses, onPopUp, handlerGameProps])

    const handlerPopUp = () => {
        if (onPopUp === "victory") {
            startGame({
                onPopUp: "", 
                score: score + points 
            })
        } else if (onPopUp === "defeat") {
            handlerGameProps({ onStage: "end" })
        }
    }

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
            {
                onPopUp === "victory" && <PopUp 
                    title="Parabéns você venceu! =)"
                    text={`Palavra: ${word} - Prêmio: ${points}pts`}
                    textBtn="Continue"
                    eventBtn={handlerPopUp}
                />
            }
            {
                onPopUp === "defeat" && <PopUp 
                    title="Ops... Não foi dessa vez =("
                    textBtn="Sair"
                    eventBtn={handlerPopUp}
                />
            }
        </main>
    );
};

export default PlayingGame;