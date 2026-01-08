import { Flight } from "./Flight.js"


export class Passenger{
    #money
    constructor(name, idNumber, money){
        this.name = name
        this.IdNumber = idNumber
        this.#money = money
    }

    isEnoughMoney(price){
        if ((this.#money - price) < 0){
            return false
        }
        return true
    }

    getMoney(){
        return this.#money
    }

    setMoney(amount){
        this.#money -= amount
    }

    pay(flight, ticketType, price){
        return price
    }

    buy(flight, ticketType){
        if (!Flight.prototype.isPrototypeOf(flight)){
            throw new Error("invalid flight");
        }
        if (!this.isEnoughMoney(flight[ticketType + "Price"])){
            return "You don't have enough money to purchase."
        }
        if (["regular", "VIP"].includes(ticketType)){
            if (flight.ticketsList[0][ticketType].length < flight.sumTickets()[ticketType]){
                this.pay(flight, ticketType, flight[ticketType + "Price"])
            } else {
                return "There is no room in this class on this flight."
            }
        } else {
            throw new Error("invalid ticketType");
        }
    }

    
}

