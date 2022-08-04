import React from 'react'


import PokemonCard from '../PokemonCard/PokemonCard'
import {getPokemonIdFromUrl} from "../../helpers/pokemonUtils/"
import {useSelector} from "react-redux"

const ListPokemon = ({ pokemons,searchValue}) => {
    const test = useSelector(state=>state.pokedex)
    return (
        <section className="d-flex flex-wrap">
            {
                // loading ?<p>loading</p> :
                 <>
                {
                    pokemons?.filter((pokemon)=>{
                        if(searchValue==""){
                            return pokemon
                        }else if(pokemon.name.toLowerCase().includes(searchValue?.toLowerCase())){
                            return pokemon
                        }
                    }).map((pokemon,index) =>{ 
                        // console.log("pokemon?.url",pokemon?.url)
                    return <PokemonCard
                         name={pokemon.name}
                          id={getPokemonIdFromUrl(pokemon?.url)}
                         key={pokemon.name}
                    />})
                }
                </>

            }
        </section>
    )
}

export default ListPokemon