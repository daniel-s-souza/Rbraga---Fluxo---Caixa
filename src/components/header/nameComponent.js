import React from 'react'
import * as C from './style'
import image from './profileDefault.png'

function NameComponent() {
  const userDb = JSON.parse(localStorage.getItem('userDb'));
  const tokenEmail = JSON.parse(localStorage.getItem('userToken'));
  
  let name = '';
  
  for (let i = 0; i < userDb.length; i++) {
    const user = userDb[i];
    if (user.email === tokenEmail.email) {
      name = user.name;
      break;
    }
  }
  

  return ( 
    <>
      <C.Image src={image}/>
      <C.TextUserName>
      { name || 'Nome não encontrado'}
      </C.TextUserName>  
    </>
  )
}

export default NameComponent;