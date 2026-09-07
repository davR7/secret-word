import './css/StartScreen.css';
import AppHeading from '../childs/AppHeading';
import Button from '../childs/Button';
import { useGame } from '../hooks/useGame';

const StartScreen = () => {
    const { startGame } = useGame();
    
    return (
        <main className="start-screen container">
            <img className="start-screen__img" src="/secret-icon.png" alt="" />
            <div className="start-screen__content">
                <AppHeading
                    title="Secret Word"
                    description="Você não consegue descobrir a palavra misteriosa?"
                />
                <Button type="button" className="start-screen__btn" onClick={() => startGame()}>Inicie o Jogo</Button>
            </div>
        </main>
    );
};

export default StartScreen;