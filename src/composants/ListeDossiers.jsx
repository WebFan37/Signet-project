import Dossier from './Dossier';

// Importer le composant motion
import { motion } from 'framer-motion';

import './ListeDossiers.scss';
import { supprimer, update } from '../code/folder-model';

export default function ListeDossiers({dossiers, setDossiers, idUser}) {
  
  function supprimerDossier(idDossier) {
    //Suppression firestore
    supprimer(idUser, idDossier);

    //Suppressino local
    setDossiers(dossiers.filter(elt => elt.id != idDossier))
    
  }

  function modifierDossier(idDossier, titre, couverture, couleur, dateModif) {
    const dossierModifie = {couleur, titre, couverture, dateModif}
    // Modification Firestore
    update(idUser, idDossier, dossierModifie);

    //Modification local
    setDossiers(dossiers.map(
      doss => {
        if(doss.id == idDossier) {
          return ({idDossier, ...dossierModifie });
        }
        return doss;
      }
    ));
  }

  return (
    <ul className="ListeDossiers">
      {
        (dossiers.length > 0) 
        ?
          dossiers.map( 
            // Remarquez l'utilisation du "spread operator" pour "étaler" les 
            // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
            // fléchée dans les props du composant 'Dossier' !!
            dossier =>  <motion.li 
                          key={dossier.id}
                          layout={true}
                        >
                          <Dossier 
                            {...dossier} 
                            supprimer={supprimerDossier} 
                            modifier={modifierDossier}
                          />
                        </motion.li>
          )
        :
        <li className='aucun-dossier'>Aucun dossier</li>
      }
    </ul>
  );
}