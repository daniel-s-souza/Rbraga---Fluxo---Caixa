import React from 'react'
import * as C from './style'
import GridItem from '../GritItem';

function Grid({ itens, setItens }) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transiction) => transiction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transictions", JSON.stringify(newArray));
  }
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={20} alignCenter>Grupo</C.Th>
          <C.Th width={20} alignCenter>Opção</C.Th>
          <C.Th width={10} alignCenter>Data</C.Th>
          <C.Th width={10} alignCenter>Competência</C.Th>
          <C.Th width={20} alignCenter>Descrição</C.Th>
          <C.Th width={30} alignCenter>Valor</C.Th>
          <C.Th width={10} alignCenter>Tipo</C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item,index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  )
}

export default Grid;