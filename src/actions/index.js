import {ADD,REMOVE} from "./type";

export function AddToLocalStorage(pokemon){

    return {
        type : ADD,
        payload:pokemon
    }

}
export function RemoveToLocalStorage (pokemon){
    return {
        type : REMOVE,
        payload : pokemon
    }
}