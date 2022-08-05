/**
 * TOUS LES IMPORTS DES FONCTIONS ET LIBRAIRIES ICI
 */

 import axios from 'axios';
 import {useEffect,useState} from "react"
 /****
  * Déclaration d'une constante
  */
//const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

/******
 * cette function intérroge une url et retourne une promeesse qui sera resolue où elle sera exploitée
 * et permet d'avoir les 151 pokémons
 */
// export const getPokemons = async () => {
//     try {
//         const { data } = await axios.get(URL);
//         console.log(data)
//         return data.results;

//     } catch (error) {
//         console.log("error",error)
//     }
  
// };
// variables & constantes
let perPage = 20
let limit = 898
let offset = 0 // à partir de quel pokémon on prend en compte la recherche -> ici le tout premier
const base = 'https://pokeapi.co/api/v2/'

export function usePokemonList() {
    
        // déclaration de states : 
        // - pokemons pour les pokémons dans la rangée
        const [pokemons, setPokemons] = useState([])
        // - pokemonRow pour l'augmentation de la rangée, passant de 20 en 20
        const [pokemonRow, setPokemonRow] = useState(perPage)
        const [allPokemons, setAllPokemons] = useState([])

        useEffect( () => {
            async function fetchList() {

                // récupération de tous les pokémons via l'API
                const { data } = await axios.get(`${base}pokemon?limit=${limit}&offset=0`)
                .catch( (error) => { 
                    console.log(error)
                })

                // tous les pokémons sont poussés dans un tableau
                const row = []
                data.results.map( element => {
                    row.push(element)
                })
                
                // on découpe ce tableau par tranche; une nouvelle tranche sera appelée à chaque modifiction de pokemonRow
                const sliced = row.slice(offset, offset + pokemonRow)
                setPokemons(sliced)
                setAllPokemons(row)

            }
            window.addEventListener('scroll', bottomList) 
            fetchList()
        },[pokemonRow]) 

        // modifie pokemonRow (tranche de 20) à chaque fois que le visiteur défile tout en bas de son écran
        const bottomList = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            if( pokemons.length < limit) {
                if (scrollHeight - scrollTop <= clientHeight) {
                    setPokemonRow( pokemonRow => pokemonRow + 20)
                }
            }
        }

    return pokemons;
}