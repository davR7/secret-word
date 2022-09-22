import AppHeading from '../childs/AppHeading';
import './css/StartScreen.css'
import {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';

const StartScreen = () => {
    const { handlerGameProps, startGame } = useContext(GameContext);
    
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