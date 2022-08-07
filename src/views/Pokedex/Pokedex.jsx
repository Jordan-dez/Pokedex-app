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
    <div className="container mt-4">
    {
      pokedex && <ListPokemon pokemons={pokedex}/>
    }
    </div>
  )
}

export default Pokedex