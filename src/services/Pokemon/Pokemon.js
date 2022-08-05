/****
 * service permettant de fetcher un seul pokemon
 * cette function intérroge une url et retourne une promeesse qui sera resolue où elle sera exploitée
 * et permet d'avoir les détails d'un pokémon
 */

// const URL = 'https://pokeapi.co/api/v2/pokemon/';


// export const getPokemon = (id) => {
//   return fetch(`${URL}${id}`).then((response) => response.json());
// };

import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFecthOnePokemon(id) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon(data);
        }
        fetchData();
    }, [id]); 
    return pokemon;
}

export function useFecthPokemonEvolution(id) {
  const [pokemonSpecies, setPokemonSpecies] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
          setPokemonSpecies(data);
      }
      fetchData();
  }, [id]); 
  const pokemonEvolutions = takeAllpokemonEvolutions(pokemonSpecies?.evolution_chain?.url);
  return{ pokemonEvolutions,pokemonSpecies};
}

function takeAllpokemonEvolutions(url){

  const [eachEvolution,setEachEvolution] = useState([]);
  useEffect(()=>{
    axios.get(url).then(({data})=>{
      setEachEvolution(getArrayEvolutions(data?.chain));
    })
  },[url]);

  return eachEvolution
}

function getArrayEvolutions(chain,evolutions=[]){
  const name = chain.species.name;
  const id = Number(chain.species.url.split('/').reverse()[1]);

  evolutions.push({ name, id });

    if (chain.evolves_to.length === 0) return evolutions;
    else return getArrayEvolutions(chain.evolves_to[0], evolutions);
}
