import './css/StartScreen.css'

const StartScreen = () => {
    return (
        <div className="start-screen">
            <h1 className="start-screen__title">Secret Word</h1>
            <p className="start-screen__text">
                Você não pode dizer uma palavra secreta?
            </p>
            <button type="button" className="btn">Inicie o Jogo</button>
        </div>
    );
};

export default StartScreen;