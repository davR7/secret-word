import './css/GameInfo.css'
import AppHeading from '../childs/AppHeading'
import { useGame } from '../hooks/useGame'


const GameInfo = () => {
    const { handlerGameProps } = useGame();

    const goBack = () => {
        handlerGameProps({
            onStage: "start"
        });
    };

    return (
        <main className="game-info">
            <AppHeading
                title="Informações do Jogo"
                subtitle="O que você precisa entender?"
            />
            <section className="game-info__section">
                <p className="game-info__text">
                    Secret Word é um jogo no qual os jogadores tentam descobrir uma 
                    palavra misteriosa. Para auxiliar são fornecidos: dica (qual 
                    categoria da palavra) e a possibilidade de um ou mais letras dos 
                    quadros serem reveladas sem a necessidade de o jogador consumir 
                    seu número de tentativas. É disponibilizado um total de três 
                    tentativas para descobrir a palavra misteriosa, perdendo todas 
                    o jogo será finalizado e exibira a pontuação.
                </p>
                <ul className="info-list">
                    <li className="info-list__item">
                        <h3 className="info-list__title color-2">Score:</h3>
                        <p className="info-list__text">
                            Pontos acumulados do jogador. Esse será zerado apenas no 
                            GameOver ou se o jogador fazer refresh da pagina.
                        </p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title color-2">Prêmio:</h3>
                        <p className="info-list__text">
                            É a quantidade de pontos que o jogado vai ganhar se
                            descobrir a palavra misteriosa.
                        </p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title color-2">Square:</h3>
                        <p className="info-list__text">
                            É a moeda do jogo. Com essa podemos descobrir um ou mais letras
                            escondidas no painel sem precisar adivinhar. Palavras de cinco
                            letras para baixo o quadrado vale uma moeda, sendo maior que cinco
                            vale duas. Se a letra desvendada estiver em mais de um quadrado será
                            exibido não apenas o quadrado comprado (que foi tocado pelo jogador),
                            mas os demais. O jogador começa o jogo com um total de duas moedas, 
                            sendo sua quantidade resetada a cada acerto de uma palavra. A moeda 
                            Square não é acumulativa.
                        </p>
                    </li>
                </ul>
            </section>
            <button
                type="button"
                className="btn"
                onClick={() => goBack()}
            >Voltar</button>
        </main>
    );
};

export default GameInfo