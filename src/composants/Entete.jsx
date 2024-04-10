import './Entete.scss';
import avatarImg from '../images/avatar.png';
import Avatar  from '@mui/material/Avatar';
import { deconnexion } from '../code/user-model';

export default function Entete({user}) {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="utilisateur">
      {user.displayName}
        <Avatar className='avatar' alt={user.displayName} src={user.photoURL} />
      </div>
      <button onClick={deconnexion}>Log Out</button>
    </header>
  );
}