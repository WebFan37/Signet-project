
// Importation des modules
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

// Importation des variables
import { authentification, provider, firestore, collectionUser } from "./initialisation";

// Fonction de connexion
import {doc, setDoc} from 'firebase/firestore';




/**
 * Permet de se connecter avec Google
 * Authentification with Google
 
 */
export function connexion(){
    signInWithPopup(authentification, provider).then(
        //(u)=> console.log("User",u)
    ).catch()
}


/**
 * PERMET DE SE DECONNECTER
 * 
 */
export function deconnexion(params){
    signOut(authentification)
}


/**
 * Enregistre l'observateur de connexion Firebase Auth.
 * @param {function} mutateurUtil fonction de mutation de l'état 'utilisateur'.
 * @return void.
 */
export function observerEtatConnexion(mutateurUtil) {
    onAuthStateChanged(authentification, u => {
                        if(u) {
                          // Enregistrer les données de cet utilisateur dans Firestore
                          setDoc(doc(firestore, collectionUser, u.uid), 
                            {
                                nom_complet: u.displayName,
                                avatar: u.photoURL,
                                oc: (new Date()).getTime(),
                                courriel: u.email
                            },
                            {merge: true}
                        )
                        }
                        mutateurUtil(u);
                        console.log("Utilisateur connecté (objet retourn/ par Google Provider):", u);
                      }
    );
  }