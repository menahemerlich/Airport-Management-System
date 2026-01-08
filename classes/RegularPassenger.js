import { Passenger } from "./Passenger.js";
import { Ticket } from "./Ticket.js"
import { VIPticket } from "./VIPticket.js"

export class RegularPassenger extends Passenger{
    constructor(name, idNumber, money, Workplace, KnowsAirportEmployee){
        super(name, idNumber, money)
        this.Workplace = Workplace
        this.KnowsAirportEmployee = KnowsAirportEmployee
    }

    pay(flight, ticketType, price){
        let ticket
        let boyPrice
        if (ticketType === "VIP"){ 
            if (this.KnowsAirportEmployee){
                boyPrice = price * 0.85
            } else {
                boyPrice = price 
            }
            ticket = new VIPticket(boyPrice , this.name)        
            console.log(`Buying a ticket for class ${ticketType} at the price of ${boyPrice }$`);   
        }
        else if (ticketType === "regular"){  
            if (this.KnowsAirportEmployee){
                boyPrice = price * 0.8
            } else {
                boyPrice = price
            }
            ticket = new Ticket(boyPrice , this.name)        
            console.log(`Buying a ticket for class ${ticketType} at the price of ${boyPrice}$`);   
        } else {
            console.log("invalid tickeyType");
        } 
        this.setMoney(boyPrice)
        flight.ticketsList[0][ticketType].push(ticket)
    }
}