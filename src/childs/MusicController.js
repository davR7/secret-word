import gameAudio from '../music/8 Bit World - HeatleyBros.mp3'

const MusicController = () => {
    return (
        <audio className="music-controller" id="playAudio" loop>
            <source src={gameAudio}/>
        </audio>
    );
};

export default MusicController;