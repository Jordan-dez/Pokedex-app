import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='mt-5 container'>
            <article className='mt-5 d-flex align-items-center align-content-center justify-content-evenly flex-column flex-xl-row flex-lg-row'>
                <div className='w-50'>
                    <img src="assets/images/404error.png" alt="404 page introuvable" className='w-100' />
                </div>
                <div className="w-50 mt-5">
                    <h2 className="display-1 mb-5">Désolé !</h2>
                    <p>
                        La page que vous demandée a été volée par Chuck Norris . Nous n'osons pas lui demander de nous la restituer...
                    </p>
                    <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
                </div>
            </article>
        </section>
    )
}

export default NotFound