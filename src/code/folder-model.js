import { collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
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
    const referenceFile = doc(collection(firestore, collectionUser, idUser, collectionFile));
    await setDoc(referenceFile, infoDossier);
    return referenceFile.id;
}


/***
 * Lire TOUS les dossier de l'utilisateur 
 * Tous les informations
 * 
 * @param {string } idUser identifiant de l'utilisateur
 * 
 * @returns {array} Tableau contenant tous le sdossiers de cet utilisateur.
 * 
 */
export async function readAll(idUser){
    const AllFiles = await getDocs(query(collection(firestore, collectionUser, idUser, collectionFile)))
        return AllFiles.docs;
    
}

/***
 * Supprimer un dossier
 * @param {string} idUser identifiant de l'utilisateur
 * @param {string} idDossier identifiant du dossier
 * 
 */
export async function supprimer(idUser, idDossier){
    const refDossier = doc(firestore, collectionUser, idUser, collectionFile, idDossier); 
    await deleteDoc(refDossier);
}   

/***
 * Mettre a jour un dossier
 * @param {string} idUser identifiant de l'utilisateur
 * @param {string} idDossier identifiant du dossier
 */
export async function update(idUser, idDossier, infoDossier){
    const refDossier = doc(firestore, collectionUser, idUser, collectionFile, idDossier);
    await updateDoc(refDossier, infoDossier)
}