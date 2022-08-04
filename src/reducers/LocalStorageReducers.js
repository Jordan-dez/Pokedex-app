/**
 * TOUS LES IMPORTS DES FONCTIONS ET LIBRAIRIES ICI
 */
import {ADD,REMOVE} from "../actions/type.js"
import {setLocalStorage} from "./LocalStoragePokemon/LocalStoragePokemon"
 


/**
 * on met dans le initialState un tableau vide si l'utilisateur n'a jamais/pas ajouté un pokémon dans le localStorage
 */
const initialState = localStorage.getItem("pokedex") ? JSON.parse(localStorage.getItem("pokedex")):[];

const LocalStorage = (state=initialState,action)=>{

    switch(action.type){
        case ADD:
            /**
             * si l'action type dispatché est ADD on vérifie si le pokémon ne se trouve pas encore 
             * dans le store puis on l'ajoute
             */
            if(!state.find((pokemon)=>{
                pokemon.name===action.payload.name;
                
            })){
                setLocalStorage([...state,action.payload]);
                return [...state,action.payload]
            }
        case REMOVE :
            /**
             * si l'action créator dispatché est REMOVE , on fait le clone du state et  dans le clone du state 
             * on recherche l'index de l'élément puis on le supprime du state cloné.
             * on fait appel à la fonction setLocalStorage pour repercuté le changement dans le localstorage
             * et on return le reste des éléments du state cloné 
             */
            let  pokemons = structuredClone(state);
            pokemons.splice(pokemons.findIndex((pokemon)=>{
                pokemon.name===action.payload.name;
            }),1)
            setLocalStorage(pokemons);
            return pokemons;
            /**
             * on retourne le state s'il s'est rien passé
             */
        default :
        return state;
    }

}
export default LocalStorage;