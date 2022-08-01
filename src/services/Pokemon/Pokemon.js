import { useState, useEffect } from 'react';
import axios from 'axios';

function usePokemons() {
    /**déclaration et initialization des hooks */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        /***fetchData function */
        async function fetchData() {
            setLoading(true);
            try {
                const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
                setPokemons(data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, [])
    return {loading,error,pokemons}
}

export default usePokemons