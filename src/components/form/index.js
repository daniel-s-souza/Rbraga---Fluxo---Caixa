import React, {useState} from 'react';
import * as C from './style';
import Grid from '../Grid';


const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [options, setOptions] = useState([]);
  const [group, setGroup] = useState("Escolha um grupo");
  const [showFields, setShowFields] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [date, setDate] = useState('');
  const [comp, setComp] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [accountSelected, setAccountSelected] = useState('Escolha uma Conta');
  const [availableGroups, setAvailableGroups] = useState('');


  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!accountSelected || !group || !amount || !options) {
      alert("Preencha os campos obrigatórios: Conta,Grupo, Opções e Valor");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
      group: group,
      subGroup: selectedOption,
      date: date,
      competencia: comp,
      account: accountSelected,
    };

    handleAdd(transaction);
    
    setDesc('');
    setAmount('');
    setComp('');
    setGroup('Escolha um grupo');
    setOptions('');
    setDate('');
    setShowFields(false);
    setAccountSelected('Escolha uma Conta');
    setShowOptions(false);
  };

  const handleAccountChange = (event) => {
    const accountType = event.target.value;
    setAccountSelected(accountType);
  
    let availableGroups = [];
  
    if (accountType === 'Esccolha uma Conta') {
      setShowOptions(false);
    } else {
      if (isExpense) {
        availableGroups = accountsExpensesGroups
          .filter((acc) => acc.account === accountType)
          .map((acc) => acc.group);
      } else {
        availableGroups = accountsIncomeGroups
          .filter((acc) => acc.account === accountType)
          .map((acc) => acc.group);
      }
  
      setShowOptions(true);
    }
  
    setAvailableGroups(availableGroups);
  };

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
    
    const selectedGroup = event.target.value;

    switch (selectedGroup) {
      case 'Escolha um grupo':
        setOptions([]);
        break;
      case 'Disponivel':
        setOptions(['', 'Caixa']);
        break;
      case 'Contas Correntes':
        setOptions(['','Bradesco', 'Banco do Brasil', 'Caixa Econômica', 'BNB', 'Santander', 'Inter', 'C6', 'Pagveloz', 'Outro']);
        break;
      case 'Contas a receber':
        setOptions(['','Clientes', 'Créditos', 'Créditos de pré-vendas', 'Outras contas a receber',]);
        break;
      case 'Estoques':
        setOptions(['','Carros Novos', 'Carros Seminovos', 'Outros estoques', 'Outros veículos',]);
        break;
      case 'Imobilizados':
        setOptions(['','Investimentos em projetos', 'Máquinas e equipamentos', 'Movéis e utensilios', 'Outros investimentos', 'Participações societárias', 'Terrenos e imóveis', 'Valores e receber LP', 'Veículos da empresa', 'Depreciação acumulada']);
        break;
      case 'Investimentos financeiros':
        setOptions(['','Ações', 'CDB,LCA,LCI,Debêntures', 'Consórcios', 'Fundos de Investimentos', 'Outras aplicações financeiras', 'Títulos públicos']);
        break;
      default:
        setOptions([]);
        break;
    } 
  };

  const accountsIncome = [
   'Esccolha uma Conta',
   'Ativos Circulantes',
   'Ativos não circulantes',
   'Patrimonio Líquido',
   'Receitas'

  ]
  
  const accountsExpense = [
    'Esccolha uma Conta',
    'Custos',
    'Despesas',
    'Passivo Circulante',
    'Passivo não circulante',
  ]

  const accountsExpensesGroups = [
    {account: 'Custos' , group: 'Custos'},
    {account: 'Despesas', group: ['Despesas Administrativas','Despesas com vendas', 'Despesas financeiras', 'Despesas com veículos da empresa', 'Despesas diversas', 'despesas com Pessoal', 'Despesas Tributárias', 'Depreciação']},
    {account: 'Passivo Circulante', group: ['Contas a pagar', 'Tributos a pagar', 'Outros passivos circulantes', 'Emprestimos e financiamentos']},
    {account: 'Passivo não Circulante', group: ['Financiamento de longo prazo']}
  ]

  const accountsIncomeGroups = [
    {account: 'Ativos Circulantes', group: ['Disponivel', 'Contas Correntes', 'Contas a receber', 'Estoques']},
    {account: 'Ativos não circulantes', group: ['Imobilizados', 'Investimentos financeiros']},
    {account: 'Patrimonio Líquido', group: ['Lucros acumulados', 'Capital Social', 'Reservas']},
    {account: 'Receitas', group: ['Receitas Operacionais', 'Receitas Não-Operacionais']},
  ]


  return (
    <>
    <C.Container>
    <C.InputContent>
  <C.Label htmlFor="transactionType">Tipo de transação:</C.Label>
    <C.Select id="transactionType" value={isExpense ? "expense" : "income"} onChange={(event) => setIsExpense(event.target.value === "expense")}>
      <option value="income">Entrada</option>
      <option value="expense">Saída</option>
    </C.Select>
</C.InputContent>
<C.InputContent>
  <C.Label> Conta</C.Label>
  <C.Select value={accountSelected} onChange={handleAccountChange}>
    {isExpense 
      ? accountsExpense.filter((account) => accountsExpense.includes(account)).map((acc) => (
          <option key={acc} value={acc}>{acc}</option>
        ))
      : accountsIncome.filter((account) => accountsIncome.includes(account)).map((acc) => (
          <option key={acc} value={acc}>{acc}</option>
        ))}
  </C.Select>
</C.InputContent>
{showOptions && (
  <C.InputContent>
    <C.Label>Grupo</C.Label>
    <C.Select value={group} onChange={handleGroupChange}>
      <option value="Escolha um grupo">Escolha um grupo</option>
      {accountsIncomeGroups.find((acc) => acc.account === accountSelected)?.group.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </C.Select>
  </C.InputContent>
)}
      {showOptions && (
        <>
        <C.InputContent>
        <C.Label>Opções</C.Label>
        <C.Select onChange={(e) => setSelectedOption(e.target.value)}>
        {Array.isArray(options) && options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
          ))}
        </C.Select>
      </C.InputContent>
        </>
      )}
      {showFields && (
        <>
          <C.InputContent>
            <C.Label>Vencimento</C.Label>
            <C.Input type="date" onChange={(e) => setDate(e.target.value)}/>
          </C.InputContent>

          <C.InputContent>
            <C.Label>Competência</C.Label>
            <C.Input type="month" onChange={(e) => setComp(e.target.value)} />
          </C.InputContent>
        </>
      )}
      <C.InputContent>
        <C.Label>Valor</C.Label>
        <C.Input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      </C.InputContent>
      <C.InputContent>
        <C.Label>Descição</C.Label>
        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
      </C.InputContent>
      <C.Button onClick={handleSave}>ADICIONAR</C.Button>
    </C.Container>
    <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form;