import { TRAILER_BARKE_POT_Size_Map,TRAILER_TOPPER_POT_Size_Map } from "../data/potSize"
import type { potCover } from "../types/potCover"
import type { PotSizeTrailer} from "../types/potSize"
import type { TrailersResult } from "../types/result"
import { calculate } from "./calulate"
import { oddEvenReturns, truncNumber } from "./mic"

export function calulateTrailers(amount:number,potCover:potCover,potSize:PotSizeTrailer):TrailersResult{
const selectedPotSize =potCover==='barke'?TRAILER_BARKE_POT_Size_Map[potSize]:TRAILER_TOPPER_POT_Size_Map[potSize]
const {fullTransport:fullTrailers,lastTransport:lastTrailer}=calculate(amount,selectedPotSize,40)
const totalTrailers=fullTrailers+(oddEvenReturns(lastTrailer))
const remaindingBoxs=lastTrailer/selectedPotSize
const fullRemaindingBoxs=truncNumber(remaindingBoxs)
const plantsRemaining=lastTrailer- fullRemaindingBoxs*selectedPotSize


return {
    fullTrailers,
    lastTrailer,
    totalTrailers,
    fullRemaindingBoxs,
    plantsRemaining,
    plantsPerBox:selectedPotSize
}
}

