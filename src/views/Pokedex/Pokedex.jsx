import React from 'react'
import { useSelector } from 'react-redux'
import ListPokemon from "../../components/ListPokemon/ListPokemon"

const Pokedex = () => {

  const pokedex = useSelector(state=>state.pokedex)
  return (
    <>
    {
      pokedex && <ListPokemon pokemons={pokedex}/>
    }
    </>
  )
}

export default Pokedex