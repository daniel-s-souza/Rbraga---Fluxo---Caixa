import React from 'react'
import * as C from './style'
import ResumeItem from '../ResumeItem'
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
  FaHandHoldingUsd,
} from "react-icons/fa";

const Resume = ({income, expense, total, toPay}) => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeItem title= "A pagar" Icon={FaHandHoldingUsd} value={toPay} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
      </C.Container>
  )
}

export default Resume