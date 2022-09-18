import AppHeading from '../childs/AppHeading';
import './css/StartScreen.css'

const StartScreen = () => {
    return (
        <main className="start-screen">
            <AppHeading
                title="Secret Word"
                subtitle="Você não pode dizer uma palavra secreta?"
            
            />
            <button type="button" className="btn">Inicie o Jogo</button>
        </main>
    );
};

export default StartScreen;