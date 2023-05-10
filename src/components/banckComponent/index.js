import React from 'react'
import * as C from './style'

function BanckComponent({title}) {
  return (
    <C.Container>
    <C.Header>
      <C.HeaderTitle>{title}</C.HeaderTitle>
    </C.Header> 
  </C.Container>
  )
}

export default BanckComponent

