import { useState } from "react";
import { generateNewTicket , sum } from "./helper";
import Ticket from "../Ticket";

export default function LotteryGame({n , winCondition}){
    let [newTicket, setNewTicket] = useState(generateNewTicket(3)); 
    // let isWinning = false;
    // if (sum(newTicket) === 15) {
    //     isWinning = true;
    // }
    let isWinning = winCondition(newTicket);
    // console.log(newTicket);

    let buyTicket = ()=>{
        setNewTicket(generateNewTicket(n));
    }
    return(
        <div>
            <h1  >lottery Game</h1>
            <h3>lottery ticket number</h3>
            <Ticket ticket={newTicket} />
            <div>
                <button onClick={buyTicket}> new Ticket </button> {/*if u want u can also use button as component*/}

            </div>
            

            <h3>{isWinning && "Congratulations You Won!!"}</h3>
            
            {/* <h2>sumofdigit = {sumOfNum()}</h2>
            <button onClick={generateNewTicket}>new Ticket</button> */}
        </div>
    );

}