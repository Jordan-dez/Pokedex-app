/******
 * Tous les imports sont ici
 */
import React, { useEffect, useState, useCallback, useRef } from 'react'
import ListPokemon from '../../components/ListPokemon/ListPokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import axios from 'axios';
import { getPokemons } from '../../services/Pokemon/Pokemons/';
import SearchBar from '../../components/SearchBar/SearchBar'


const Home = () => {
  /***
   * Déclaration et initialisation des states
   */
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [searchValue,setSearchValue] = useState("");
  const [displayCount, setDisplayCount] = useState(20);
  /**
   * USEEFFECT
   */
  useEffect(() => {
    setLoading(true);
    /**
     * resolution de la promesse et récupération des données depuis l'api
     */
    getPokemons().then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  return (
    
    <>
      <SearchBar setSearchValue={setSearchValue}/>
      <div className='cards'>
        { pokemons &&  <ListPokemon pokemons={pokemons} loading={loading} searchValue={searchValue}/>}
      </div> 
    </>
  )
}

export default Home

/**
 * 
 * import React from 'react'

import InfiniteLoading from 'react-simple-infinite-loading'

function PokemonList({ items, fetchMore, hasMore }) {
  return (
    <div style={{ width: 300, height: 300 }}>
      <InfiniteLoading
        hasMoreItems={hasMore}
        itemHeight={40}
        loadMoreItems={fetchMore}
      >
        {items.map(item => <div key={item}>{item}</div>)}
      </InfiniteLoading>
    </div>
  )
}

<PokemonList items={pokemonsToDisplay} fetchMore={displayMorePokemons} hasMore={displayCount===pokemons.length} />
 */