//AFTER THE CONFIGURATION OF FIREBASE

//Import firebase configuration
import objectConfig from './firebase-config.js';

//Initialize app
import {initializeApp} from 'firebase/app';

//Import authentification
import {getAuth,GoogleAuthProvider} from 'firebase/auth';


// Initialisation of Firebase (service)
export const appli = initializeApp(objectConfig);

//Initialize Authentification
export const authentification = getAuth(appli);

//Authentification with GOogle
export const provider = new GoogleAuthProvider();