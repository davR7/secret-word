import StartScreen from './components/StartScreen.js';
import PlayingGame from './components/PlayingGame.js';
import GameOver from './components/GameOver.js';
import GameInfo from './components/GameInfo.js';
import {useContext} from 'react';
import {GameContext} from './contexts/GameContext';

function App() {
  const { gameProps } = useContext(GameContext);
  const {onStage} = gameProps;

  return (
    <div className="text-center flex-column-c">
      {onStage === "start" && <StartScreen />}
      {onStage === "game" && <PlayingGame />}
      {onStage === "end" && <GameOver />}
      {onStage === "info" && <GameInfo />}
    </div>
  );
}

export default App;
