import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import { getTransactions } from "../../services/api";
import DateFilter from "../../ui/filtros/DateFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionar from "../../ui/AdicionarValores/ModalAdicionar";

// todo - adicionar valores reais e ações de editar/excluir Transacoes
function Transacoes() {
  const [openModal ,setOpenModal] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      console.log(transactions.data);
    }
    fetchTransactions();
  }, [])

  const columns = [
    { header: "Data", accessor: "date" },
    { header: "Nome", accessor: "name" },
    { header: "Descrição", accessor: "description" },
    { header: "Valor", accessor: "value" },
    { header: "Categoria", accessor: "category" },
    { header: "Banco", accessor: "bankAccount" },
    { header: "Status", accessor: "paymentStatus" },
    { header: "Forma De Pagamento", accessor: "paymentMethod" },
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
    }
  ];

    const initialFormState = {
    name: "",
    description: "",
    value: "",
    category: "",
    bankAccount: "",
    paymentStatus: "Pendente",
    paymentMethod: "",
    date: ""
  };

  const handleEdit = (transacao) => {
    console.log("Editar:", transacao);
  };

  const handleDelete = (transacao) => {
    console.log("Excluir:", transacao);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Passa os dados para a função que vai salvar na tabela
    if (onSave) onSave(formData); 
    
    // Reseta o formulário e fecha o modal
    setFormData(initialFormState);
    setOpenModal(false);
  };


  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-4xl font-bold lg:mb-4 mb-0 text-text">Transações</h1>

        <div className="flex flex-row gap-2 flex-wrap justify-end w-full md:w-auto">
          <DateFilter/>
        </div>

      </div>

      <Table
        columns={columns}
        data={data}
        onEdit={(categoria) => {
          setCategoriaSelecionada(categoria);
          setModalEditar(true);
        }}
        onDelete={(categoria) => { excluirCategoria(categoria.id) }}
      />
      <ButtonAdicionar setOpenModal={setOpenModal}/>
      <ModalAdicionar openModal={openModal} setOpenModal={setOpenModal} handleChange={handleChange} handleSubmit initialFormState={initialFormState}/>
    </div>
  );
}

export default Transacoes;
