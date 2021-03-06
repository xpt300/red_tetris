import { useState, useCallback, useEffect } from 'react'
import { useStore } from 'react-redux'

import { WIDTH, checkCollision } from '../gameHelper'

export const usePlayer = () => {
    const store = useStore()
    const shape = store.getState().game.shapes[0].shape
    const [player, setPlayer] = useState({
      pos: { x: WIDTH / 2 - 2, y: 0 },
      tetromino: shape,
      collided: false,
    });
  
    useEffect(() => {
      setPlayer({
        pos: { x: WIDTH / 2 - 2, y: 0 },
        tetromino: shape,
        collided: false,
      })
    }, [shape]);

    function rotate(matrix, dir) {
      // Make the rows to become cols (transpose)
      const mtrx = matrix.map((_, index) => matrix.map(column => column[index]));
      // Reverse each row to get a rotaded matrix
      if (dir > 0) return mtrx.map(row => row.reverse());
      return mtrx.reverse();
    }
  
    function playerRotate(stage, dir) {
      const clonedPlayer = JSON.parse(JSON.stringify(player));
      clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
  
      const pos = clonedPlayer.pos.x;
      let offset = 1;
      while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
        clonedPlayer.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > clonedPlayer.tetromino[0].length) {
          rotate(clonedPlayer.tetromino, -dir);
          clonedPlayer.pos.x = pos;
          return;
        }
      }
      setPlayer(clonedPlayer);
    }
  
    const updatePlayerPos = ({ x, y, collided }) => {
      setPlayer(prev => ({
        ...prev,
        pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
        collided
      }));
    };
  
    const resetPlayer = useCallback((tetrimino) => {
      setPlayer({
        pos: { x: WIDTH / 2 - 2, y: 0 },
        tetromino: tetrimino,
        collided: false,
      });
    }, []);
  
    return [player, updatePlayerPos, resetPlayer, playerRotate];
  };