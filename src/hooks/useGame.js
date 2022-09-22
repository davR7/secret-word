import { GameContext } from '../contexts/GameContext';
import { useContext } from 'react';

export const useGame = () => {
    const game = useContext(GameContext);
    return game;
};