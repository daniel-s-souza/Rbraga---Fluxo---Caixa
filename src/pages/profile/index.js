import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import * as C from './style';
import image from './profileDefault.png'
import Button from '../../components/button';

function Profile() {
  const dataStorage = localStorage.getItem('userDb');
  const userData = JSON.parse(dataStorage);
  const nome = userData[0].name;
  const email = userData[0].email;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/editProfile');
  }

  return (
    <>
    <Header />
    <C.Container>
      <C.Content>
        <C.Image src={image} />
        <C.Text>{nome}</C.Text>
        <C.Text>{email}</C.Text>
        <Button Text="Editar Perfil" onClick={handleNavigate} />
      </C.Content>
    </C.Container>
    </>
  )
}

export default Profile