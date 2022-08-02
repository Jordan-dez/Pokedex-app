import React, { useEffect, useState } from 'react'
import ListPokemon from '../../components/ListPokemon/ListPokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
// import usePokemons from '../../services/Pokemon/Pokemon/Pokemon'
import axios from 'axios';
import { getPokemons, getMorePokemons } from '../../services/Pokemon/Pokemon/';

const Home = () => {
  // const [pokeData , setPokeData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  // const [nextUrl, setNextUrl] = useState();
  // const [prevUrl, setPrevUrl] = useState();
  // const [disable, setDisable] = React.useState(true);


  // const pokeFunc = async() => {


  //     const res = await axios.get(url);

  //     setNextUrl(res.data.next);
  //     setPrevUrl(res.data.previous);
  //     getPokemonData(res.data.results);
  //     setLoading(false)

  //     console.log("PREV", res.data.previous);
  //     console.log("NEXT", res.data.next);

  //     if (res.data.previous != null) {
  //         setDisable(false);
  //     } else {
  //         setDisable(true);
  //     }
  // }

  // const getPokemonData = async(res) => {
  //     res.map(async(item)=>{
  //         const result =  await axios.get(item.url);
  //         // console.log("MAP DATA", result.data);
  //         setPokeData(state => {
  //             state = [...state,result.data]
  //             state.sort((a,b) => a.id>b.id?1:-1)
  //             return state;
  //         })
  //     })
  // }

  // console.log("pokedat",pokeData)
  // useEffect(() => {
  //     pokeFunc()
  // }, [url])

  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const morePokemon = () => {
    getMorePokemons(count + 19).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount + 20;
      });
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
{/* <div>
      {
        loading ? <p>loading</p> : <ListPokemon pokemons={pokeData} />
      }
    </div> */}
  return (
    <>
    <div className='cards'>
    {pokemons.results &&
      pokemons.results.map((pokemon, index) => {
        return <PokemonCard key={index} {...pokemon} id={count + index} />;
      })}
  </div>
  <div className='footer'>
    {
      count > 1?<div className='btn' onClick={lessPokemon}>
      <h3 className='btn__text'>Back</h3>
    </div>:null
    }
    
    <div className='btn' onClick={morePokemon}>
      <h3 className='btn__text'>Next</h3>
    </div>
  </div>
  </>
  )
}

export default Home