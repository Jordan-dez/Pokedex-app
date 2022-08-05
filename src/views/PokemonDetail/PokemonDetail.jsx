/******
 * Tous les imports sont ici
 */
import React,{useEffect,useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useFecthOnePokemon,useFecthPokemonEvolution} from '../../services/Pokemon/Pokemon/';
import { v4 as uuidv4 } from 'uuid';

const PokemonDetail = () => {
    /****
     * déclaration et initialisation du state qui recevra les infos du pokémon
     */
    //  const [pokemon,setPokemon]=useState(null)

    /**
     *
     * Récupération de l'id de l'event sur lequel on a cliqué sur le button "detail"
    */
        const params = useParams();
        const { id } = params;
        const pokemon = useFecthOnePokemon(id);
        const {pokemonEvolutions,pokemonSpecies}=useFecthPokemonEvolution(id);

        const { flavor_text : description } = pokemonSpecies.flavor_text_entries?.find(({ language, version }) => {
            return (language.name === 'en' && version.name === 'sword')
        }) ?? {};
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
                            return <div key={uuidv4()}>
                                <>
                                    <p className='col-6'>{stat.base_stat}</p>
                                    <ProgressBar now={stat.base_stat-40} label={`${stat.base_stat}`}  className="col-6"/>
                                </>
                             </div>
                        })
                    }
                </div>
            </div>
            <p><strong>Flame Pokémon</strong></p>
            <p>{description}</p>
            <h5>Profile</h5>
            <div className="row">
                <div className="col">
                    <p><strong>Height :</strong> {pokemon.height/10} m</p>
                    <p><strong>Catch Rate :</strong> 0%</p>
                    <p><strong>Egg Groups :</strong>Monster Dragon</p>
                    <p><strong>Abilities :</strong> {pokemon.abilities.map(ab=>(<span key={uuidv4()}>{ab.ability.name}{','}</span>))}</p>
                </div>
                <div className="col">
                    <p><strong>Weight :</strong> {pokemon.weight/10} kg</p>
                    <p><strong>Gender Ratio :</strong> 87.5% 12.5%(pas de data)</p>
                    <p><strong>Hatch Steps :</strong> 5100(pas de data)</p>
                    <p><strong>Abilities :</strong> Blaze,solar-power(pas de data)</p>
                </div>
                
                </div>

                    
                    <div>
                        {
                            pokemon.types.map(type=><p key={uuidv4()}> {type.type.name}</p>)
                        }
                    </div>
                    <ul>
                            {pokemonEvolutions?.map(evolution => <li key={uuidv4()}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${evolution.id}.gif`} /><p>{evolution.name}</p></li>)}
                    </ul>
                
                </>
            }
        </article>
    )
}

export default PokemonDetail