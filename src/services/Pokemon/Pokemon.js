import { useState, useEffect } from 'react';
import axios from 'axios';

function usePokemons() {
    const [loading, setLoading] = useState(false);
    const [error,setError]=useState(null)
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setPokemons(data.results);
            setLoading(false);
        }
        fetchData();
    }, [])
    return {}
}

export default usePokemons