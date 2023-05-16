import React from 'react'
import * as C from './style'

function BanckComponent({title, value}) {
  return (
    <C.Container>
    <C.Header>
      <C.HeaderTitle>{title}</C.HeaderTitle>
    </C.Header> 
    <C.Total>{value}</C.Total>
  </C.Container>
  )
}

export default BanckComponent

