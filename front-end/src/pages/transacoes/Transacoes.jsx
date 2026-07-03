import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import DateFilter from "../../ui/filtros/DateFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionarTrasacoes from "./ModalAdicionarTrasacoes";
import ModalEditarTrasacoes from "./ModalEditarTrasacoes";
import ModalDeletar from "../../ui/Modais/ModalDeletar";
import { createTransaction, deleteTransaction, getBankAccounts, getTransactions, updateTransaction } from "../../services/api";

const emptyForm = {
  name: "",
  description: "",
  value: "",
  category: "",
  bankAccount: "",
  paymentStatus: "PENDING",
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

function Transacoes() {
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [formState, setFormState] = useState(emptyForm);
  const userId = localStorage.getItem('finan_user_id');
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshTransacoes = async () => {
    const { data } = await getTransactions();
    const items = (data.items ?? data).map((t) => ({
      ...t,
      bankAccountId: t.bankAccount?.id,
      categoryId: t.category?.id,
      bankAccount: t.bankAccount?.name ?? t.bankAccount,
      category: t.category?.name ?? t.category,
      dateForInput: t.date?.split('T')[0],                          // <- para o input (yyyy-mm-dd)
      date: t.date ? new Date(t.date).toLocaleDateString('pt-BR') : '', // <- para a tabela (dd/mm/yyyy)
    }));
    setTransacoes(items);
  };

  useEffect(() => {
    const init = async () => {
      try {
        await refreshTransacoes();
      } catch (error) {
        console.error("Erro ao carregar transações:", error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const closeModal = () => {
    setModal(null);
    setSelected(null);
    setFormState(emptyForm);
  };

  const handleEdit = (transacao) => {
    setFormState({
      ...emptyForm,
      ...transacao,
      bankAccount: transacao.bankAccountId,
      category: transacao.categoryId,
      date: transacao.dateForInput,
    });
    setSelected(transacao);
    setModal("editar");
  };

  const handleDelete = (transacao) => {
    setSelected(transacao);
    setModal("deletar");
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteTransaction(selected.id);
      await refreshTransacoes();
      closeModal();
    } catch (error) {
      console.error("Erro ao deletar conta:", error);
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
        await updateTransaction(formState.id, {
          name: formState.name,
          description: formState.description,
          category: formState.category,
          bankAccount: formState.bankAccount,
          value: formState.value,
          paymentStatus: formState.paymentStatus,
          paymentMethod: formState.paymentMethod,
          date: formState.date,
        });
      } else {
        await createTransaction({
          name: formState.name,
          description: formState.description,
          category: formState.category,
          bankAccount: formState.bankAccount,
          value: formState.value,
          paymentStatus: formState.paymentStatus,
          paymentMethod: formState.paymentMethod,
          date: formState.date,
        });
      }
      await refreshTransacoes();
      closeModal();
    } catch (error) {
      console.error("Erro ao salvar conta:", error);
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
        data={transacoes}
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