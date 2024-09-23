import circleIcon from "../Assets/circle-icon.svg"
import crossIcon from "../Assets/x-icon.svg"
import React from 'react'


const GameBoard = ({ board, onClick }) => {

  const renderSquare = (index) => {
    let icon = board[index] === 'X' ? crossIcon : board[index] === 'O' ? circleIcon : null;
    return (
      <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer'
        onClick={() => onClick(index)}>
        {icon && <img src={icon} alt={board[index]} className="m-auto h-24 w-24" />}
      </div>
    );
  };

  return (
    <div className='board flex h-[520px] w-[560px] flex-wrap mb-20'>
      {board.map((_, index) => renderSquare(index))}
    </div>
  );
};

export default GameBoard;
