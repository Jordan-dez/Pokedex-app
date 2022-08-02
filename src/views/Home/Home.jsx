import React, { useEffect, useState } from 'react'
import ListPokemon from '../../components/ListPokemon/ListPokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import usePokemons from '../../services/Pokemon/Pokemon'
import axios from 'axios';

const Home = () => {
  const [pokeData , setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [disable, setDisable] = React.useState(true);


  const pokeFunc = async() => {
      const res = await axios.get(url);

      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemonData(res.data.results);
      setLoading(false)

      console.log("PREV", res.data.previous);
      console.log("NEXT", res.data.next);

      if (res.data.previous != null) {
          setDisable(false);
      } else {
          setDisable(true);
      }
  }

  const getPokemonData = async(res) => {
      res.map(async(item)=>{
          const result =  await axios.get(item.url);
          // console.log("MAP DATA", result.data);
          setPokeData(state => {
              state = [...state,result.data]
              state.sort((a,b) => a.id>b.id?1:-1)
              return state;
          })
      })
  }

  console.log("pokedat",pokeData)
  useEffect(() => {
      pokeFunc()
  }, [url])
  return (
    <div>
      {
        loading ? <p>loading</p> : <ListPokemon pokemons={pokeData} />
      }
    </div>
  )
}

export default Home