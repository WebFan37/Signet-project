import './PageUtilisateur.scss';

import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import FrmDossier from './FrmDossier';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { createFolder, readAll } from '../code/folder-model';

export default function PageUtilisateur({user}) {
  // État pour gérer les dossiers
  const [dossiers, setDossiers] = useState([]);
  //() => JSON.parse(window.localStorage.getItem('signets')) || []

  // Sauvegarder cet état dans localStorage
  // useEffect(
  //   () => window.localStorage.setItem('signets', JSON.stringify(dossiers))
  //   ,
  //   [dossiers]
  // );

  // État d'affichage du formulaire d'ajout de dossier 
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);

  //Appel de la fonction pour lire les dossiers de facon controle
  // Lire seulement une fois
  useEffect(() => {readLireFolders();},[])
  //!!!!! 1) {readLireFolders()} vs 2) readLireFolders
  // 2) appeler une fois
  // 1) appeler a chaque rendu


  // Lire les dossiers de l'utilisateur
  async function readLireFolders(){
    const dosserisFirestore = await readAll(user.uid);
    // console.log("Message",dosserisFirestore);
    // console.log("Contenu",dosserisFirestore[0].data());
    // console.log("identity",dosserisFirestore[0].id);
    setDossiers(dosserisFirestore.map(
      dossierFS => ({id: dossierFS.id, ...dossierFS.data()})
    ))
  }
  

  /**
   * Ajoute un dossier
   */
  async function ajouterDossier(titre, couverture, couleur, dateModif) {
    let nouveauDossier = {
      // id: window.crypto.randomUUID(),
      titre: titre,
      couverture: couverture,
      couleur: couleur,
      dateModif: dateModif
    };

    const idDossier = await createFolder(user.uid, nouveauDossier);
    setDossiers([...dossiers, nouveauDossier]);
  }

  return (
    <div className="Appli">
        <Entete user={user}/>
        <section className="contenu-principal">
          <ListeDossiers 
            dossiers={dossiers} 
            setDossiers={setDossiers} 
            idUser={user.uid}
          />
          <FrmDossier 
            ouvert={frmDossierOuvert} 
            setOuvert={setFrmDossierOuvert}
            actionDossier={ajouterDossier}
          />
          <Fab onClick={() => setFrmDossierOuvert(true)} color='primary' className='btn-ajout-dossier' size='large'><AddIcon /></Fab>
        </section>
    </div>
  );
}
