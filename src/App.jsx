import LotteryGame from './LotteryGame.jsx'
import "./App.css"
//import TicketNo from './TicketNo.jsx'
//import Ticket from '../Ticket.jsx'
import {sum} from './helper.js'


function App() {

  let winCondition = (ticket)=>{
    return sum(ticket) === 15;
  }
  return (
    <>
      <LotteryGame n={3} winCondition={winCondition} />
    </>
  )
}

export default App
