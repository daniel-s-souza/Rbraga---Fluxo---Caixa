import React from 'react'
import * as C from './style'
import image from './profileDefault.png'

function NameComponent() {
    const user = JSON.parse(localStorage.getItem('userDb'));
    const name = user[0].name;
    console.log(name);
  

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