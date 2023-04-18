import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as C from './style';
import Input from '../../components/inputs';
import Button from '../../components/button';

export default function ChangePassword() {
  const [ email, setEmail ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [confirmNewPassword, setConfirmNewPassword ] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


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
   } else if (!validateSenha(newPassword)) {
    setError("Senha deve conter 7 (sete) caracteres, uma letra maiúscula, uma letra minúscula, um caracter especial ")
  } else if (newPassword !== confirmNewPassword) {
    setError ("Senhas devem ser iguais");
  } else {
    const getPassword = localStorage.getItem('userDb');
    const users = JSON.parse(getPassword) || [];
    const foundUserIndex = users.findIndex(user => user.email === email);

    if (foundUserIndex > -1) {
      users[foundUserIndex].password = newPassword;
      localStorage.setItem('userDb', JSON.stringify(users));
      setError(null);
  }
    alert("Senha alterada com sucesso!");
    navigate('/');
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
        <C.LabelSignup>
          Já é cadastrado?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
};
