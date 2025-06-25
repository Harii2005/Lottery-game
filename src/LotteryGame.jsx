import { useState } from "react";
import "./LotteryGame.css"
import { generateNewTicket , sum } from "./helper";

export default function LotteryGame(){
    let [newTicket, setNewTicket] = useState(generateNewTicket(3)); 
    // let isWinning = false;
    // if (sum(newTicket) === 15) {
    //     isWinning = true;
    // }
    let isWinning = sum(newTicket) === 15
    console.log(newTicket);

    let buyTicket = ()=>{
        setNewTicket(generateNewTicket(3));
    }
    return(
        <div>
            <h1  >lottery Game</h1>
            <h3>lottery ticket number</h3>

            <div className="ticket">
                <span>{newTicket[0]}</span>
                <span>{newTicket[1]}</span>
                <span>{newTicket[2]}</span>
            </div><br></br>
            <div>
                <button onClick={buyTicket}> new Ticket </button>
            </div>
            

            <h3>{isWinning && "Congratulations You Won!!"}</h3>
            
            {/* <h2>sumofdigit = {sumOfNum()}</h2>
            <button onClick={generateNewTicket}>new Ticket</button> */}
        </div>
    );

}