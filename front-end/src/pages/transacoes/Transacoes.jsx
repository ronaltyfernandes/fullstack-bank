import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import DateRangeFilter from "../../ui/filtros/DateRangeFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionarTrasacoes from "./ModalAdicionarTrasacoes";
import ModalEditarTrasacoes from "./ModalEditarTrasacoes";
import ModalDeletar from "../../ui/Modais/ModalDeletar";
import { createTransaction, deleteTransaction, getBankAccounts, getTransactions, updateTransaction } from "../../services/api";
import getCurrentMonthRange from "../../utils/getCurrentMonthRange";

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
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [formState, setFormState] = useState(emptyForm);
  const userId = localStorage.getItem('finan_user_id');
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { startDate: initialStartDate, endDate: initialEndDate } = getCurrentMonthRange();
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const refreshTransacoes = async ({ startDate, endDate }) => {
    const { data } = await getTransactions({ startDate, endDate });
    const items = (data.items ?? data).map((t) => ({
      ...t,
      bankAccountId: t.bankAccount?.id,
      categoryId: t.category?.id,
      bankAccount: t.bankAccount?.name ?? t.bankAccount,
      category: t.category?.name ?? t.category,
      dateForInput: t.date?.split('T')[0],
      date: t.date ? new Date(t.date).toLocaleDateString('pt-BR') : '',
    }));
    setTransacoes(items);
  };

  useEffect(() => {
    const init = async () => {
      try {
        await refreshTransacoes({ startDate, endDate });
      } catch (error) {
        console.error("Erro ao carregar transações:", error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [startDate, endDate]);

  const handleMonthChange = (direction) => {
    const currentDate = startDate || endDate || initialStartDate;
    const [year, month] = currentDate.split("-").map(Number);
    const nextDate = new Date(year, month - 1 + direction, 1);

    const formatDate = (date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    };

    const start = new Date(nextDate.getFullYear(), nextDate.getMonth(), 1);
    const end = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0);

    setStartDate(formatDate(start));
    setEndDate(formatDate(end));
  };

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
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
        <h1 className="text-4xl font-bold lg:mb-4 mb-0 text-text">Transações</h1>
        <div className="w-full md:w-auto">
          <DateRangeFilter
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
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