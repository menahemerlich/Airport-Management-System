
export class Flight {
    constructor(flightName, airline, flightNumber, maxPassengers, regularPrice, VIPprice) {
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
        this.ticketsList = [{ regular: [], VIP: [] }]
    }

    sumTickets() {
        const tickets = {
            regular: this.maxPassengers * 0.9,
            VIP: this.maxPassengers * 0.1
        }
        return tickets
    }

}