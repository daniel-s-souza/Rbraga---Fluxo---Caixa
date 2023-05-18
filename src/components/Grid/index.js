import React, { useState, useEffect } from 'react';
import * as C from './style';
import GridItem from '../GritItem';
import Grafico from '../graficoComponent';
import Filter from './filter';

function Grid({ itens, setItens }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(itens);
  }, [itens]);

  const handleFilter = (filterType, filterText) => {
    let filteredResults = JSON.parse(localStorage.getItem('transactions')) || [];
  
    if (filterType === 'text') {
      filteredResults = filteredResults.filter(
        item =>
        (item.group && item.group.includes(filterText)) ||
        (item.grupo && item.grupo.includes(filterText)) ||
        (item.subGrupo && item.subGrupo.includes(filterText)) ||
        (item.data && item.data.includes(filterText)) ||
        (item.competencia && item.competencia.includes(filterText)) ||
        (item.desc && item.desc.includes(filterText)) ||
        (item.amount && item.amount.toString().includes(filterText))
      );
    } else if (filterType === 'id') {
      filteredResults = filteredResults.filter(item => item.id.toString().includes(filterText));
    } else if (filterType === 'value') {
      filteredResults = filteredResults.filter(item => item.amount.toString().includes(filterText));
    } else if (filterType === 'competence') {
      filteredResults = filteredResults.filter(item => item.competencia.includes(filterText));
    } else if (filterType === 'dueDate') {
      filteredResults = filteredResults.filter(item => item.date.includes(filterText));
    }
    setTableData(filteredResults);
  };
  
  const onDelete = (ID) => {
    const newArray = itens.filter(transiction => transiction.id !== ID);
    setItens(newArray);
    localStorage.setItem('transictions', JSON.stringify(newArray));
  };

  return (
    <>
      <Filter handleFilter={handleFilter} />
      <C.TableContainer>
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.Th width={4} alignCenter>ID</C.Th>
              <C.Th width={20} alignCenter>Conta</C.Th>
              <C.Th width={20} alignCenter>Grupo</C.Th>
              <C.Th width={10} alignCenter>Opção</C.Th>
              <C.Th width={10} alignCenter>Vencimento</C.Th>
              <C.Th width={10} alignCenter>Competência</C.Th>
              <C.Th width={20} alignCenter>Descrição</C.Th>
              <C.Th width={40} alignCenter>Valor</C.Th>
              <C.Th width={20} alignCenter>Tipo</C.Th>
              <C.Th width={20}></C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {tableData.map((item, index) => (
              <GridItem key={index} item={item} onDelete={onDelete} />
            ))}
          </C.Tbody>
        </C.Table>
      </C.TableContainer>
      <Grafico data={tableData} />
    </>
  );
}

export default Grid;

