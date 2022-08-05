import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import stylesCard from "./PokemonCard.module.css"
import {useDispatch,useSelector} from "react-redux";
import {AddToLocalStorage,RemoveToLocalStorage} from "../../actions/index"
import {getPokemonIdFromUrl} from "../../helpers/pokemonUtils/"
import Swal from 'sweetalert2'



const PokemonCard = ({pokemon}) => {
    const {url,name} = pokemon;

    const id = getPokemonIdFromUrl(pokemon.url)

    const dispatch = useDispatch();
    const pokedex = useSelector(state=>state.pokedex)

    const isInLocalStorage =pokedex.find((pokemon)=>
        
        pokemon.name===name
    )
        console.log("isInLocalStorage",isInLocalStorage)

    const onTagle =()=>{

        console.log("isInLocalStorage in if",isInLocalStorage)
        if(isInLocalStorage){
            Swal.fire({
                title: 'Etes-vous sûr ?',
                text: "Voulez-vous le supprimer de votre pokédex ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok',
                cancelButtonText:"Quitter"
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

        }else{
            
            dispatch(AddToLocalStorage({
                name,
                url
            }))
        }

    }

    return (
        <li className={`${stylesCard.cart}  col-8 col-lg-2 p-2`}>
            <div>
                <Button onClick={()=>onTagle()} className={isInLocalStorage?"active":" "}>
                    {isInLocalStorage ? "Retirer":"ajouter"} 
                </Button>
            </div>
            <div>
                <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt={name} />
            </div>
            <h4 className="text-white text-center">{name}</h4>
            <div class="row">
                <div class="col text-center">
                    <Link to={`/pokemon/${id}`} className='btn btn-light text-center'>Détail</Link>
                </div>
            </div>
        </li>
    )
}
export default PokemonCard