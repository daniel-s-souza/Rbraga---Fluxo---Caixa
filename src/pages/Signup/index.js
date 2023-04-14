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

  return (
    <div>Signup</div>
  )
}

export default Signup;