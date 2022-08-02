import React,{useEffect,useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import ProgressBar from 'react-bootstrap/ProgressBar';

const PokemonDetail = () => {

        const [pokemon,setPokemon]=useState(null)
    /**
     *
     * Récupération de l'id de l'event sur lequel on a cliqué sur le button "detail"
    */
    const params = useParams();
    const { id } = params

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(data=>{
            console.log(data.data)
            setPokemon(data.data)
        })
    },[id])

    return (
        <article>
            {
                pokemon && <>
                
                <h4>{pokemon.name}</h4>
            <div>
                <div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className='row'>
                    {
                        pokemon.stats.map(stat=>{
                            return <>
                                <>
                                    <p className='col-6'>{stat.base_stat}</p>
                                    <ProgressBar now={stat.base_stat-40} label={`${stat.base_stat}`}  className="col-6"/>
                                </>
                             </>
                        })
                    }
                </div>
            </div>
            <p><strong>Flame Pokémon</strong></p>
            <p>It is said that charizards fire burns hotter if it has experienced harsh battles</p>
            <h5>Profile</h5>
            <div className="row">
                <div className="col">
                    <p><strong>Height :</strong> {pokemon.height/10} m</p>
                    <p><strong>Catch Rate :</strong> 0%</p>
                    <p><strong>Egg Groups :</strong>Monster Dragon</p>
                    <p><strong>Abilities :</strong> {pokemon.abilities.map(ab=>(<>{ab.ability.name}{','}</>))}</p>
                </div>
                <div className="col">
                    <p><strong>Weight :</strong> {pokemon.weight/10} kg</p>
                    <p><strong>Gender Ratio :</strong> 87.5% 12.5%(pas de data)</p>
                    <p><strong>Hatch Steps :</strong> 5100(pas de data)</p>
                    <p><strong>Abilities :</strong> Blaze,solar-power(pas de data)</p>
                </div>
            </div>

                
                
                
                </>
            }
        </article>
    )
}

export default PokemonDetail