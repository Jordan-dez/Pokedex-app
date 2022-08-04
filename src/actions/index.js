/**
 * TOUS LES IMPORTS DES FONCTIONS ET LIBRAIRIES ICI
 */
import {ADD,REMOVE} from "./type";
/**
 * action creator ayant pour but d'ajouter un pokémon du localStorage
 */
export function AddToLocalStorage(pokemon){

    return {
        type : ADD,
        payload:pokemon
    }

}
/**
 * action creator ayant pour but de retirer un pokémon du localStorage
 */
export function RemoveToLocalStorage (pokemon){
    return {
        type : REMOVE,
        payload : pokemon
    }
}