import { useGame } from './hooks/useGame.js';
import GameAudio from './childs/GameAudio.js';
import StartScreen from './components/StartScreen.js';
import PlayingGame from './components/PlayingGame.js';
import GameOver from './components/GameOver.js';

function App() {
  const { game } = useGame();
  
  return (
    <div className="flex-column-xy h-screen">
      <GameAudio />
      {game.onStage === "start" && <StartScreen />}
      {game.onStage === "game" && <PlayingGame />}
      {game.onStage === "end" && <GameOver />}
    </div>
  );
}

export default App;
