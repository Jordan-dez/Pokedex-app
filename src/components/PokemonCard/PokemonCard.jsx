import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import "./PokemonCard.css"

const PokemonCard = ({name,picture,id}) => {
    return (
        <article className='card position-relative'>
            <div className='position-absolute p-2 d-flex flex-column justify-content-between'>
                <Button>Ajouter</Button>
                <Link to={`pokemon/${id}`} className='btn btn-danger'>Détail</Link>
            </div>
            <img className='card-img-top' src={`${picture}`} alt={name} />
            <h3 className='text-center card-title'>{name}</h3>
        </article>
    )
}
export default PokemonCard