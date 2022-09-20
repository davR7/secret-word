import AppHeading from '../childs/AppHeading';
import './css/GameInfo.css'
import {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';


const GameInfo = () => {
    const { gameProps, handlerGameProps } = useContext(GameContext);
    
    const goBack = () => {
        handlerGameProps({
            onStage: gameProps.stages[0]
        })
    }

    return (
        <main className="game-info">
            <AppHeading
                title="Informações do Jogo"
                subtitle="O que você precisa entender..."
            />
            <ul className="info-list flex-column-c">
                <li className="info-list__item">
                    <h3 className="info-list__title color-2">Score:</h3>
                    <p className="info-list__text">
                        Pontos acumulados do jogador. Esse será
                        zerado apenas no GameOver ou se o jogador
                        fazer refresh da pagina.
                    </p>
                </li>
                <li className="info-list__item">
                    <h3 className="info-list__title color-2">Prêmio:</h3>
                    <p className="info-list__text">
                        É quantidade de pontos que o jogado vai ganhar se 
                        descobrir a palavra misteriosa.
                    </p>
                </li>
                <li className="info-list__item">
                    <h3 className="info-list__title color-2">Square</h3>
                    <p className="info-list__text">
                        É a moeda do jogo. Com esta podemos descobrir qual é a palavra 
                        escondida no quadrado misterioso sem precisar adivinhar. 
                        Palavras de cinco letras para baixo seu quadrado vale uma moeda, 
                        sendo maior que cinco vale duas. O jogador começa o jogo com um 
                        total de duas, e sendo essa quantidade resetada a cada acerto da 
                        palavra. A moeda não é acumulativa. 
                    </p>
                </li>
            </ul>
            <button 
                type="button" 
                className="btn"
                onClick={() => goBack()}
            >Voltar</button>
        </main>
    );
};

export default GameInfo;