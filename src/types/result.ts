import type { PotSize } from "./potSize";

export type TrollyResult={
    totalTrollys:number,
    fullTrollys:number,
    lastTrolly:number,
    fullBaseStack:number,
    remainedingBases:number,
    fullSvevesStack:number,
    remainingSleves:number,
}

export type TrailersResult={
    totalTrailers:number,
    fullTrailers:number,
    lastTrailer:number,
   plantsRemaining:number,
   fullRemaindingBoxs:number,
   plantsPerBox:number
}

export type WoodenCrateResult={
    totalCrates:number
    fullCrates:number
    plantsPerLine:number
    plantsPerRow:number
    lastCrateAmount:number
    lastCrateBack:string

   

}