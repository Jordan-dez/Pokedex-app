// import { useState, useEffect } from 'react';
 import axios from 'axios';
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getPokemons = async () => {
    try {
        const { data } = await axios.get(URL);
        console.log(data)
        return data.results;

    } catch (error) {
        console.log("error",error)
    }
  
};

// export const getMorePokemons = (offset) => {
//     try {
//         return fetch(`${URL}?offset=${offset}&limit=20`).then((response) =>
//         response.json()
//       );
//     } catch (error) {
//         console.log(error)
        
//     }

// };
