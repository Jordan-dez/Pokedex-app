import {ADD,REMOVE} from "../actions/type.js"
import {setLocalStorage} from "./LocalStoragePokemon/LocalStoragePokemon"



const initialState = localStorage.getItem("pokedex") ? JSON.parse(localStorage.getItem("pokedex")):[];
const LocalStorage = (state=initialState,action)=>{
    switch(action.type){
        case ADD:
            if(!state.find((pokemon)=>{
                pokemon.name===action.payload.name;
                
            })){
                setLocalStorage([...state,action.payload]);
                return [...state,action.payload]
            }
        case REMOVE :
            let  pokemons = structuredClone(state);
            pokemons.splice(pokemons.findIndex((pokemon)=>{
                pokemon.name===action.payload.name;
            }),1)
            setLocalStorage(pokemons);
            return pokemons;
        default :
        return state;
    }

}
export default LocalStorage;