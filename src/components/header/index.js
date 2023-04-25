import React from 'react'
import * as C from './style';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useOut';
import NameComponent from './nameComponent';


function Header() {

  const { signOut } = useAuth();

  const handleSignout = () => {
    signOut();
  }
  
  return (
    <C.Header>
      <C.Content>
      <C.userName>
        <NameComponent />
      </C.userName>
        <C.Navigation>
         <Link to="/" onClick={handleSignout}>Sair</Link>
        </C.Navigation>
      </C.Content>
    </C.Header>
  )
}

export default Header;