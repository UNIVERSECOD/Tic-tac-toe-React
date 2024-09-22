import React from 'react'
import circleIcon from "../Assets/circle-icon.svg"
import crossIcon from "../Assets/x-icon.svg"
import Button from '@mui/joy/Button';
import GameBoard from './board';


const TicTacToe = () => {



  return (
    <div className='flex justify-center items-center flex-col bg-indigo-950 '>
      <h1 className='mt-12 text-white text-5xl font-bold flex justify-center items-center mb-5 p-10'> Tic Tac Toe Game in <span className='p-3 text-blue-300' >React</span></h1>
    <GameBoard />
      <Button variant="soft" className='w-48 h-30 p-8 text-5xl'>Reset</Button>
    </div>
  )
}

export default TicTacToe
