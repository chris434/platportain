export function setLocalStorage(key:string,value:unknown){
    console.log(value)
localStorage.setItem(key,JSON.stringify(value));
}

export function getLocalStorage<T>(key:string,fallback:unknown):T{
    const value=localStorage.getItem(key);
    return value? JSON.parse(value) : fallback;
}