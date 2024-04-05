import './Accueil.scss';
import logo from '../images/signets-logo.png';
import boutonGoogle from '../images/btn-connexion-google.png'

function Accueil(){

    return (
        <div className="Accueil">
            <img src={logo} alt="image logo-signet" />

            <h1>Signets <span>beta</span></h1>

            <h3>
                <span>Organiser vos signets</span>
                <span>Simple comme bonjour</span>
            </h3>

            <section className='Connexion'>
                <h2>Connexion à signets</h2>
                <div className="bouton-Google">
                    <img src={boutonGoogle} alt="bouton connexion bouton"/>
                    Connexion avec Google
                </div>
            </section>
        </div>
    )
}

export default Accueil;