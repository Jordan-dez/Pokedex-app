import { useState, useEffect } from 'react';
import axios from 'axios';

function usePokemons() {
    /**déclaration et initialization des hooks */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [nextUrl, setNextUrl] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    

    const fetchData=async()=>{
        setLoading(true);
        try {
            const response = await axios.get(url);
            setNextUrl(response.data.next)
            setPreviewUrl(response.data.previous)
            getPokemon(response.data.results)
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    }
    const getPokemon = async(response)=>{
       response.map(async(item)=>{
        const resultat=await axios.get(item.url);
        setPokemons(state=>{
           state=[...state,resultat.data]
           state.sort((a,b)=>a.id>b.id?1:-1)
           return state;
        })
       })
    }
    useEffect(() => {
        /***fetchData function */
        fetchData();
    }, [url])
    return { loading, error, pokemons }
}

export default usePokemons