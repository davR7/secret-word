import './css/StartScreen.css'
import AppHeading from '../childs/AppHeading';
import { useGame } from '../hooks/useGame';

const StartScreen = () => {
    const { handlerGameProps, startGame } = useGame();
    
    const goGameInfo = () => {
        handlerGameProps({
            onStage: "info"
        })
    }

    return (
        <main className="start-screen">
            <AppHeading
                title="Secret Word"
                subtitle="Você não pode dizer uma palavra secreta?"
            
            />
            <button 
                type="button" 
                className="btn"
                onClick={() => startGame()}
            >Inicie o Jogo</button>
            <button 
                type="button" 
                className="btn"
                onClick={() => goGameInfo()}
            >Instruções</button>
        </main>
    );
};

export default StartScreen;