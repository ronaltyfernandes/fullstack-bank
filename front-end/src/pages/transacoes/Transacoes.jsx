import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
// import { getTransactions, deleteTransaction } from "../../services/api";
import DateFilter from "../../ui/filtros/DateFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionarTrasacoes from "./ModalAdicionarTrasacoes";
import ModalEditarTrasacoes from "./ModalEditarTrasacoes";
import ModalDeletar from "../../ui/Modais/ModalDeletar";

const emptyForm = {
  name: "",
  description: "",
  value: "",
  category: "",
  bankAccount: "",
  paymentStatus: "Pendente",
  paymentMethod: "",
  date: "",
};

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
    value: 150.5,
    category: "Alimentação",
    bankAccount: "Conta Corrente",
    paymentStatus: "Pago",
    paymentMethod: "Cartão de Crédito",
    date: "2023-10-01",
  },
  {
    name: "Salário",
    description: "Pagamento mensal",
    value: 3000.0,
    category: "Renda",
    bankAccount: "Conta Salário",
    paymentStatus: "Recebido",
    paymentMethod: "Transferência",
    date: "2023-10-01",
  },
  {
    name: "Transporte Público",
    description: "Passagem de ônibus",
    value: 4.5,
    category: "Transporte",
    bankAccount: "Conta Corrente",
    paymentStatus: "Pago",
    paymentMethod: "Dinheiro",
    date: "2023-10-02",
  },
  {
    name: "Conta de Luz",
    description: "Fatura mensal de energia",
    value: 120.0,
    category: "Utilidades",
    bankAccount: "Conta Corrente",
    paymentStatus: "Pendente",
    paymentMethod: "Débito Automático",
    date: "2023-10-05",
  },
  {
    name: "Freelance",
    description: "Projeto de desenvolvimento web",
    value: 800.0,
    category: "Renda Extra",
    bankAccount: "Conta Poupança",
    paymentStatus: "Recebido",
    paymentMethod: "Pix",
    date: "2023-10-10",
  },
];

// modal: null | "adicionar" | "editar" | "deletar"
function Transacoes() {
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [formState, setFormState] = useState(emptyForm);

  useEffect(() => {
    const fetchTransactions = async () => {
      // const transactions = await getTransactions();
      // console.log(transactions.data);
    };
    fetchTransactions();
  }, []);

  const closeModal = () => {
    setModal(null);
    setSelected(null);
    setFormState(emptyForm);
  };

  const handleEdit = (transacao) => {
    setFormState({ ...emptyForm, ...transacao });
    setSelected(transacao);
    setModal("editar");
  };

  const handleDelete = (transacao) => {
    setSelected(transacao);
    setModal("deletar");
  };

  const handleConfirmDelete = async () => {
    try {
      console.log("Excluir:", selected);
      // await deleteTransaction(selected.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formState.id) {
        console.log("Atualizar:", formState);
        // await updateTransaction(formState.id, formState);
      } else {
        console.log("Criar:", formState);
        // await createTransaction(formState);
      }
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-4xl font-bold lg:mb-4 mb-0 text-text">Transações</h1>
        <div className="flex flex-row gap-2 flex-wrap justify-end w-full md:w-auto">
          <DateFilter />
        </div>
      </div>

      <Table
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ButtonAdicionar setOpenModal={() => setModal("adicionar")} />
      <ModalAdicionarTrasacoes
        openModal={modal === "adicionar"}
        setOpenModal={closeModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formState={formState}
      />
      <ModalEditarTrasacoes
        openModal={modal === "editar"}
        setOpenModal={closeModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formState={formState}
      />
      <ModalDeletar
        isOpen={modal === "deletar"}
        onClose={closeModal}
        onConfirm={handleConfirmDelete}
        itemName={selected?.name}
        entityLabel="transação"
      />

    </div>
  );
}

export default Transacoes;