import './css/PlayingGame.css';
import AppHeading from '../childs/AppHeading';
import SecretWord from '../childs/SecretWord';
import GameControl from '../childs/GameControl';
import WrongWords from '../childs/WrongWords';
import PopUp from '../childs/PopUp';
import { useEffect } from 'react';
import { useGame } from '../hooks/useGame';

const PlayingGame = () => {
    const { game, handlerGame, startGame, gameOver} = useGame();
    const { letters, question, guesses, score, points, onPopUp } = game;

    const lowercase = letters.join("")
    const word = lowercase.replace(/^./, lowercase[0].toUpperCase())

    useEffect(() => {
        if (guesses === 0 && onPopUp === ""){
            handlerGame({ onPopUp: "defeat" })
        } 
    }, [guesses, onPopUp, handlerGame])

    const handlerPopUp = () => {
        if (onPopUp === "victory") {
            handlerGame({ onPopUp: "", score: score + points });
            gameOver();
        } else if (onPopUp === "continue") {
            startGame({ onPopUp: "", score: score + points })
        } else if (onPopUp === "defeat") {
            gameOver();
        }
    }

    return (
        <main className="playing-game container">
            <AppHeading 
                prefix="Qual é a" 
                title="Palavra Misteriosa?"
                description={question?.clue}
            />
            <SecretWord />
            <GameControl />
            <WrongWords />
            {
                onPopUp === "victory" && <PopUp 
                    title="Parabéns, você venceu! 🏆 😊"
                    text={`🎉 Você fez ${score + points} pontos!`}
                    textBtn="sair"
                    eventBtn={handlerPopUp}
                />
            }
            {
                onPopUp === "continue" && <PopUp 
                    title="Parabéns, palavra correta! 😄"
                    text={`Palavra: ${word} - Prêmio: ${points}pts`}
                    textBtn="Continue"
                    eventBtn={handlerPopUp}
                />
            }
            {
                onPopUp === "defeat" && <PopUp 
                    title="Ah, não! Fim de jogo 😢"
                    text="Melhor sorte na próxima!"
                    textBtn="Sair"
                    eventBtn={handlerPopUp}
                />
            }
        </main>
    );
};

export default PlayingGame;