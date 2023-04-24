import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as C from './style';
import Input from '../../components/inputs';
import Button from '../../components/button'
import { bancos } from './bancos';


function EditProfile() {

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [banckAccounts, setBanckAccounts] = useState([]);
  const [banckName, setBanckName] = useState('');
  const [agNumber, setAgNumber] = useState('');
  const [error, setError] = useState('');
  const [accType, setAccType] = useState('option1');

const userData = localStorage.getItem('userDb');


const handleNewName = () => {

}

const handleSelectChange = (event) => {
  setBanckName(event.target.value);
};

const handleOptionChange = (event) => {
  setAccType(event.target.value);
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
        <>
        <C.Text>
          Banco:
          <C.Select value={banckName} onChange={handleSelectChange}>
            {bancos.map((banco, index) => (
              <option key={index} value={banco.label}>{banco.label}</option>
            ))}
          </C.Select>
          <C.Text>
              Agência:
              <Input type="text"
               placeholder="Agência"
               value={agNumber}
               onChange={(e) => [setAgNumber(e.target.value), setError('')]}
               />
          </C.Text>
          <C.Text>
              Conta:
              <Input type="text"
               placeholder="Conta"
               value={banckAccounts}
               onChange={(e) => [setBanckAccounts(e.target.value), setError('')]}
               />
          </C.Text>
          <C.CheckedDiv>
            <input type='checkbox' />
          </C.CheckedDiv>
        </C.Text>
        <Button Text="Salvar Conta" type="submit"/>
        </>
          <Button Text="Salvar Perfil" type="submit"/>
      </C.Content>
    </C.Container>
  )
}

export default EditProfile;