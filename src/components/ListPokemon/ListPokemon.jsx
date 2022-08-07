import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import {useSelector} from "react-redux"
import ListPokemonStyle from "./ListPokemon.module.css"

const ListPokemon = ({ pokemons,searchValue}) => {
     const test = useSelector(state=>state.pokedex)
    return (
        <ul className="d-flex justify-content-center justify-content-md-between flex-wrap list-unstyled">
            {
                // loading ?<p>loading</p> :
                 <>
                {
                    pokemons?.filter((pokemon)=>{
                        if(searchValue==""|| searchValue==undefined){
                            return pokemon
                        }else if(pokemon.name.toLowerCase().includes(searchValue?.toLowerCase())){
                            return pokemon
                        }
                    })
                    .map((pokemon) =>{ 
                    return <PokemonCard
                            pokemon={pokemon}
                         key={pokemon.name}
                    />})
                }
                </>

            }
        </ul>
    )
}

export default ListPokemon