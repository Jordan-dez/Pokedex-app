import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

const ListPokemon = ({ pokemons }) => {
    console.log("poke",pokemons);
    return (
        <section className="d-flex flex-wrap">
        
            {
                pokemons && pokemons.map(pokemon => <PokemonCard
                    name={pokemon.name}
                    key={pokemon.id}
                    picture={pokemon.sprites.front_default}
                    id={pokemon.id}
                />)
            }
        </section>
    )
}

export default ListPokemon