import React, { useState } from 'react';
import * as C from './style';

const Filter = ({ handleFilter }) => {
  const [filterText, setFilterText] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleInputChange = e => {
    setFilterText(e.target.value);
  };

  const handleSelectChange = e => {
    setFilterType(e.target.value);
  };

  const handleFilterClick = () => {
    handleFilter(filterType, filterText);
  };

  return (
    <C.Container>
      <C.Select value={filterType} onChange={handleSelectChange}>
        <option value="">Selecione um filtro</option>
        <option value="text">Texto</option>
        <option value="id">ID</option>
        <option value="value">Valor</option>
        <option value="competence">Competência</option>
        <option value="dueDate">Vencimento</option>
      </C.Select>
      <C.Input type="text" value={filterText} onChange={handleInputChange} />
      <C.Button onClick={handleFilterClick}>Filtrar</C.Button>
    </C.Container>
  );
};

export default Filter;
