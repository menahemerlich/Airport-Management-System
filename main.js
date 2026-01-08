import { Airport } from "./classes/Airport.js";
import { RegularPassenger } from "./classes/RegularPassenger.js";
import { Student } from "./classes/student.js";

const airport = new Airport
const passenger = new RegularPassenger("Avi", 15, 1500, "Dan", true)
const student = new Student("David", 12, 1200, "Kodkod")

console.log(airport.foights[0]);
console.log(passenger.getMoney());

passenger.buy(airport.flight1, "regular")
console.log(passenger.getMoney());
student.buy(airport.flight1, "VIP")
console.log(airport.foights[0].ticketsList[0].regular[0].ownerName);
