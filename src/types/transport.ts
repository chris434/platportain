import type { TrollyResult,TrailersResult,WoodenCrateResult } from "./result"
import type {PotSize} from './potSize'
import type { transportTypes } from "./transportType"

export type Transport={
    id:string,
    name:string,
    createdDate:Date,
    potSize:PotSize,
     plantQuanity:number,
    shelvesPerTrolly:number,
    transportType:transportTypes
    potCoverType:string,
    result:ResultData
}

type ResultData=TrollyResult|TrailersResult|WoodenCrateResult|null
