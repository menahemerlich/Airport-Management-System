
export class Baggage{
    constructor(baggageId, ownerId, weight, type){
        if (typeof baggageId === "number") {
            this.baggageId = baggageId
        } else {
            throw new Error("invalid baggageId");
        }
        if (typeof ownerId === "number") {
            this.ownerId = ownerId
        } else {
            throw new Error("invalid ownerId");
        }
        if (typeof weight === "number") {
            this.weight = weight
        } else {
            throw new Error("invalid weight");
        }
        if (["carry_on", "checked"].includes(type)) {
            this.type = type
        } else {
            throw new Error("invalid type");
        }
    } 
}