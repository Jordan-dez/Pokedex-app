/****
 * service permettant de fetcher un seul pokemon
 * cette function intérroge une url et retourne une promeesse qui sera resolue où elle sera exploitée
 * et permet d'avoir les détails d'un pokémon
 */

const URL = 'https://pokeapi.co/api/v2/pokemon/';
export const getPokemon = (id) => {
  return fetch(`${URL}${id}`).then((response) => response.json());
};
