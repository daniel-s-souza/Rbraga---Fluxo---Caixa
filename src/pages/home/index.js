import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Resume from '../../components/Resume';
import Form from '../../components/form';
import BankComponent from '../../components/banckComponent';
import * as C from './styled';

const Home = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [idCounter, setIdCounter] = useState(1);
  const [toPay, setToPay] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem('transactions');
    const savedTransactions = data ? JSON.parse(data) : [];
    setTransactionsList(savedTransactions);
    setIdCounter(savedTransactions.length + 1);
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter(item => item.expense)
      .map(transaction => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter(item => !item.expense)
      .map(transaction => Number(transaction.amount));
    const amountToPay = transactionsList
      .filter(item => item.expense)
      .map(transaction => Number(transaction.valorParcelas));
    
    const totalExpense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalIncome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalToPay = amountToPay.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalBalance = Math.abs(totalIncome - totalExpense).toFixed(2);

    setIncome(`R$ ${totalIncome}`);
    setExpense(`R$ ${totalExpense}`);
    setTotal(`${Number(totalIncome) < Number(totalExpense) ? '-' : ''}R$ ${totalBalance}`);
    setToPay(`R$ ${totalToPay}`);
  }, [transactionsList]);

  const handleAdd = transaction => {
    const newTransaction = { ...transaction, id: idCounter };
    const newArrayTransactions = [...transactionsList, newTransaction];
    setTransactionsList(newArrayTransactions);
    setIdCounter(prevCounter => prevCounter + 1);
    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  };

  const groupBySubGroup = () => {
    const groupedTransactions = {};
    transactionsList.forEach(transaction => {
      const { subGroup, amount } = transaction;
      if (groupedTransactions[subGroup]) {
        groupedTransactions[subGroup] += Number(amount);
      } else {
        groupedTransactions[subGroup] = Number(amount);
      }
    });
    return groupedTransactions;
  };

  const filteredTransactions = groupBySubGroup();

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} toPay={toPay} total={total} />
      <C.Container>
        {Object.keys(filteredTransactions).map(subGroup => (
          <BankComponent
            key={subGroup}
            title={subGroup}
            value={filteredTransactions[subGroup]}
          />
        ))}
      </C.Container>
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
};

export default Home;
