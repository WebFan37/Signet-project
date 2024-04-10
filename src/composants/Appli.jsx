import './Appli.scss';

import Accueil from './Accueil.jsx';
import PageUtilisateur from './PageUtilisateur.jsx';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { authentification } from '../code/initialisation.js';


export default function Appli() {

  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(
    () => onAuthStateChanged(authentification, u => setUtilisateur(u))
    ,
    []
  )

  return (
    //IF there's a user, show the user page
    //otherwise show the home page 
    
    utilisateur ? <PageUtilisateur user={utilisateur}/> : <Accueil/>
    
    

  )
}