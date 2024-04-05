import './Appli.scss';

import Accueil from './Accueil.jsx';
import PageUtilisateur from './PageUtilisateur.jsx';
import { useState } from 'react';


export default function Appli() {

  const [utilisateur, setUtilisateur] = useState(null);

  return (
    //IF there's a user, show the user page
    //otherwise show the home page 
    
    utilisateur ? <PageUtilisateur/> : <Accueil/>
    
    

  )
}