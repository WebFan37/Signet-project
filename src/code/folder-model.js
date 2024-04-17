import { collection, doc, setDoc } from "firebase/firestore";
import { info } from "sass";
import { collectionFile, collectionUser, firestore } from "./initialisation";

/**
 * Ajoute un dossier pour utilisateur connecte dans firestore
 * @param {string} idUser identifiant utilisateur
 * @param {object} infoDossier objet contenant les informations du dossier 
 * 
 * @returns {Promise string} identifiant du dossier cree
 */
export async function createFolder(idUser, infoDossier) {
    const refFile = doc(collection(firestore, collectionUser, idUser, collectionFile));
    await setDoc(refFile, infoDossier);
    return refFile.id;
}