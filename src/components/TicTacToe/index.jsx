import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import GameBoard from './GameBoard';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const currentPlayer = isXNext ? "Player 1" : "Player 2";

  const handleClick = (index) => {
    if (board[index] || winner) return; 

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };


  let status;
  if (winner) {
    status = winner === 'X' ? 'Player 1 won!' : 'Player 2 won!';
  } else {
    status = `${currentPlayer} turn`;
  }

  return (
    <div className='flex justify-center items-center flex-col bg-indigo-950'>
      <h1 className='mt-12 text-white text-5xl font-bold flex justify-center items-center mb-5 mt-6S p-10'>
        Tic Tac Toe Game in <span className='p-3 text-blue-300'>React</span>
      </h1>
      
      <h2 className='text-white text-3xl mb-5'>{status}</h2>

      <GameBoard board={board} onClick={handleClick} />

      <Button variant="soft" className='w-48 h-30 p-8 text-5xl mt-5' onClick={resetGame}>
        Reset
      </Button>
    </div>
  );
};

export default TicTacToe;

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}