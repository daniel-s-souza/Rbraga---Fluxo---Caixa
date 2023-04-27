import React, {useState} from 'react';
import * as C from './style';
import Grid from '../Grid';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [options, setOptions] = useState([]);
  const [group, setGroup] = useState("");
  const [showFields, setShowFields] = useState(false);


  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!group || !amount || !options) {
      alert("Preencha os campos obrigatórios: Grupo, Opções e Valor");
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
        setOptions(['Salário', 'Rendimentos', 'Renda de aluguel', 'Investimentos' ,'Vendas', 'Prêmios', 'Mesada' ,'Reembolsos', 'Presentes' ]);
        break;
      case 'Despesas fixas':
        setOptions(['Aluguel', 'Condomínio', 'Internet', 'Energia', 'Água', 'Seguros', 'Telefone', 'Planos de saúde e odontológicos', 'Empréstimos e financiamentos', 'Impostos e taxas']);
        break;
      case 'Despesas variáveis':
        setOptions(['Supermercado', 'Farmácia', 'Restaurantes', 'Transporte', 'Educação', 'Compras em geral' ,'Presentes e doações' ,'Viagens']);
        break;
      case 'Investimentos':
        setOptions(['Renda fixa', 'Renda variável', 'Ações', 'Criptomoedas' ,'Fundos de investimento','Tesouro Direto','Previdência Privada','Investimentos imobiliários']);
        break;
      case 'Dívidas':
        setOptions(['Cartão de crédito', 'Empréstimos', 'Financiamentos', 'Cheque especial', 'Dívidas com fornecedores']);
        break;
      case 'Reserva de emergência':
        setOptions(['Conta poupança', 'Fundo de reserva', 'Investimentos de baixo risco', 'Dinheiro em espécie', 'Cofre']);
        break;
      default:
        setOptions([]);
        break;
    }

    if (selectedGroup === 'Despesas fixas' || selectedGroup === 'Despesas variáveis' || selectedGroup === 'Dívidas') {
      setShowFields(true);
    } else {
      setShowFields(false);
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
      {showFields && (
        <>
          <C.InputContent>
            <C.Label>Vencimento</C.Label>
            <C.Input type="date" />
          </C.InputContent>

          <C.InputContent>
            <C.Label>Competência</C.Label>
            <C.Input type="month" />
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