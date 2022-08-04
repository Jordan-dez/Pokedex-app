/******
 * Tous les imports sont ici
 */
import React, { useEffect, useState } from 'react'
import ListPokemon from '../../components/ListPokemon/ListPokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import axios from 'axios';
import { getPokemons, getMorePokemons } from '../../services/Pokemon/Pokemons/';
import SearchBar from '../../components/SearchBar/SearchBar'


const Home = () => {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);
  const [searchValue,setSearchValue] = useState(null);


  useEffect(() => {
    setLoading(true);
    getPokemons().then((data) => {
      setPokemons(data);
      setLoading(false)
    });
  }, []);

  const morePokemon = () => {
    setLoading(true);
    getMorePokemons(count + 19).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount + 20;
      });
      setLoading(false)
    });
  };

  const lessPokemon = () => {
    getMorePokemons(count - 21).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount - 20;
      });
    });
  };
  return (
    <>
      <SearchBar/>
    <div className='cards'>
    { loading?<p>loading</p> : <ListPokemon pokemons={pokemons.results} count={count}/>
    }
  </div>
  <div className='footer'>
    {
      count > 1?<div className='btn' onClick={lessPokemon}>
      <h3 className='btn__text'>Precedent</h3>
    </div>:null
    }
    
    <div className='btn' onClick={morePokemon}>
      <h3 className='btn__text'>Suivant</h3>
    </div>
  </div>
  </>
  )
}

export default Home