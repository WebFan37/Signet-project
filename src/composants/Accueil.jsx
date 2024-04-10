import './Accueil.scss';
import logo from '../images/signets-logo.png';
import boutonGoogle from '../images/btn-connexion-google.png';
import {connexion} from '../code/user-model';


// //import Google authentification and provider from firebase
// import {authentification, provider} from '../code/initialisation';

// //Import Sign in with popup
// import { signInWithPopup } from 'firebase/auth';



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
                <div className="bouton-Google" onClick={connexion}>
                    <img src={boutonGoogle} alt="bouton connexion bouton"/>
                    Connexion avec Google
                </div>
            </section>
        </div>
    )
}

export default Accueil;