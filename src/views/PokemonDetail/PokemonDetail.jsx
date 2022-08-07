/******
 * Tous les imports sont ici
 */
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useFecthOnePokemon, useFecthPokemonEvolution } from '../../services/Pokemon/Pokemon/';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./PokemonDetail.css"

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
    const { pokemonEvolutions, pokemonSpecies } = useFecthPokemonEvolution(id);

    const { flavor_text: description } = pokemonSpecies.flavor_text_entries?.find(({ language, version }) => {
        return (language.name === 'en' && version.name === 'sword')
    }) ?? {};

    return (
        <div className='detail_container p-5'>
            {
                pokemon &&
                <div className="info__container">
                    <section className="info__container__img">
                        <p className="pokemon__id">#{pokemon.id}</p>
                        <h1 className="pokemon__name">{pokemon.name}</h1>
                        <div className="pokemon__genera" style={{ background: "rgb(168, 255, 152)" }}>{pokemonSpecies?.genera[7].genus}</div>
                        <div>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
                        </div>
                        <div className="info__container__data__type">
                            {
                                pokemon.types.map(type => <>
                                    <p className="poke__type__bg" key={uuidv4()}>
                                        {type.type.name}
                                    </p>
                                </>)
                            }
                        </div>
                        <div>

                        </div>
                        <div className="dimensions">
                            <p>
                                <span className="info__container__headings" style={{ fontSize: "20px" }}>Height</span>: {pokemon.height / 10} m
                            </p>
                            <p><span className="info__container__headings" style={{ fontSize: "20px" }}>Weight</span>: {pokemon.weight / 10} kg</p>
                        </div>
                        <div className="gender__container">
                            <div>
                                <p> Egg Groups :</p>
                                <ul>
                                    {pokemonSpecies && pokemonSpecies.egg_groups.map(egggroup => <li key={uuidv4()}>{egggroup.name}</li>)}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="info__container__data">
                        <div className="right__box">
                            <section>
                                <h3 className="info__container__headings">Description</h3>
                                <p className="desc">{description}</p>
                            </section>

                            <section className="info__container__data__header">
                                <div className="info__container__data__abilities">
                                    <h2 className="info__container__headings">Abilities
                                    </h2>
                                    <div className="ability__list__bg">
                                        <ul className="ability__list">
                                            {pokemon.abilities && pokemon?.abilities?.map(ab => (<li key={uuidv4()}>{ab.ability.name}</li>))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="info__container__headings stats">
                                    Base Stats
                                </div>
                                <div className="info__container__data__data">
                                    {
                                        pokemon && pokemon.stats.map(st =>
                                            <div className="info__container__stat__columns d-flex" key={uuidv4()}>

                                                <p className="info__container__stat__columns__name w-25">{st.stat.name}</p>
                                                <div className="progress w-50">
                                                    <div className="progress-bar bg-info " role="progressbar" style={{"width": `${st.base_stat*100/150}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> {st.base_stat}</div>
                                                </div>
                                            </div>)
                                    }
                                </div>

                            </section>

                            <section>
                                <div className="info__container__headings">Evolution</div>
                                <div className="evolution__box">
                                    {
                                        pokemonEvolutions?.map((evolution, index, elements) =>
                                            <div className="evolution__sub__box" key={uuidv4()}>
                                                <div>
                                                    {/* style={{transform: rotate(360) translateZ(0)} */}
                                                    <div>
                                                        <div className="evolution__img__div">
                                                            {/* style="background: linear-gradient(rgb(168, 255, 152), rgb(214, 162, 228)); */}
                                                            <div className="transparency__div">
                                                                <span className=" lazy-load-image-background blur" style={{ display: "inline-block", height: "80", width: "80" }}>
                                                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolution.id}.svg`} alt={evolution.name} className="evo_img" style={{ display: "inline-block", width: "80", height: "80" }}>
                                                                    </img>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="evolution__poke__name">
                                                        {evolution.name}
                                                    </div>
                                                </div>

                                                {elements[index + 1] && <AiOutlineArrowRight className="arrow__right"></AiOutlineArrowRight>}
                                            </div>
                                        )

                                    }
                                    {/* <li key={uuidv4()}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${evolution.id}.gif`} /><p>{evolution.name}</p></li> */}

                                    {/* <div className="evolution__sub__box">
                                        <div>
                                            <div>
                                                <div className="evolution__img__div" style={{ background: "linearGradient(rgb(168, 255, 152)" }}>
                                                    <div className="transparency__div">
                                                        <span className=" lazy-load-image-background blur" style={{ display: "inline-block", height: "80", width: "80" }}>
                                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt="toto" className="evo_img" style={{ display: "inline-block", width: "80", height: "80" }} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="evolution__poke__name">
                                                ivysaur
                                            </div>
                                        </div>
                                        <svg className="MuiSvgIcon-root arrow__right" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                                        </svg>
                                    </div> */}
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            }
        </div>
    )
}

export default PokemonDetail