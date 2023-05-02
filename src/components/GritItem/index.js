import React from 'react';
import * as C from './style';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

function GridItem({ item, onDelete }) {
  return (
    <C.Tr>
      <C.Td alignCenter>{item.account}</C.Td>
      <C.Td alignCenter>{item.group}</C.Td>
      <C.Td alignCenter>{item.subGroup}</C.Td>
      <C.Td alignCenter>{item.date}</C.Td>
      <C.Td alignCenter>{item.competencia}</C.Td>
      <C.Td alignCenter>{item.desc}</C.Td>
      <C.Td alignCenter>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color='red'/>) : (
            <FaRegArrowAltCircleUp color='green'/>)
        }
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  )
}

export default GridItem