import './Dossier.scss';
// Importer le chemin de l'image par défaut
import couvertureDefaut from '../images/couverture-defaut.jpg';

import IconButton from '@mui/material/IconButton';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FrmDossier from './FrmDossier';
import { useState } from 'react';

export default function Dossier({
                          id, 
                          titre, 
                          couverture, 
                          couleur, 
                          dateModif, 
                          supprimer,
                          modifier
                      }) {

  // État du formulaire de modification
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);


  //NEW STATE: Si le dossier est ouvert ou ferme
  const [contenuDossierVisible, setContenuDossierVisible] = useState();

  // Style dynamique de la couleur du dossier.
  let objStyle = {
    backgroundColor: couleur
  }

  // Drag and drop option implementation
  function gererDragEnter(event){
    event.dataTransfer.effectAllowed = 'link';
    event.preventDefault();
  }

  function gererDragOver(event){
    event.preventDefault();
  }

  function gereDragLeave(event){
    return;
  }

  function gererDrop(event){
    const url = event.dataTransfer.getData('URL');
    event.preventDefault();

    //Ajouter le signet dans Firestore et 
    console.log("URL depose: ", url);
    
    //tourner la carte
    setContenuDossierVisible(true);
  }


  return (
    <article 
    // Ajouter la classe 'actif' si le contenu du dossier est visible
    className={ `Dossier  ${contenuDossierVisible && 'actif'}`}
     
    // Drag and drop option.
    onDragEnter={gererDragEnter}
    onDrop={gererDrop}
    onDragOver={gererDragOver}
    onDragLeave={gereDragLeave}

    //Style background de la carte gardée
    style={objStyle}
    
    >

      <div className="carte">
        <div className="face">
          <div className="couverture">
            <IconButton 
            className='btn-dossier tourner' 
            color='primary'
            onClick={()=> setContenuDossierVisible(true)}
            >
              <ThreeSixtyIcon/>
            </IconButton>
            <img src={couverture || couvertureDefaut} alt={titre}/>
            <IconButton
              className='btn-dossier supprimer'
              color='secondary'
              onClick={()=>supprimer(id)}
            >
              <DeleteIcon/>
            </IconButton>
          </div>
          <div className="info" style={objStyle}>
            <h2>{titre}</h2>
            <p>Modifié : {dateModif}</p>
            <FrmDossier
              ouvert={frmDossierOuvert}
              setOuvert={setFrmDossierOuvert}
              actionDossier={modifier}
              dossierPrec={{id, titre, couverture, couleur}}
            />
            <IconButton onClick={()=>setFrmDossierOuvert(true)} className='btn-dossier modifier' color='tertiary'>
              <EditIcon/>
            </IconButton>
          </div>
        </div>
        <div className='derrier'>
          <IconButton 
          className='btn-dossier tourner'
          onClick={()=> setContenuDossierVisible(false)}
          >
            <ThreeSixtyIcon/>
          </IconButton>

          {/* Ajouter _blank pour ouvrir dans un autre onglet */}
          <a target="_blank"href="https://www.orbitz.com/">VOYAGE ORBITZ</a>
        </div>
      </div>
    </article>
  );
}