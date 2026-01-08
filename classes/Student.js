import { Passenger } from "./Passenger.js";
import { Ticket } from "./Ticket.js"
import { VIPticket } from "./VIPticket.js"

export class Student extends Passenger{
    constructor(name, idNumber, money, schoolName){
        super(name, idNumber, money)
        this.schoolName = schoolName
    }

    pay(flight, ticketType, price){
        let ticket
        let boyPrice
        if (ticketType === "VIP"){ 
            boyPrice = price
            ticket = new VIPticket(boyPrice , this.name)     
            console.log(`Buying a ticket for class ${ticketType} at the price of ${boyPrice}$`);    
        }
        else if (ticketType === "regular"){ 
            boyPrice = price * 0.9 
            ticket = new Ticket(boyPrice, this.name) 
            console.log(`Buying a ticket for class ${ticketType} at the price of ${boyPrice}$`);          
        } else {
            console.log("invalid tickeyType");
        }
        this.setMoney(boyPrice)
        flight.ticketsList[0][ticketType].push(ticket) 
    }
}