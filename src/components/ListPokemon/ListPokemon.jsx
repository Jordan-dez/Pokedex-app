import React from 'react'


import PokemonCard from '../PokemonCard/PokemonCard'
import {getPokemonIdFromUrl} from "../../helpers/pokemonUtils/"
import {useSelector} from "react-redux"

const ListPokemon = ({ pokemons,searchValue}) => {
     const test = useSelector(state=>state.pokedex)
    console.log(searchValue)
    return (
        <ul className="row  ">
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
                    }).map((pokemon,index) =>{ 
                        // console.log("pokemon?.url",pokemon?.url)
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