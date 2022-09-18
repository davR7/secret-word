import AppHeading from '../childs/AppHeading';
import './css/GameOver.css'

const GameOver = () => {
    return (
        <main className="game-over">
            <AppHeading
                title="Fim do Jogo"
                subtitle="A sua pontuação foi: "
                vars="50"
            />
            <button type="button" className="btn">Sair</button>
        </main>
    );
};

export default GameOver;