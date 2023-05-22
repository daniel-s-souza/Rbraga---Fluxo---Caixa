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
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter(item => item.expense)
      .map(transaction => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter(item => !item.expense)
      .map(transaction => Number(transaction.amount));
    const totalExpense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalIncome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalTopay = transactionsList.reduce((acc, cur) => {
      return cur.numberOfInstallments === 1 ? acc + Number(cur.amount) : acc;
    }, 0);
    const totalBalance = Math.abs(totalIncome - totalExpense).toFixed(2);

    setIncome(`R$ ${totalIncome}`);
    setExpense(`R$ ${totalExpense}`);
    setTotal(`${Number(totalIncome) < Number(totalExpense) ? '-' : ''}R$ ${totalBalance}`);
    setToPay(`R$ ${totalTopay.toFixed(2)}`);
  }, [transactionsList]);

  const handleAdd = transaction => {
    const newTransaction = { ...transaction, id: idCounter };
    const newArrayTransactions = [...transactionsList, newTransaction];
    setTransactionsList(newArrayTransactions);
    setIdCounter(prevCounter => prevCounter + 1);
    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  };

  const filteredTransactions = transactionsList.filter(transaction => transaction.group === 'Contas Correntes');

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} toPay = {toPay} total={total} />
      <C.Container>
      {filteredTransactions.map(transaction => (
        <BankComponent key={transaction.id} title={transaction.subGroup} value={transaction.amount} />
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
