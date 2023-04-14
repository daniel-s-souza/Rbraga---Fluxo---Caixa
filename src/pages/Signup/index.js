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
  const [error, setError] = useState("")
  const [nome, setNome] = useState("")

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
        placeholder="Digite seu e-mail"
        value={ emailConf }
        onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
         <Input 
        type="password"
        placeholder="Digite sua senha"
        value={ senha }
        onChange={(e) => [setSenha(e.target.value), setError("")]}
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