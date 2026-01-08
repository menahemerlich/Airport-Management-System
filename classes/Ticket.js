
export class Ticket{
    constructor(price, ownerName){
        this.ticketNumber = Math.floor(Math.random() * 100)
        if (typeof price === "number") {
            this.price = price
        } else {
            throw new Error("invalid price");
        }
        if (typeof ownerName === "string") {
            this.ownerName = ownerName
        } else {
            throw new Error("invalid ownerName");
        }
    }
}