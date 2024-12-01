import {TROLY_POT_Size_Map } from "../data/potSize"
import type { PotSize } from "../types/potSize"
import { calculate } from "./calulate"
import { oddEvenReturns, truncNumber } from "./mic"


function splitNumber(number: number) {
return number.toString().split('.')
}

export function calulateTrollys(amount:number,shelvesperTrolly:number,potSize:PotSize){
const selectedPotSize =TROLY_POT_Size_Map[potSize]
const {totalTransportAmount:totalTrollysAmout,fullTransport:fullTrollys,lastTransport:lastTrolly}=calculate(amount,selectedPotSize,shelvesperTrolly)

const totalTrollysSplit=splitNumber(totalTrollysAmout)
const totalTrollysDifrence=+oddEvenReturns(totalTrollysSplit[1])
const totalTrollys=fullTrollys+Math.round(parseInt(`0.${totalTrollysSplit[0]}`))+totalTrollysDifrence
const bases=totalTrollys/10
const baseSplit=splitNumber(bases)
const fullBaseStack=parseInt(baseSplit[0])
const remainedingBases=parseInt(!baseSplit[1] ? '0' : baseSplit[1])
const totalShelves=shelvesperTrolly*fullTrollys+Math.round(lastTrolly/selectedPotSize)-1-fullTrollys
const shelfStacks=totalShelves/30
const fullSvevesStack=truncNumber(shelfStacks)
const remainingSlevesValue=totalShelves-30*fullSvevesStack
const remainingSleves=remainingSlevesValue===-1?0:remainingSlevesValue


return {
    totalTrollys,
    fullTrollys,
    lastTrolly,
    fullBaseStack,
    remainedingBases,
    fullSvevesStack,
    remainingSleves,
    

}
}

