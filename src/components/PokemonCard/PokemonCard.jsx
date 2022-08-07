import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import stylesCard from "./PokemonCard.module.css"
import { useDispatch, useSelector } from "react-redux";
import { AddToLocalStorage, RemoveToLocalStorage } from "../../actions/index"
import { getPokemonIdFromUrl } from "../../helpers/pokemonUtils/"
import Swal from 'sweetalert2'
import { BsFillEyeFill } from "react-icons/bs";
import { BiPlusMedical  } from "react-icons/bi";
import { FaMinus} from "react-icons/fa";



const PokemonCard = ({ pokemon }) => {
    const { url, name } = pokemon;

    const id = getPokemonIdFromUrl(pokemon.url)

    const dispatch = useDispatch();
    const pokedex = useSelector(state => state.pokedex)

    const isInLocalStorage = pokedex.find((pokemon) =>

        pokemon.name === name
    )
    console.log("isInLocalStorage", isInLocalStorage)

    const onTagle = () => {

        console.log("isInLocalStorage in if", isInLocalStorage)
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
        <li className={`${stylesCard.card} mb-5 position-relative mx-2`}>
            <figure className={`${stylesCard.card_fig}`}>
                <div className={`${stylesCard.card_box}`}>
                    <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt={name} />
                </div>
                <figcaption>
                    <p className={`${stylesCard.pk_name} text-center mt-3`}>{name}</p>
                </figcaption>
            </figure>
            <div className={`${stylesCard.box_icons} text-center position-absolute`}>
                <Link to={`/pokemon/${id}`} className={`${stylesCard.card_btn}  text-center text-decoration-none`}> <BsFillEyeFill></BsFillEyeFill><span>Détails</span> </Link>
                <Button onClick={() => onTagle()} className={`${stylesCard.card_btn} mt-2`}>
                    {isInLocalStorage ? <><FaMinus></FaMinus><span>Retirer des favoris</span></> : <><BiPlusMedical></BiPlusMedical><span>ajouter aux favoris</span></>}
                </Button>
                
            </div>
        </li>
    )
}
export default PokemonCard