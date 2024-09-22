import circleIcon from "../Assets/circle-icon.svg"
import crossIcon from "../Assets/x-icon.svg"
import React from 'react'

const GameBoard = () => {
  return (
         
<div className='board flex h-[600px] w-[560px] m-auto'>
<div className='row1 '>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
</div>
<div className='row1'>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
</div>
<div className='row1'>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
    <div className='flex h-44 w-44 bg-sky-950 border-4 border-l-indigo-300 cursor-pointer '></div>
</div>
</div>
  )
}

export default GameBoard
