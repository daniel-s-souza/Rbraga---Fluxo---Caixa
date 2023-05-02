import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import * as C from './style'

function Grafico({ data }) {
  const [chartData, setChartData] = useState([['Categoria', 'Valor']]);

  useEffect(() => {
    // Agrupa os dados por categoria e soma os valores
    const groupedData = data.reduce((acc, item) => {
      const category = item.subGroup;
      const value = parseFloat(item.amount);
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += value;
      return acc;
    }, {});

    // Converte o objeto de dados agrupados em uma matriz de dados para o gráfico
    const newChartData = Object.entries(groupedData).map(([category, value]) => [category, value]);

    // Adiciona a linha de cabeçalho na matriz de dados
    setChartData([['Categoria', 'Valor'], ...newChartData]);
  }, [data]);

  return (
    <C.ChartDiv>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={{
          title: 'Dados por categoria',
          is3D: true,
        }}
        width={'100%'}
        height={'200px'}
      />
    </C.ChartDiv>
  );
}

export default Grafico;
