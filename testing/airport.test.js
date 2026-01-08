import test from 'node:test';
import assert from 'node:assert/strict';
import { Airport } from "../classes/Airport.js";
import { RegularPassenger } from "../classes/RegularPassenger.js";
import { Baggage } from '../classes/Baggage.js';
import { Student } from '../classes/student.js';

const airport = new Airport
const passenger1 = new RegularPassenger("Avi", 15, 70, "Dan", true)
const passenger2 = new RegularPassenger("Avi", 15, 700, "Dan", true)
const student = new Student("David", 12, 1200, "Kodkod")

passenger2.buy(airport.flight1, "regular")
const baggage = new Baggage(158, 15, 800, "carry_on")
const baggage2 = new Baggage(158, 15, 80, "carry_on")
airport.flight1.buyBaggage(student, baggage2)

test("not enough money test", ()=>{
    assert.equal(passenger1.isEnoughMoney(airport.flight1.regularPrice), false)
})

test("owner name test", ()=>{
    assert.equal(passenger2.name, airport.foights[0].ticketsList[0].regular[0].ownerName)
})

await test("set money", ()=>{
    assert.equal(passenger2.getMoney(), 620)
})

airport.flight1.buyBaggage(passenger2, baggage2)

test("weight baggage test", ()=>{
    assert.equal(airport.flight1.isExceeds(baggage), false)
})

test("set money", ()=>{
    assert.equal(passenger2.getMoney(), 610)
})

test("set money", ()=>{
    assert.equal(student.getMoney(), 1180)
})