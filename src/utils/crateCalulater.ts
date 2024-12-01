import { CRATE_LINES, CRATE_ROWS } from "../data/crateRows"
import { CRATE_POT_Size_Map } from "../data/potSize"
import type {PotSizeCrate} from "../types/potSize"
import type {WoodenCrateResult } from "../types/result"
import { calculate } from "./calulate"
import { oddEvenReturns} from "./mic"
function splitNumber(number:number){
const [full,remaineder]=number.toString().split('.')
return [parseInt(full),parseInt(remaineder)]
}

export function calulateCrates(amount:number,potSize:PotSizeCrate):WoodenCrateResult{
    const selectedPotSize =CRATE_POT_Size_Map[potSize]
    const rows=CRATE_ROWS[potSize]
    const plantsPerLine=CRATE_LINES[potSize]
    const plantsPerRow=selectedPotSize
const {fullTransport:fullCrates,lastTransport:lastCrate}=calculate(amount,selectedPotSize,rows)
const lastCrateAmount=lastCrate
const totalCrates=fullCrates+(oddEvenReturns(lastCrate))
const lastCrateDividededByRow= lastCrateAmount/rows
const lastCrateDividededByLine= lastCrateDividededByRow/plantsPerLine
const [fullRows,remainederRows] =splitNumber(lastCrateDividededByLine)
const backRowsRemainder= remainederRows!==-1?lastCrateAmount- fullRows*rows*plantsPerLine:0
const backRowsDividedByLine =backRowsRemainder/plantsPerLine
const [fullBackRows] =splitNumber(backRowsDividedByLine)
const lastCrateBackRows=fullBackRows?fullBackRows:rows
const lastCrateBackLines=fullBackRows?fullRows+1:fullRows
const fullBackLines=fullBackRows*plantsPerLine
const lastCrateBackLinesPlants=backRowsRemainder-fullBackLines
const lastCrateRemainder=rows-lastCrateBackRows-(lastCrateBackLinesPlants?+1:+0)
const remainederBackRowsString=lastCrateBackLinesPlants?{remainederBackRows:`${fullRows} lines + ${lastCrateBackLinesPlants} plants`}:{}
const lastCrateRemainderString=lastCrateRemainder?{lastCrateRemainder:`${lastCrateRemainder} rows by ${fullRows} lines`}:{}
const lastCrateBack=`${lastCrateBackRows} rows by ${lastCrateBackLines} lines`
return {
totalCrates,
fullCrates,
plantsPerLine,
plantsPerRow,
lastCrateAmount,
lastCrateBack,
...remainederBackRowsString,
...lastCrateRemainderString
}
}