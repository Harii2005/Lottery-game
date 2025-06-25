import { useState } from 'react'

import './App.css'
import LotteryGame from './LotteryGame.jsx'
import TicketNo from './TicketNo.jsx'
import Ticket from '../Ticket.jsx'

function App() {
  return (
    <>
      <LotteryGame n={3} winningSum={15}/>
    </>
  )
}

export default App
