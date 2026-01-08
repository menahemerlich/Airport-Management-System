import test from 'node:test';
import assert from 'node:assert/strict';
import { Airport } from "../classes/Airport.js";
import { RegularPassenger } from "../classes/RegularPassenger.js";

const airport = new Airport
const passenger1 = new RegularPassenger("Avi", 15, 70, "Dan", true)
const passenger2 = new RegularPassenger("Avi", 15, 700, "Dan", true)
passenger2.buy(airport.flight1, "regular")

test("not enough money test", ()=>{
    assert.equal(passenger1.isEnoughMoney(airport.flight1.regularPrice), false)
})

test("owner name test", ()=>{
    assert.equal(passenger2.name, airport.foights[0].ticketsList[0].regular[0].ownerName)
})

test("set money", ()=>{
    assert.equal(passenger2.getMoney(), 620)
})