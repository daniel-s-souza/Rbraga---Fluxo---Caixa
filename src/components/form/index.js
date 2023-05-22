import React, {useState} from 'react';
import * as C from './style';
import Grid from '../Grid';


const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [options, setOptions] = useState([]);
  const [group, setGroup] = useState("Escolha um grupo");
  const [showOptions, setShowOptions] = useState(false);
  const [date, setDate] = useState('');
  const [comp, setComp] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [accountSelected, setAccountSelected] = useState('Escolha uma Conta');
  const [availableGroups, setAvailableGroups] = useState('');
  const [idCounter, setIdCounter] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [numberOfInstallments, setNumberOfInstallments] = useState(1);
  const [parcelasIguais, setParcelasIguais] = useState(true);
  const [valorParcelas, setValorParcelas] = useState('');

 
  const generateID = () => {
    const newId = idCounter + 1;
    setIdCounter(newId);
    return newId;
  };
  

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
      valorParcelas: valorParcelas, 
      numberOfInstallments: numberOfInstallments,
    };

    handleAdd(transaction);
    
    setDesc('');
    setAmount('');
    setComp('');
    setGroup('Escolha um grupo');
    setOptions('');
    setDate('');
    setAccountSelected('Escolha uma Conta');
    setShowOptions(false);
    setNumberOfInstallments(1);
    setValorParcelas('');
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
        case 'Contas a pagar':
        setOptions(['','Contas a pagar', 'Débitos de consórcios', 'Débitos de pré-vendas', 'Fornecedores a pagar', 'honorários a pagar', 'Juros a transcorrer', 'Outras contas a pagar', 'Salário a pagar']);
        break;
        case 'Tributos a pagar':
        setOptions(['','Encargos Sociais a pagar', 'IR a pagar','INSS a pagar','FGTS a pagar','Outros impostos a pagar']);
        break;
        case 'Outros passivos circulantes':
        setOptions(['','Outras dívidas de curto prazo','Outras contas a pagar','Provisões diversas']);
        break;
        case 'Empréstimos e financiamentos':
        setOptions(['','Empréstimos Bancários', 'Empréstimos de sócios', 'Financiamento de veículo']);
        break;
        case 'Financiamento de longo prazo':
        setOptions(['','Financiamento Imobiliário', 'Dívidas renegociadas', 'REFIS a pagar', 'Outros passivos de longo prazo']);
        break;
        case 'Lucros acumulados':
        setOptions(['','Lucros ou prejuízos acumulados']);
        break;
        case 'Capital social':
        setOptions(['','Capital Social']);
        break;
        case 'Reservas':
        setOptions(['','Reservas de patrimônio', 'Reservas de Contigência', 'Reservas de Distribuição', 'Outras Reservas']);
        break;
        case 'Receitas operacionais':
        setOptions(['','Comissão de concessionárias','Comissão de financeiras', 'Outras receitas operacionais', 'Prestação de serviços', 'Receita de consignado', 'Venda de outros veículos', 'Venda de veículo novo', 'Venda de veículo seminovo']);
        break;
        case 'Receitas não-operacionais':
        setOptions(['','Alugéis','Outras Receitas']);
        break;
        case 'Custos':
        setOptions(['','Custos dos veículos vendidos', 'Custos de serviços prestados']);
        break;
        case 'Despesas Administrativas':
        setOptions(['','Água', 'Aluguel', 'Contador', 'Correios','Despesas com cartório', 'Internet', 'Energia Elétrica', 'Material de escritório', 'Material de Limpeza', 'Outras despesas administrativas', 'Telefone celular', 'Telefone fixo']);
        break;
        case 'Despesas com vendas':
        setOptions(['','Ajuda de custo a vendedores', 'Bonificações a clientes', 'Brindes', 'Comissões', 'Despesas com entregas', 'Embalagem', 'marketing e propaganda','Outras despesas com vendas', 'Premiação a vendedores', 'Serviços extras']);
        break;
        case 'Despesas financeiras':
        setOptions(['','IOF', 'Juros bancários', 'Manutenção de contas correntes', 'Multas e juros', 'Outras despesas financeiras', 'Pagamentos de empréstimos', 'SERASA', 'SPC', 'Tarifas bancárias']);
        break;
        case 'Despesas com veículos da empresa':
        setOptions(['','Aluguel de veículo', 'Combustível administração', 'Combustível operacional', 'IPVA', 'Manutenção', 'Outras despesas com veículos', 'Peças e serviços', 'Pneus', 'Seguros']);
        break;
        case 'Despesas diversas':
        setOptions(['','Despesas diversas', 'Doações e patrocinios', 'Instalações e serviços', 'Manutenção de equipamentos']);
        break;
        case 'Despesa com pessoal':
        setOptions(['','13º salário', 'Bonificações e gratificações', 'Férias', 'Folha de salários', 'Honorários profissionais', 'Horas-extras', 'Multas trabalhistas', 'Recisão contratual', 'Serviços de terceiros', 'Uniformes e crachás' , 'Vale-alimentação', 'Vale-transporte']);
        break;
        case 'Despesas Tributárias':
        setOptions(['','Alvará de funcionamento', 'COFINS', 'Contribuição sindical', 'CSLL', 'FGTS', 'ISS', 'ICMS', 'OC,S Antecipado', 'INSS', 'IPTU', 'IR', 'IRRF', 'Outras despesas tributárias', 'PIS', 'Taxas e contribuições diversas']);
        break;
        case 'Depreciação':
        setOptions(['','Depreciação']);
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
    {account: 'Custos' , group: ['Custos']},
    {account: 'Despesas', group: ['Despesas Administrativas','Despesas com vendas', 'Despesas financeiras', 'Despesas com veículos da empresa', 'Despesas diversas', 'Despesa com pessoal', 'Despesas Tributárias', 'Depreciação']},
    {account: 'Passivo Circulante', group: ['Contas a pagar', 'Tributos a pagar', 'Outros passivos circulantes', 'Empréstimos e financiamentos']},
    {account: 'Passivo não circulante', group: ['Financiamento de longo prazo']}
  ]

  const accountsIncomeGroups = [
    {account: 'Ativos Circulantes', group: ['Disponivel', 'Contas Correntes', 'Contas a receber', 'Estoques']},
    {account: 'Ativos não circulantes', group: ['Imobilizados', 'Investimentos financeiros']},
    {account: 'Patrimonio Líquido', group: ['Lucros acumulados', 'Capital social', 'Reservas']},
    {account: 'Receitas', group: ['Receitas operacionais', 'Receitas não-operacionais']},
  ]

  const transacionOptions = [
    'Entrada',
    'Saída',
  ]

  const isExpenseAccount = (account) => {
    return accountsExpensesGroups.some((acc) => acc.account === account);
  };

  const showFields = isExpenseAccount(accountSelected);
  
  function convertISOtoDateBR(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  function convertISOtoMonthBR(date) {
    const [year, month ] = date.split('-');
    const monthIndex = parseInt(month) - 1;
    const monthNames = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    const monthName = monthNames[monthIndex].charAt(0).toUpperCase() + monthNames[monthIndex].slice(1);
    return `${monthName}/${year}`;
  }

  const showInstallments = () => {
    return isExpense && paymentMethod === 'A prazo';
  };

  const handleParcelasIguaisChange = (event) => {
    setParcelasIguais(event.target.value === 'true');
  };

  
  const renderInputs = () => {
    const inputs = [];

    if (!parcelasIguais) {
      for (let i = 0; i < numberOfInstallments; i++) {
        inputs.push(
          <div key={i}>
            <C.Label>
              Valor da parcela {i + 1}:
              <C.Input 
              onChange={(event) => setValorParcelas(event.target.value)}
              type="number"
              value={valorParcelas} />
            </C.Label>
          </div>
        );
      }
    }

    return inputs;
  };
  

  return (
    <>
    <C.Container>
    <C.InputContent>
  <C.Label htmlFor="transactionType">Tipo de transação:</C.Label>
  <C.Select id="transactionType" onChange={() => setIsExpense(!isExpense)}>
  {transacionOptions.map((option) => (
    <option key={option} value={option}>{option}</option>
  ))}
</C.Select>
</C.InputContent>
      {isExpense && (
        <C.InputContent>
          <C.Label>Método de Pagamento</C.Label>
          <C.Select
            value={paymentMethod}
            onChange={(event) => setPaymentMethod(event.target.value)}
          >
            <option>Escolha Método</option>
            <option>À vista</option>
            <option>A prazo</option>
          </C.Select>
        </C.InputContent>
      )}
         {showInstallments() && (
        <C.InputContent>
          <C.Label>Parcelas iguais?</C.Label>
          <C.Select
             value={parcelasIguais} onChange={handleParcelasIguaisChange}
          >
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </C.Select>
        </C.InputContent>
      )}
      {showInstallments() && (
        <C.InputContent>
          <C.Label>Número de Parcelas</C.Label>
          <C.Input
            type="number"
            value={numberOfInstallments}
            onChange={(event) => setNumberOfInstallments(event.target.value)}
          />
        </C.InputContent>
      )}
      {!parcelasIguais && (
        <C.InputContent>
          <C.Label>Informe o valor das parcelas</C.Label>
          {renderInputs()}
        </C.InputContent>
      )}
<C.InputContent>
  <C.Label> Conta</C.Label>
  <C.Select value={availableGroups} onChange={handleAccountChange}>
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
      {isExpenseAccount(accountSelected) ? 
        accountsExpensesGroups.find((acc) => acc.account === accountSelected)?.group.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))
      :
        accountsIncomeGroups.find((acc) => acc.account === accountSelected)?.group.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))
      }
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
      {showFields && isExpenseAccount(accountSelected) && (
  <>
   <C.InputContent>
  <C.Label>Vencimento</C.Label>
  <C.Input type="date" onChange={(e) => setDate(convertISOtoDateBR(e.target.value))}/>
  </C.InputContent>

    <C.InputContent>
      <C.Label>Competência</C.Label>
      <C.Input type="month" onChange={(e) => setComp(convertISOtoMonthBR(e.target.value))} />
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