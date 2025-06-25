import TicketNo from "./src/TicketNo"
import "./Ticket.css"
export default function Ticket({ticket}){//any ticket size
    return(
        <div className="ticket">
            <p>Ticket</p>
            {ticket.map((num , idx) =>(
                <TicketNo num={num} key={idx} />                
            ))}

        </div>
    )
}