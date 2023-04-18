import React, { useState } from 'react';
import * as C from './style';
import Input from '../../components/inputs';
import Button from '../../components/button';

function ChangePassword() {
  const [ email, setEmail ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [confirmNewPassword, setConfirmNewPassword ] = useState('');
  const [error, setError] = useState('');


  const validSenhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[:."@#$%&*^()_+=!-])[A-Za-z0-9:."@#$%&*^()_+=!?-]{6,15}(?!.*(.).*\1)$/;

  const validateSenha = (senha) => {
    return validSenhaRegex.test(senha)
  }

  const findPassword = (password) => {
    const getPassword = localStorage.getItem('userDb');
    const users = JSON.parse(getPassword) || []; // tratamento para o caso de o Local Storage estar vazio
    const foundUser = users.find(user => user.password === password);
    return foundUser ? foundUser.password : null;
  }


  
  const findEmail = (email) => {
    const getEmail = localStorage.getItem('userDb');
    const users = JSON.parse(getEmail) || []; // tratamento para o caso de o Local Storage estar vazio
    const foundUser = users.find(user => user.email === email);
    return foundUser ? foundUser.email : null;
  }

  const handleNewPassword = () => {
   const storedEmail = findEmail(email);
   const storedPassword = findPassword(newPassword);

   if (!email || !newPassword || !confirmNewPassword) {
    setError("Preencha todos os campos");
   } else if (!storedEmail) {
    setError('Email não cadastrado');
   } else if (storedPassword) {
    setError("A nova senha deve ser diferente da antiga");
   }
  }

  return (
    <C.Container>
      <C.Label>Redefinir Senha</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite o e-mail cadastrado"
           value={email}
           onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
         <Input
          type="password"
          placeholder="Digite sua nova senha"
           value={newPassword}
           onChange={(e) => [setNewPassword(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Confirme sua nova senha"
           value={confirmNewPassword}
           onChange={(e) => [setConfirmNewPassword(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Salvar" onClick={ handleNewPassword } />
      </C.Content>
    </C.Container>
  )
}

export default ChangePassword