import './css/SecretWord.css';

const SecretWord = () => {
    return (
        <div className="secret-word flex-column-c">
            <div className="secret-word__display flex-row-c">
                <p className="secret-word__score">Score: 0000</p>
                <p className="secret-word__points">Pontos: 20</p>
            </div>
            <div className="secret-word__letters">
                <span className="secret-word__letter">A</span>
                <span className="secret-word__blank-square"></span>
            </div>
        </div>
    );
};

export default SecretWord;