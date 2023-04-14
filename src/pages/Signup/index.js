import React, { useState } from 'react'
import useAuth from '../../hooks/useOut';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/inputs';
import Button from '../../components/button';
import * as C from './style';

const Signup = () => {

  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmSenha, setConfirmSenha] = useState("")
  const [error, setError] = useState("")
  const [nome, setNome] = useState("")
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    
    const validSenha = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,8}$/; 

     if (!email || !emailConf || !nome) {
      setError("Preencha todos os campos!");
      return;
     } else if (email !== emailConf) {
      setError("Os e-mais não são iguais!");
     } else if (!validSenha.test(senha)) {
      setError("A senha precisa ter 6 (seis) a 8 (oito) caracteres ao menos 1 (um) número e 1 (um) caracter especial, por exemplo '@, $, &...'")
      console.log(setError);
     } else if ( senha !== confirmSenha ){
      setError ("As senhas não são iguais");
    } else if ( nome.length < 5) {
      setError ("Preencha o nome completo");
    }
  }

  return (
    <C.Container>
      <C.Label>Cadastro</C.Label>
      <C.Content>
        <Input 
        type="name"
        placeholder="Nome Completo"
        value={ nome }
        onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input 
        type="email"
        placeholder="Digite seu e-mail"
        value={ email }
        onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
          <Input 
        type="email"
        placeholder="Confirme seu e-mail"
        value={ emailConf }
        onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
         <Input 
        type="password"
        placeholder="Digite sua senha"
        value={ senha }
        onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input 
        type="password"
        placeholder="Digite sua senha novamente"
        value={ confirmSenha }
        onChange={(e) => [setConfirmSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Inscreva-se" onClick={handleSignup} />
        <C.LabelSignup>
          Já é cadastrado?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default Signup;