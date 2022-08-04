import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import "./PokemonCard.css"
import {useDispatch,useSelector} from "react-redux";
import {AddToLocalStorage,RemoveToLocalStorage} from "../../actions/index.js"



const PokemonCard = ({name,id}) => {

    const dispatch = useDispatch();
    const pokedex = useSelector(state=>state.pokedex)

    const isInLocalStorage =pokedex.find((pokemon)=>
        
        pokemon.name===name
    )
        console.log("isInLocalStorage",isInLocalStorage)

    const onTagle =()=>{
        console.log("isInLocalStorage in if",isInLocalStorage)
        if(isInLocalStorage){
            dispatch(RemoveToLocalStorage({
                name,
                id
            }))

        }else{
            
            dispatch(AddToLocalStorage({
                name,
                id
            }))
        }

    }

    return (
        <div className='card position-relative'>
            <div className='position-absolute p-2 d-flex flex-column justify-content-between'>
                <Button onClick={()=>onTagle()} className={isInLocalStorage?"active":" "}>
                {isInLocalStorage?"Retier":"ajouter"} 
                </Button>
                <Link to={`pokemon/${id}`} className='btn btn-danger'>Détail</Link>
            </div>
            <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt={name} />
            <h3 className='text-center card-title'>{name}</h3>
        </div>
    )
}
export default PokemonCard