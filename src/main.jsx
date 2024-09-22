import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TicTacToe from './components/TicTacToe/index.jsx'

createRoot(document.getElementById('root')).render(
 
    <TicTacToe />
 
)
