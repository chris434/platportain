import { CRATE_POT_Size_KEYS, CRATE_POT_Size_Map, POT_Size_KEYS, TROLLY_POT_SIZE_KEYS } from "../data/potSize";

export type PotSize= typeof TROLLY_POT_SIZE_KEYS[number] 
export type PotSizeTrailer= Exclude<typeof POT_Size_KEYS[number],'1ltr'> 
export type PotSizeCrate= typeof CRATE_POT_Size_KEYS[number]
