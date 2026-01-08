import { Flight } from "./Flight.js"

export class Airport{
    constructor(){
        this.flight1 = new Flight("Vienna", "Wizz", "W2822", 100, 100, 115, 750)
        this.flight2 = new Flight("Budapest", "Wizz", "W2811", 85, 75, 90, 620)
        this.flight3 = new Flight("New York", "El Al", "E92", 250, 850, 1150, 2500)
        this.foights = [this.flight1, this.flight2, this.flight3]
    }
}

