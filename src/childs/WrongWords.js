import './css/WrongWords.css';

const WrongWords = () => {
    return (
        <div className="wrong-words">
            <p className="wrong-words__text">Tentativas sem sucesso:</p>
            <div class="wrong-words__letters">
                <span class="wrong-words__letter">a,</span>
                <span class="wrong-words__letter">b,</span>
                <span class="wrong-words__letter">c</span>
            </div>
        </div>
    );
};

export default WrongWords;