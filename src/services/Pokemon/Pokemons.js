/**
 * TOUS LES IMPORTS DES FONCTIONS ET LIBRAIRIES ICI
 */

 import axios from 'axios';
 /****
  * Déclaration d'une constante
  */
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

/******
 * cette function intérroge une url et retourne une promeesse qui sera resolue où elle sera exploitée
 * et permet d'avoir les 151 pokémons
 */
export const getPokemons = async () => {
    try {
        const { data } = await axios.get(URL);
        console.log(data)
        return data.results;

    } catch (error) {
        console.log("error",error)
    }
  
};
