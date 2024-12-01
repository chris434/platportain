import { get, writable } from "svelte/store";
import { calulateTrollys } from "../utils/trollyCalulater";
import type { PotSize,PotSizeTrailer } from "../types/potSize";
import { getContext, setContext } from "svelte";
import type { Transport } from "../types/transport";
import type { potCover } from "../types/potCover";
import type { transportTypes } from "../types/transportType";
import { calulateTrailers } from "../utils/trailerCalulater";
import { calulateCrates } from "../utils/crateCalulater";
import { page } from "$app/stores";
import { createTransport } from "../utils/createTransport";
import { getLocalTransports, setLocalTransports } from "../utils/localTransport";


function createStore(){
    const {set,subscribe,update}=writable<Transport>(createTransport())

    function localUpdate(cb:(trasport:Transport)=>Transport){
        const {id}=get(page).params
        const transports=getLocalTransports()
        update((transport)=>{
            return cb(transport)
        })
        const newTransports=transports.map(transport=>{
            if(transport.id===id) return cb(transport)
            return transport
           })
           setLocalTransports(newTransports)
    }

function calculate(plantQuanity:number,shelvesPerTrolly:number,transportType:transportTypes,potCoverType:potCover,potSize:PotSize|PotSizeTrailer){
const trollyArg={plantQuanity,shelvesPerTrolly,potSize, result:calulateTrollys(plantQuanity,shelvesPerTrolly,potSize)}
const trailerArg={plantQuanity,potCoverType,potSize:potSize==='1ltr'?'2ltr':potSize, result:calulateTrailers(plantQuanity,potCoverType,potSize==='1ltr'?'2ltr':potSize)}
const ceateArg={plantQuanity,potSize,result:calulateCrates(plantQuanity,potSize!=='2ltr D'&&potSize!=='3ltr D'?'2ltr D':potSize)}
const result={transportType,...transportType==='trolly'?trollyArg:transportType==='trailer'?trailerArg:ceateArg}

localUpdate(transport=>{
    return {...transport,...result}
})
}

function editName(name:string){
   localUpdate((transport)=>{
     return {...transport,name}
   })
}

function resetTransport(){
   localUpdate((transport)=>{
    return  {...transport,plantQuanity:1,potCoverType:'barke',potSize:'1ltr',shelvesPerTrolly:1,transportType:'trolly', result:null}
   })
}
function setTransport(transport:Transport){
    set(transport)
}
    return {
        subscribe,
        calculate,
        resetTransport,
        setTransport,
        editName,
    }
}
type StoreReturn=ReturnType<typeof createStore>
const CONTEXT_NAME='transport'
export function setTransport(){
    setContext(CONTEXT_NAME,createStore())
}

export function getTransport(){
    return getContext<StoreReturn>(CONTEXT_NAME)
}