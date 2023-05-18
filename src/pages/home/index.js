import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Resume from '../../components/Resume';
import BankComponent from '../../components/banckComponent';
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

    const savedBankValues = localStorage.getItem('bankValues');
    if (savedBankValues) {
      setBankValues(JSON.parse(savedBankValues));
    }
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
    const { accountType, accountGroup, bank, amount } = transaction;

    if (accountType === 'Ativos Circulares' && accountGroup === 'Contas Correntes') {
      const updatedBankValues = { ...bankValues };
      updatedBankValues[bank] = (updatedBankValues[bank] || 0) + Number(amount);
      setBankValues(updatedBankValues);
      localStorage.setItem('bankValues', JSON.stringify(updatedBankValues));
    } else {
      const newArrayTransactions = [...transactionsList, transaction];
      setTransactionsList(newArrayTransactions);
      localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
    }
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <C.Container>
        {(bankValues['Contas Correntes'] && bankValues['Contas Correntes'] !== 0) && (
          <BankComponent
            title="Contas Correntes"
            value={bankValues['Contas Correntes']}
            setValue={value => setBankValues({ ...bankValues, 'Contas Correntes': value })}
          />
        )}
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


