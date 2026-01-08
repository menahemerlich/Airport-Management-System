import { Ticket } from "./Ticket.js";

export class VIPticket extends Ticket{
    constructor(price, ownerName){
        super(price, ownerName)
        this.ticketNumber = (Math.floor(Math.random() * 100)) + 10
        this.benefits = ["Free alcohol", "Free food", "Hot towels"]
    }

}