import './css/GameControl.css';

const GameControl = () => {
    return (
        <div className="game-control">
            <p className="game-control__text">Tente adivinhar uma letra da palavra:</p>
            <form className="game-control__form flex-row-c">
                <input class="game-control__input" type="text" name="letter" maxlength="1" required/>
                <button class="game-control__btn btn" type="submit" >Jogar</button>
            </form>
        </div>
    );
};

export default GameControl;