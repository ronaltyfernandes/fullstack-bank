import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import DateRangeFilter from "../../ui/filtros/DateRangeFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionarTrasacoes from "./ModalAdicionarTrasacoes";
import ModalEditarTrasacoes from "./ModalEditarTrasacoes";
import ModalDeletar from "../../ui/Modais/ModalDeletar";
import { createTransaction, deleteTransaction, getTransactions, updateTransaction } from "../../services/api";
import getCurrentMonthRange from "../../utils/getCurrentMonthRange";
import { formatDate } from "../../utils/formataData";

const emptyForm = {
  name: "",
  description: "",
  value: "",
  category: "",
  bankAccount: "",
  paymentStatus: "PAID",
  paymentMethod: "CASH",
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
  const [modalState, setModalState] = useState({
    type: null,
    selected: null,
    form: emptyForm,
  });
  const [transacoes, setTransacoes] = useState([]);
  const [dateRange, setDateRange] = useState(getCurrentMonthRange());

  const refreshTransacoes = async (
    { startDate = dateRange.startDate, endDate = dateRange.endDate} = {}) => {
    const { data } = await getTransactions({ startDate, endDate });

    const items = (data.items ?? data).map((t) => (
      {
      ...t,
      bankAccountId: t.bankAccount?.id,
      categoryId: t.category?.id,
      bankAccount: t.bankAccount?.name ?? t.bankAccount,
      category: t.category?.name ?? t.category,
      dateForInput: t.date?.split("T")[0],
      date: t.date
        ? new Date(t.date).toLocaleDateString("pt-BR")
        : "",
    }));

    setTransacoes(items);
  };

  useEffect(() => {
    refreshTransacoes().catch((error) =>
      console.error("Erro ao carregar transações:", error)
    );
  }, [dateRange]);

  const handleMonthChange = (direction) => {
    const current = new Date(`${dateRange.startDate}T00:00:00`);

    const next = new Date(
      current.getFullYear(),
      current.getMonth() + direction,
      1
    );

    setDateRange({
      startDate: formatDate(new Date(next.getFullYear(), next.getMonth(), 1)),
      endDate: formatDate(new Date(next.getFullYear(), next.getMonth() + 1, 0)),
    });
  };

  const closeModal = () => {
    setModalState({
      type: null,
      selected: null,
      form: emptyForm,
    });
  };

  const handleEdit = (transacao) => {
    openModal("editar", transacao);
  };

  const handleDelete = (transacao) => {
    openModal("deletar", transacao);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteTransaction(modalState.selected.id);
      await refreshTransacoes();
      closeModal();
    } catch (error) {
      console.error("Erro ao deletar conta:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalState((prev) => ({ ...prev, form: { ...prev.form, [name]: value } }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: modalState.form.name,
        description: modalState.form.description,
        category: modalState.form.category,
        bankAccount: modalState.form.bankAccount,
        value: modalState.form.value,
        paymentStatus: modalState.form.paymentStatus,
        paymentMethod: modalState.form.paymentMethod,
        date: modalState.form.date,
      };
      if (modalState.form.id) {
        await updateTransaction(modalState.form.id, payload);
      } else {
        await createTransaction(payload);
      }
      await refreshTransacoes();
      closeModal();
    } catch (error) {
      console.error("Erro ao salvar conta:", error);
    }
  };

  const openModal = (type, transaction = null) => {
  setModalState({
    type,
    selected: transaction,
    form: transaction
      ? {
          ...emptyForm,
          ...transaction,
          bankAccount: transaction.bankAccountId,
          category: transaction.categoryId,
          date: transaction.dateForInput,
        }
      : emptyForm,
  });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
        <h1 className="text-4xl font-bold lg:mb-4 mb-0 text-text">Transações</h1>
        <div className="w-full md:w-auto">
          <DateRangeFilter
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            onStartDateChange={(start) => setDateRange((prev) => ({ ...prev, startDate: start }))}
            onEndDateChange={(end) => setDateRange((prev) => ({ ...prev, endDate: end }))}
            onMonthChange={handleMonthChange}
          />
        </div>
      </div>

      <Table
        columns={columns}
        data={transacoes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ButtonAdicionar setOpenModal={() => openModal("adicionar")} />
      <ModalAdicionarTrasacoes
        openModal={modalState.type === "adicionar"}
        setOpenModal={closeModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formState={modalState.form}
      />
      <ModalEditarTrasacoes
        openModal={modalState.type === "editar"}
        setOpenModal={closeModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formState={modalState.form}
      />
      <ModalDeletar
        isOpen={modalState.type === "deletar"}
        onClose={closeModal}
        onConfirm={handleConfirmDelete}
        itemName={modalState.selected?.name}
        entityLabel="transação"
      />

    </div>
  );
}

export default Transacoes;