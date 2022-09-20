import './App.css';
import StartScreen from './components/StartScreen.js';
import PlayingGame from './components/PlayingGame.js';
import GameOver from './components/GameOver.js';
import GameInfo from './components/GameInfo.js';
import {useContext} from 'react';
import {GameContext} from './contexts/GameContext';

function App() {
  const { gameProps } = useContext(GameContext);
  const {stages, onStage} = gameProps;

  return (
    <div className="App flex-column-c">
      {onStage === stages[0] && <StartScreen />}
      {onStage === stages[1] && <PlayingGame />}
      {onStage === stages[2] && <GameOver />}
      {onStage === stages[3] && <GameInfo />}
    </div>
  );
}

export default App;
