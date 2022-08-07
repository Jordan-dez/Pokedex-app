/******
 * Tous les imports sont ici
 */
import React, { useEffect, useState, useCallback, useRef } from 'react'
import ListPokemon from '../../components/ListPokemon/ListPokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import axios from 'axios';
import { usePokemonList } from '../../services/Pokemon/Pokemons/';
import SearchBar from '../../components/SearchBar/SearchBar'


const Home = () => {
  /***
   * Déclaration et initialisation des states
   */
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [searchValue,setSearchValue] = useState("");
  /**
   * USEEFFECT
   */
  const Allpokemons=usePokemonList();

   
  return (
    
    <section className='container '>
      <SearchBar setSearchValue={setSearchValue}/>

      <div>
        { pokemons &&  <ListPokemon pokemons={Allpokemons} loading={loading} searchValue={searchValue}/>}
      </div> 
    </section>
  )
}

export default Home
