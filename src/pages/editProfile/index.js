import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as C from './style';
import Input from '../../components/inputs';
import Button from '../../components/button'
import axios from 'axios';

function EditProfile() {

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [banckAccounts, setBanckAccounts] = useState([]);
  const [error, setError] = useState('');

const userData = localStorage.getItem('userDb');

const handleNewName = () => {

}


  return (
    <C.Container>
      <C.Content>
        <C.Text>
          Nome:
          <Input type="text"
           placeholder="Nome Completo"
           value={newName}
            onChange={(e) => [setNewName(e.target.value), setError('')]} 
            />
        </C.Text>
        <C.Text>
          E-mail:
          <Input type="text"
           placeholder="Novo e-mail"
           value={newEmail}
            onChange={(e) => [setNewEmail(e.target.value), setError('')]} 
            />
        </C.Text>
          <Button Text="Salvar" type="submit"/>
      </C.Content>
    </C.Container>
  )
}

export default EditProfile;