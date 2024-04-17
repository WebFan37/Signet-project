//AFTER THE CONFIGURATION OF FIREBASE

//Import firebase configuration
import objectConfig from './firebase-config.js';

//Initialize app
import {initializeApp} from 'firebase/app';

//Import authentification
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

//DAY 2 
// Import firestore
import { getFirestore } from 'firebase/firestore';


// Initialisation of Firebase (service)
export const appli = initializeApp(objectConfig);

//Initialize Authentification
export const authentification = getAuth(appli);

//Authentification with GOogle
export const provider = new GoogleAuthProvider();

//Firestore
export const firestore = getFirestore(appli);

//COLLECTION SHORTCUT=======
//=========================
export const collectionUser = "signets-utilisateurs";
export const collectionFile = "dossiers";