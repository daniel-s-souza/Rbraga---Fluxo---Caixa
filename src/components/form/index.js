import React, {useState} from 'react';
import * as C from './style';
import Grid from '../Grid';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [options, setOptions] = useState([]);
  const [group, setGroup] = useState("");


  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor");
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
      subGroup: options,
    };

    handleAdd(transaction);
    
    setDesc('');
    setAmount('');
  };

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
    
    const selectedGroup = event.target.value;
    switch (selectedGroup) {
      case 'Receitas':
        setOptions(['Salário', 'Rendimentos']);
        break;
      case 'Despesas fixas':
        setOptions(['Aluguel', 'Condomínio', 'Internet', 'Energia', 'Água']);
        break;
      case 'Despesas variáveis':
        setOptions(['Supermercado', 'Farmácia', 'Restaurantes', 'Transporte']);
        break;
      case 'Investimentos':
        setOptions(['Poupança', 'Tesouro Direto', 'Ações', 'Criptomoedas']);
        break;
      case 'Dívidas':
        setOptions(['Cartão de crédito', 'Empréstimos', 'Financiamentos']);
        break;
      case 'Reserva de emergência':
        setOptions(['Despesas de Saúde', 'Despesas de Manutenção', 'Despesas de Perda de Emprego', 'Viagem', 'Reparo em Casa', 'Animais de Estimação']);
        break;
      default:
        setOptions([]);
        break;
    }
  };

  return (
    <>
    <C.Container>
    <C.InputContent>
        <C.Label>Grupo</C.Label>
        <C.Select onChange={handleGroupChange}>
          <option value="">Escolha um grupo</option>
          <option value="Receitas">Receitas</option>
          <option value="Despesas fixas">Despesas fixas</option>
          <option value="Despesas variáveis">Despesas variáveis</option>
          <option value="Investimentos">Investimentos</option>
          <option value="Dívidas">Dívidas</option>
          <option value="Reserva de emergência">Reserva de emergência</option>
        </C.Select>
      </C.InputContent>

      <C.InputContent>
        <C.Label>Opções</C.Label>
        <C.Select>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </C.Select>
      </C.InputContent>
      <C.InputContent>
        <C.Label>Valor</C.Label>
        <C.Input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      </C.InputContent>
      <C.InputContent>
        <C.Label>Descição</C.Label>
        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
      </C.InputContent>
      <C.RadioGroup>
        <C.Input 
          type="radio"
          id="rIncome"
          defaultChecked
          name='group1'
          onChange={() => setIsExpense(!isExpense)}
        />
        <C.Label htmlFor='rIncome'>Entrada</C.Label>
        <C.Input 
          type="radio"
          id="rExpenses"
          name='group1'
          onChange={() => setIsExpense(!isExpense)}
        />
         <C.Label htmlFor='rExpenses'>Saída</C.Label>
      </C.RadioGroup>
      <C.Button onClick={handleSave}>ADICIONAR</C.Button>
    </C.Container>
    <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form;