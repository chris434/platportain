import { writable } from "svelte/store";
import { getContext, setContext } from "svelte";
import type { Transport} from "../types/transport";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { browser } from "$app/environment";
import { getLocalTransports,setLocalTransports } from "../utils/localTransport";
function createStore(){
    const {set,subscribe,update}=writable<Transport[]>([])

    subscribe(transports=>{
        const existingTransports= browser?getLocalTransports():[]
        if(browser &&existingTransports.length&& !transports.length) return set(existingTransports)
        if(browser) setLocalTransports(transports)
    })

    function refresh(newTransports:Transport[]){
     set(newTransports)
    }

    function createNewTransport(transport:Transport){
    update(transports=>{
    
        return transports=[transport,...transports];
    })
    }

    function editName(name:string,id:string){
        update(transports=>{
           const mappedTransports= transports.map(transport=>{
             if(transport.id===id) return {...transport,name}
             return transport
           })
           return mappedTransports
        })
    }

    function deleteTransport(id:string){
        update(transports=>{
            const newTransports= transports.filter(transport=>{
             if(id!==transport.id) return transport 
            })
            return newTransports
        })
       
    }

  
    return {
        subscribe,
        createNewTransport,
        editName,
        deleteTransport,
        refresh
    }
}
type StoreReturn=ReturnType<typeof createStore>
const CONTEXT_NAME='transports'
export function setTransports(){
    setContext(CONTEXT_NAME,createStore())
}

export function getTransports(){
    return getContext<StoreReturn>(CONTEXT_NAME)
}