import React from 'react'
import Header from '../../components/header';
import * as C from './style';
import image from './profileDefault.png'

function Profile() {
  return (
    <>
    <Header />
    <C.Container>
      <C.Image src={image} />
    </C.Container>
    </>
  )
}

export default Profile