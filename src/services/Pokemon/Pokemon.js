// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function usePokemons() {
   
//     return true;
// }

// export default usePokemons


import axios from 'axios';

export default async function getPokemons(url) {
    const { data } = await axios.get(url);
    return data;
}