import { signInWithPopup, signOut } from "firebase/auth";
import { authentification, provider } from "./initialisation";


/**
 * Permet de se connecter avec Google
 * Authentification with Google
 
 */
export function connexion(){
    signInWithPopup(authentification, provider).then(
        (u)=> console.log("User",u)
    ).catch()
}

export function deconnexion(params){
    signOut(authentification)
}