import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as C from './style';
import Input from '../../components/inputs';
import Button from '../../components/button'
import { bancos } from './bancos';


function EditProfile() {

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [banckAccounts, setBanckAccounts] = useState('');
  const [banckName, setBanckName] = useState('');
  const [agNumber, setAgNumber] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState('');
  const [accType, setAccType] = useState('Pessoa Física');

  const accountDb = localStorage.setItem("accounts" , JSON.stringify({
    banckName,
    agNumber,
    banckAccounts,
    accType,
  }))

const handleSelectChange = (event) => {
  setBanckName(event.target.value);
};

const handleOptionChange = (event) => {
  setAccType(event.target.value);
}

const handleNewAcc = () => {
  if (!banckAccounts || !agNumber || !banckName || !accType) {
    setError("Por favor, preencha todos os campos.")
    return;
  }

  const newAcc = {
    banckName,
    agNumber,
    banckAccounts,
    accType
  };

  const savedAcc = JSON.parse(localStorage.getItem(accountDb) || '[]');

  setAccounts([...savedAcc, newAcc])


  localStorage.setItem('accounts', JSON.stringify(savedAcc));
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
          {
            accounts.map((account, index) => (
              <C.CheckedDiv key={index}>
                <C.Text>{`Banco: ${account.banckName}`}</C.Text>
                <C.Text>{`Agência: ${account.agNumber}`}</C.Text>
                <C.Text>{`Conta: ${account.banckAccounts}`}</C.Text>
                <C.Text>{`Tipo: ${account.accType}`}</C.Text>
              </C.CheckedDiv>
            ))
          }        </>
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
          <label>
          <input className='radioInput' type="radio" value="Pessoa Física" checked={accType === 'Pessoa Física'} onChange={handleOptionChange} />
          Pessoa Física
          </label>
          <label>
          <input className='radioInput' type="radio" value="Pessoa Jurídica" checked={accType === 'Pessoa Jurídica'} onChange={handleOptionChange} />
          Pessoa Jurídica
          </label>
          </C.CheckedDiv>
        </C.Text>
        <Button Text="Salvar Conta" type="submit" onClick={handleNewAcc}/>
        </>
          <Button Text="Salvar Perfil" type="submit"/>
      </C.Content>
    </C.Container>
  )
}

export default EditProfile;