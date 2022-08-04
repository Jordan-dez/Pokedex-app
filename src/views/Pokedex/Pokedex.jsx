/******
 * Tous les imports sont ici
 */
import React from 'react'
import { useSelector } from 'react-redux'
import ListPokemon from "../../components/ListPokemon/ListPokemon"

const Pokedex = () => {
  /**
   * Déclaration des constantes
   */
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