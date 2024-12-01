import type {Transport} from '../types/transport'

export function createTransport(name=''):Transport{
    return {id:crypto.randomUUID()as string,name,plantQuanity:1,createdDate:new Date,transportType:'trolly',potCoverType:'barke',potSize:'1ltr',shelvesPerTrolly:1,result:null}as const
}