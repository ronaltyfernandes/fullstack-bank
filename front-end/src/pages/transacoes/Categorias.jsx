import { useEffect } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import { getTransactions } from "../../services/api";

// todo - adicionar valores reais e ações de editar/excluir Transacoes
function Transacoes() {

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      console.log(transactions.data);
    }
    fetchTransactions();
  }, [])
  const columns = [
    { header: "Nome", accessor: "name" },
    { header: "Descrição", accessor: "description" },
    { header: "Valor", accessor: "value" },
    { header: "Categoria", accessor: "category" },
    { header: "Banco", accessor: "bankAccount" },
    { header: "Status", accessor: "paymentStatus" },
    { header: "Forma De Pagamento", accessor: "paymentMethod" },
    { header: "Data", accessor: "date" },
    { header: "Ações", accessor: "actions" }
  ];

  const data = [
    {
      name: "Compra no Supermercado",
      description: "Compras semanais de alimentos",
      value: 150.50,
      category: "Alimentação",
      bankAccount: "Conta Corrente",
      paymentStatus: "Pago",
      paymentMethod: "Cartão de Crédito",
      date: "2023-10-01",
      actions: "Editar/Excluir"
    },
    {
      name: "Salário",
      description: "Pagamento mensal",
      value: 3000.00,
      category: "Renda",
      bankAccount: "Conta Salário",
      paymentStatus: "Recebido",
      paymentMethod: "Transferência",
      date: "2023-10-01",
      actions: "Editar/Excluir"
    },
    {
      name: "Transporte Público",
      description: "Passagem de ônibus",
      value: 4.50,
      category: "Transporte",
      bankAccount: "Conta Corrente",
      paymentStatus: "Pago",
      paymentMethod: "Dinheiro",
      date: "2023-10-02",
      actions: "Editar/Excluir"
    },
    {
      name: "Conta de Luz",
      description: "Fatura mensal de energia",
      value: 120.00,
      category: "Utilidades",
      bankAccount: "Conta Corrente",
      paymentStatus: "Pendente",
      paymentMethod: "Débito Automático",
      date: "2023-10-05",
      actions: "Editar/Excluir"
    },
    {
      name: "Freelance",
      description: "Projeto de desenvolvimento web",
      value: 800.00,
      category: "Renda Extra",
      bankAccount: "Conta Poupança",
      paymentStatus: "Recebido",
      paymentMethod: "Pix",
      date: "2023-10-10",
      actions: "Editar/Excluir"
    }
  ];

  return (
    <div className="">
      <h1 className="text-3xl font-semibold mb-4 text-text sombra-azul">Transacoes</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Transacoes;
