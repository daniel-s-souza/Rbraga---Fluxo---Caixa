import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Resume from '../../components/Resume';
import Form from '../../components/form';

const Home = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

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

    const totalBalance = Math.abs(totalIncome - totalExpense).toFixed(2);

    setIncome(`R$ ${totalIncome}`);
    setExpense(`R$ ${totalExpense}`);
    setTotal(`${Number(totalIncome) < Number(totalExpense) ? '-' : ''}R$ ${totalBalance}`);
  }, [transactionsList]);

  const handleAdd = transaction => {
    const newTransaction = { ...transaction, id: transactionsList.length + 1 };
    const newArrayTransactions = [...transactionsList, newTransaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
};

export default Home;


