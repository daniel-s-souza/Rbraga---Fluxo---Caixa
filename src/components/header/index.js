import React from 'react'
import * as C from './style';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useOut';


function Header() {

  const { signOut } = useAuth();

  const handleSignout = () => {
    signOut();
  }
  
  return (
    <C.Header>
      <C.Content>
        <C.Navigation>
          <Link to="/home">Home</Link>
        </C.Navigation>
        <C.Navigation>
          <Link to="/home">Perfil</Link>
        </C.Navigation>
        <C.Navigation>
         <Link onClick={handleSignout}>Sair</Link>
        </C.Navigation>
      </C.Content>
    </C.Header>
  )
}

export default Header;