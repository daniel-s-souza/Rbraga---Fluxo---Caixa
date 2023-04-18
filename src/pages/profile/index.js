import React from 'react'
import Header from '../../components/header';
import * as C from './style';
import image from './profileDefault.png'

function Profile() {
  const dataStorage = localStorage.getItem('userDb');
  const userName = JSON.parse(dataStorage);
  const nome = userName[0].name; 

  return (
    <>
    <Header />
    <C.Container>
      <C.Content>
        <C.Image src={image} />
        <C.Text>{nome}</C.Text>
      </C.Content>
    </C.Container>
    </>
  )
}

export default Profile