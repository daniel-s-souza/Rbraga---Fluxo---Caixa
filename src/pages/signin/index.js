import React, { useState } from 'react'
import useAuth from '../../hooks/useOut';
import Button from "../../components/button";
import { Link, useNavigate } from 'react-router-dom';
import Input from "../../components/inputs";
import * as C from './style';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if ( !email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha)

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  }

  return (
   <C.Container>
      <C.Label>Login</C.Label>
      <Input 
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
        <Input 
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}
      />
      <C.LabelError>{error}</C.LabelError>
      <Button Text="Entrar" onClick={ handleLogin } />
      <C.LabelSignup>
        Não tem cadastro?
        <C.Strong>
          <Link to= "/signup">&nbsp;Registre-se</Link>
        </C.Strong>
      </C.LabelSignup>
   </C.Container>
  )
}

export default Signin;