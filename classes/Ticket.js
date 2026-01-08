
export class Ticket{
    constructor(price, ownerName){
        this.ticketNumber = Math.floor(Math.random() * 100)
        this.price = price
        this.ownerName = ownerName
    }
}