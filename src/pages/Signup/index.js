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

  const validSenhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[:."@#$%&*^()_+=!-])[A-Za-z0-9:."@#$%&*^()_+=!?-]{6,15}(?!.*(.).*\1)$/;

  const validateSenha = (senha) => {
    return validSenhaRegex.test(senha)
  }

  const handleSignup = () => {
    
     if (!email || !emailConf || !nome) {
      setError("Preencha todos os campos!");
      return;
     } else if ( nome.length < 5) {
      setError ("Preencha o nome completo");
    }  else if (email !== emailConf) {
      setError("Os e-mais não são iguais!");
     } else if (!validateSenha(senha)) {
      setError("Senha deve conter 7 (sete) caracteres, uma letra maiúscula, uma letra minúscula, um caracter especial ");
     } else if (senha !== confirmSenha) {
      setError("Senhas devem ser iguais");
     } else {
      const res = signup(email, senha, nome)

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");

    navigate("/");
    }
  };

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