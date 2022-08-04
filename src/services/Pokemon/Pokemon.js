/****
 * service permettant de fetcher un seul pokemon
 */

const URL = 'https://pokeapi.co/api/v2/pokemon/';
export const getPokemon = (id) => {
  return fetch(`${URL}${id}`).then((response) => response.json());
};
