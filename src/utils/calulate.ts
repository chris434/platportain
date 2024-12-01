import { truncNumber } from "./mic"

export function calculate(amount:number,selectedPotSize:number,units:number,){
const transportAmount= selectedPotSize*units
const totalTransportAmount = amount/transportAmount
const fullTransport=truncNumber(totalTransportAmount)
const fullTransportTotal = fullTransport*transportAmount
const lastTransport = amount-fullTransportTotal
return {transportAmount,totalTransportAmount,fullTransport,lastTransport}
}
