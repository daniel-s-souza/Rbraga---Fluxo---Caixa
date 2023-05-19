import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import * as C from './style'

function Grafico({ data }) {
  const [chartData, setChartData] = useState([['Categoria', 'Valor']]);

  useEffect(() => {
    // Agrupa os dados por categoria e soma os valores
    const groupedData = data.reduce((acc, item) => {
      const category = item.group; // alteração aqui
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
    <C.DisplayChartsDiv>
    <C.ChartDiv>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={{
          title: 'Dados por categoria',
          is3D: true,
        }}
        width={'100%'}
        height={'150px'}
      />
    </C.ChartDiv>
     <C.ChartDiv>
     <Chart
       chartType="BarChart" // Alteração aqui
       data={chartData}
       options={{
         title: 'Dados por categoria',
         chartArea: { width: '50%' }, // Definindo a largura do gráfico
         hAxis: { title: 'Valor', minValue: 0 }, // Rótulo do eixo horizontal
         vAxis: { title: 'Categoria' }, // Rótulo do eixo vertical
       }}
       width={'100%'}
       height={'150px'} // Aumentando a altura para acomodar o gráfico de barras
     />
   </C.ChartDiv>
    </C.DisplayChartsDiv>
  );
}

export default Grafico;
