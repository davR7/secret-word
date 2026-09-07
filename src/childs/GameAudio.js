import gameAudio  from '../music/8 Bit World - HeatleyBros.mp3'

const GameAudio = () => {
    return (
        <audio className="game-audio" id="playAudio" loop>
            <source src={gameAudio}/>
        </audio>
    );
};

export default GameAudio;