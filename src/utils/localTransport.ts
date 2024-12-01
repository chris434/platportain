import type { Transport } from "../types/transport";
import { getLocalStorage,setLocalStorage } from "./localStorage";

const LOCAL_KEY='transports'
export function getLocalTransports(){
    return getLocalStorage<Transport[]>(LOCAL_KEY, [])
}
export function setLocalTransports(trasports:Transport[]){
    return setLocalStorage(LOCAL_KEY,trasports)
}