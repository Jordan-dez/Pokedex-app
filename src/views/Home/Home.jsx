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

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [searchValue,setSearchValue] = useState("");
  const [displayCount, setDisplayCount] = useState(20);
  // const myRef = useRef(null)

  // console.log('render', pokemons)
  
  // const handleEndReached = useCallback(()=>{
  //   console.log("displayCount<pokemons.length",displayCount,pokemons.length)
  //   if(displayCount<pokemons.length){
  //      setDisplayCount(prevCount => Math.min(prevCount+20, pokemons.length));
  //      console.log("test")
  //   }
  // }, [displayCount, pokemons.length])

  // add useMemo
  // const pokemonsToDisplay = pokemons.slice(0, displayCount)

  /**
   * fonction qui va s'éxécuter une fois en bas de la page
   */
    // const handleScroll = useCallback((e)=>{
      
    //   // console.log(e.target.documentElement.scrollTop)
    //   if(window.innerHeight + e.target.documentElement.scrollTop + 1>= e.target.documentElement.scrollHeight ){
    //     handleEndReached();
    //   }
    // }, [handleEndReached])

    // useEffect(()=>{
    //   //fonction qui fait appel à l'api ici
    //   if (myRef.current) {
    //     myRef.current.addEventListener('scroll',handleScroll)
    //   }
    // }, [myRef.current])

  useEffect(() => {
    setLoading(true);
    getPokemons().then((data) => {
      console.log("data home",data)
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  // const morePokemon = () => {
  //   setLoading(true);
  //   getMorePokemons(count + 19).then((data) => {
  //     setPokemons(data);
  //     setCount((prevCount) => {
  //       return prevCount + 20;
  //     });
  //     setLoading(false)
  //   });
  // };

  // const lessPokemon = () => {
  //   getMorePokemons(count - 21).then((data) => {
  //     setPokemons(data);
  //     setCount((prevCount) => {
  //       return prevCount - 20;
  //     });
  //   });
  // };

    // useEffect(()=>{
    //   console.log(searchValue)
    //   console.log("search",pokemons.results)
    // },[searchValue])
    // console.log("searchValue",searchValue)

  return (
    
      <>
      <SearchBar setSearchValue={setSearchValue}/>
      {/**/}
      {/* <ListPokemon pokemons={pokemonsToDisplay} count={count} loading={loading} searchValue={searchValue} onEndReached={handleEndReached}/> */}
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