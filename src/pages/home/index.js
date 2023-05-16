import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Resume from '../../components/Resume';
import BanckComponent from '../../components/banckComponent';
import Form from '../../components/form';
import * as C from './styled';

const Home = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [bankValues, setBankValues] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('transactions');
    const savedTransactions = data ? JSON.parse(data) : [];
    setTransactionsList(savedTransactions);

    const savedBankValues = JSON.parse(localStorage.getItem('bankValues')) || {};
    setBankValues(savedBankValues);

    const amountExpense = savedTransactions
      .filter(item => item.expense)
      .map(transaction => Number(transaction.amount));

    const amountIncome = savedTransactions
      .filter(item => !item.expense)
      .map(transaction => Number(transaction.amount));

    const totalExpense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalIncome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const totalBalance = Math.abs(totalIncome - totalExpense).toFixed(2);

    setIncome(`R$ ${totalIncome}`);
    setExpense(`R$ ${totalExpense}`);
    setTotal(`${Number(totalIncome) < Number(totalExpense) ? '-' : ''}R$ ${totalBalance}`);
  }, []);

  const handleAdd = transaction => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));

    const { subGroup, amount } = transaction;
    const updatedBankValues = { ...bankValues };
    updatedBankValues[subGroup] = (updatedBankValues[subGroup] || 0) + Number(amount);
    setBankValues(updatedBankValues);
    localStorage.setItem('bankValues', JSON.stringify(updatedBankValues));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <C.Container>
        {Object.entries(bankValues).map(([bank, value]) => (
          <BanckComponent
            key={bank}
            title={bank}
            value={value}
            setValue={value => setBankValues({ ...bankValues, [bank]: value })}
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
