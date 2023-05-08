import React from 'react'
import * as C from './style'
import GridItem from '../GritItem';
import Grafico from '../graficoComponent';


function Grid({ itens, setItens }) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transiction) => transiction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transictions", JSON.stringify(newArray));
  }
  return (
    <>
    <C.Table>
      <C.Thead>
        <C.Tr>
        <C.Th width={20} alignCenter>Conta</C.Th>
          <C.Th width={10} alignCenter>Grupo</C.Th>
          <C.Th width={20} alignCenter>Opção</C.Th>
          <C.Th width={5} alignCenter>Vencimento</C.Th>
          <C.Th width={10} alignCenter>Competência</C.Th>
          <C.Th width={20} alignCenter>Descrição</C.Th>
          <C.Th width={40} alignCenter>Valor</C.Th>
          <C.Th width={20} alignCenter>Tipo</C.Th>
          <C.Th width={20}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item,index) => (
          <GridItem key={index} item={item} onDelete={onDelete} /> 
        ))}
      </C.Tbody>
    </C.Table>
    <Grafico data={itens} />
    </>
  )
}

export default Grid;