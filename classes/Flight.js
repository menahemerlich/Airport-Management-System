import { Baggage } from "./Baggage.js";
import { RegularPassenger } from "./RegularPassenger.js";
import { Student } from "./student.js";

export class Flight {
    constructor(flightName, airline, flightNumber, maxPassengers, regularPrice, VIPprice, maxBaggageWeight) {
        if (typeof flightName === "string") {
            this.flightName = flightName
        } else {
            throw new Error("invalid flightName");
        }
        if (typeof airline === "string") {
            this.airline = airline
        } else {
            throw new Error("invalid airline");
        }
        if (typeof flightNumber === "string") {
            this.flightNumber = flightNumber
        } else {
            throw new Error("invalid flightNumber");
        }
        if (typeof maxPassengers === "number") {
            this.maxPassengers = maxPassengers
        } else {
            throw new Error("invalid maxPassengers");
        }
        if (typeof regularPrice === "number") {
            this.regularPrice = regularPrice
        } else {
            throw new Error("invalid regularPrice");
        }
        if (typeof VIPprice === "number") {
            this.VIPPrice = VIPprice
        } else {
            throw new Error("invalid VIPprice");
        }
        if (typeof maxBaggageWeight === "number") {
            this.maxBaggageWeight = maxBaggageWeight
        } else {
            throw new Error("invalid maxBaggageWeight");
        }
        this.ticketsList = [{ regular: [], VIP: [] }]
        this.baggageList = []
    }

    sumTickets() {
        const tickets = {
            regular: this.maxPassengers * 0.9,
            VIP: this.maxPassengers * 0.1
        }
        return tickets
    }

    isExceeds(baggage){
        let sumWeight
        for (const baggage of this.baggageList) {
            sumWeight += baggage.weight
        }
        if (sumWeight){
            if ((this.maxBaggageWeight - sumWeight - baggage.weight) < 0){
                return false
            }            
        } else {
            if ((this.maxBaggageWeight - baggage.weight) < 0){
                return false
            }
        }
        return true
    }

    buyBaggage(passenger, baggage){
        let boyPrice
        if (!Baggage.prototype.isPrototypeOf(baggage)){
            throw new Error("invalid baggage");
        }
        if (!this.isExceeds(baggage)){
            console.log("There is no space in the trunk.");
            return 
        }
        if (RegularPassenger.prototype.isPrototypeOf(passenger)){
            if (passenger.KnowsAirportEmployee){
                if (baggage.type === "checked"){
                    boyPrice = 20
                }
                if (baggage.type === "carry_on"){
                    if (baggage.weight <= 7){
                        boyPrice = 0
                    } else {
                        boyPrice = 10
                    }
                }
            } else {
                if (baggage.type === "checked"){
                    boyPrice = 40
                }
                if (baggage.type === "carry_on"){
                    if (baggage.weight <= 7){
                        boyPrice = 0
                    } else {
                        boyPrice = 20
                    }
                }
            }
        }
        if (Student.prototype.isPrototypeOf(passenger)){
            if (baggage.type === "checked"){
                    boyPrice = 30
                }
                if (baggage.type === "carry_on"){
                    if (baggage.weight <= 7){
                        boyPrice = 0
                    } else {
                        boyPrice = 20
                    }
                }
        }
        if (passenger.isEnoughMoney(boyPrice)){
            console.log(`You bought a baggage of type ${baggage.type} at price ${boyPrice}$.`);
            this.baggageList.push(baggage)
            passenger.setMoney(boyPrice)
        } else {
            console.log("You don't have enough money.");
            
        }
    }

}