// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function usePokemons() {
   
//     return true;
// }

// export default usePokemons


// import axios from 'axios';

// export default async function getPokemons(url) {
//     const { data } = await axios.get(url);
//     return data;
// }
const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};

export const getMorePokemons = (offset) => {
  return fetch(`${URL}?offset=${offset}&limit=20`).then((response) =>
    response.json()
  );
};
