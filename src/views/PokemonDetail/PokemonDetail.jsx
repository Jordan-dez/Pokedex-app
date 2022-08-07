/******
 * Tous les imports sont ici
 */
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFecthOnePokemon, useFecthPokemonEvolution } from '../../services/Pokemon/Pokemon/';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { AddToLocalStorage, RemoveToLocalStorage } from '../../actions';
import { BiPlusMedical  } from "react-icons/bi";
import { FaMinus} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import pokeDetail from "./PokemonDetail.module.css"

const PokemonDetail = () => {
    /****
     * déclaration et initialisation du state qui recevra les infos du pokémon
     */

    /**
     *
     * Récupération de l'id de l'event sur lequel on a cliqué sur le button "detail"
    */
    const params = useParams();
    const { id } = params;
    /***appel de useFecthOnePokemon et useFecthPokemonEvolution*/
    const pokemon = useFecthOnePokemon(id);
    const { pokemonEvolutions, pokemonSpecies } = useFecthPokemonEvolution(id);
    /**déclaration de const url et extraction de name dans pokemon */
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const name = pokemon?.name;
    /**
     * Récupération de la description d'un pokémon
     */
    const { flavor_text: description } = pokemonSpecies.flavor_text_entries?.find(({ language, version }) => {
        return (language.name === 'en' && version.name === 'sword')
    }) ?? {};
    /***
     * constant dispatch 
     */
    const dispatch = useDispatch();
    const pokedex = useSelector(state => state.pokedex)

    /***
     * check if pokedex contains current pokemon
     */
    const isInLocalStorage = pokedex.find((poke) =>

        poke.name === pokemon?.name
    )
    /******
     * togggle to remove or add poke in localStorage
     */

    const onTagle = () => {
        if (isInLocalStorage) {
            Swal.fire({
                title: 'Etes-vous sûr ?',
                text: "Voulez-vous le supprimer de votre pokédex ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok',
                cancelButtonText: "Quitter"
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(RemoveToLocalStorage({
                        name,
                        url
                    }))
                    Swal.fire(
                        'pokémon retiré !',
                        "",
                        "success"
                    )
                }
            })

        } else {

            dispatch(AddToLocalStorage({
                name,
                url
            }))
        }

    }
    return (
        <div className={`${pokeDetail.detail_container } p-5`}>
            {
                pokemon &&
                <div className={`${pokeDetail.info__container}`}>
                    <section className={`${pokeDetail.info__container__img}`}>
                        <div className='mr-0'>
                            <Button className={`${pokeDetail.fav_detail_btn} mt-2 btn-success`} onClick={() => onTagle()}>
                                {isInLocalStorage ? <><FaMinus></FaMinus><span>Retirer des favoris</span></> : <><BiPlusMedical></BiPlusMedical><span>ajouter aux favoris</span></>}
                            </Button>
                        </div>
                        <p className={`${pokeDetail.pokemon__id}`}>#{pokemon.id}</p>
                        <p className={`${pokeDetail.pokemon__name}`}>{pokemon.name}</p>
                        <div className={`${pokeDetail.pokemon__genera}`} style={{ background: "rgb(168, 255, 152)" }}>{pokemonSpecies?.genera[7].genus}</div>
                        <div>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
                        </div>
                        <div className={`${pokeDetail.info__container__data__type}`}>
                            {
                                pokemon.types.map(type => <>
                                    <p className={`${pokeDetail.poke__type__bg}`} key={uuidv4()}>
                                        {type.type.name}
                                    </p>
                                </>)
                            }
                        </div>
                        <div>

                        </div>
                        <div className={`${pokeDetail.dimensions}`}>
                            <p>
                                <span className={`${pokeDetail.info__container__headings}`} style={{ fontSize: "20px" }}>Height</span>: {pokemon.height / 10} m
                            </p>
                            <p><span className={`${pokeDetail.info__container__headings}`} style={{ fontSize: "20px" }}>Weight</span>: {pokemon.weight / 10} kg</p>
                        </div>
                        <div className={`${pokeDetail.gender__container}`}>
                            <div>
                                <p> Egg Groups :</p>
                                <ul>
                                    {pokemonSpecies && pokemonSpecies.egg_groups.map(egggroup => <li key={uuidv4()}>{egggroup.name}</li>)}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className={`${pokeDetail.info__container__data}`} >
                        <div className="right__box">
                            <section>
                                <h2 className={`${pokeDetail.info__container__headings}`}>Description</h2>
                                <p className={`${pokeDetail.desc}`}>{description}</p>
                            </section>

                            <section className={`${pokeDetail.info__container__data__header}`}>
                                <div className={`${pokeDetail.info__container__data__abilities}`}>
                                    <h3 className={`${pokeDetail.info__container__headings}`}>Abilities
                                    </h3>
                                    <div className={`${pokeDetail.ability__list__bg}`}>
                                        <ul className="ability__list">
                                            {pokemon.abilities && pokemon?.abilities?.map(ab => (<li key={uuidv4()}>{ab.ability.name}</li>))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className={`${pokeDetail.info__container__headings} ${pokeDetail.stats}`}>
                                    Base Stats
                                </div>
                                <div className={`${pokeDetail.info__container__data__data}`} >
                                    {
                                        pokemon && pokemon.stats.map(st =>
                                            <div className={`${pokeDetail.info__container__stat__columns} d-flex`} key={uuidv4()}>

                                                <p className={`${pokeDetail.info__container__stat__columns__name } w-25`}>{st.stat.name}</p>
                                                <div className="progress w-50">
                                                    <div className="progress-bar bg-info " role="progressbar" style={{ "width": `${st.base_stat * 100 / 150}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> {st.base_stat}</div>
                                                </div>
                                            </div>)
                                    }
                                </div>

                            </section>

                            <section>
                                <div className={`${pokeDetail.info__container__headings}`}>Evolution</div>
                                <div className={`${pokeDetail.evolution__box}`}>
                                    {
                                        pokemonEvolutions?.map((evolution, index, elements) =>
                                            <div className={`${pokeDetail.evolution__sub__box}`} key={uuidv4()}>
                                                <div>
                                                    <div>
                                                        <div className={`${pokeDetail.evolution__img__div}`}>
                                                            <div className={`${pokeDetail.transparency__div}`}>
                                                                <span className={`${pokeDetail.blur}`}  style={{ display: "inline-block", height: "80", width: "80" }}>
                                                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolution.id}.svg`} alt={evolution.name} className={`${pokeDetail.evo_img}`} style={{ display: "inline-block", width: "80", height: "80" }}>
                                                                    </img>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`${pokeDetail.evolution__poke__name}`}>
                                                        {evolution.name}
                                                    </div>
                                                </div>

                                                {elements[index + 1] && <AiOutlineArrowRight className={`${pokeDetail.arrow__right}`} ></AiOutlineArrowRight>}
                                            </div>
                                        )

                                    }
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