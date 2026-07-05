import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import DateFilter from "../../ui/filtros/DateFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionarConta from "./ModalAdicionarConta";
import ModalEditarConta from "./ModalEditarConta";
import ModalDeletar from "../../ui/Modais/ModalDeletar";
import { getBankAccounts, createBankAccount, updateBankAccount, deleteBankAccount } from "../../services/api";

const emptyForm = {
  name: "",
  bank: "",
  balance: "0.00",
  icon: "",
};

const columns = [
  { header: "Status", accessor: "isActive" },
  { header: "Nome", accessor: "name" },
  {
    header: "Saldo",
    accessor: "balance",
    render: (value) => `R$ ${Number(value).toFixed(2)}`,
  },
  { header: "Banco", accessor: "bank" },
  { header: "Icon", accessor: "icon" },
];

function Contas() {
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [formState, setFormState] = useState(emptyForm);
  const userId = localStorage.getItem('finan_user_id');
  const [contas, setContas] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshContas = async () => {
    if (!userId) return;
    const { data } = await getBankAccounts({ userId });
    setContas(data.items ?? data);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getBankAccounts();
        setContas(data.items ?? data);
      } catch (error) {
        console.error("Erro ao carregar contas:", error);
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

  const handleEdit = (conta) => {
    setFormState({ ...emptyForm, ...conta });
    setSelected(conta);
    setModal("editar");
  };

  const handleDelete = (conta) => {
    setSelected(conta);
    setModal("deletar");
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteBankAccount(selected.id);
      await refreshContas();
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
        await updateBankAccount(formState.id, {
          name: formState.name,
          bank: formState.bank,
          balance: formState.balance,
          icon: formState.icon,
        });
      } else {
        const userId = localStorage.getItem("finan_user_id");
        await createBankAccount({
          name: formState.name,
          bank: formState.bank,
          balance: formState.balance,
          icon: formState.icon,
          user: { id: userId },
        });
      }
      await refreshContas();
      closeModal();
    } catch (error) {
      console.error("Erro ao salvar conta:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-4xl font-bold lg:mb-4 mb-0 text-text">
          Contas Bancárias
        </h1>
      </div>

      {loading ? (
        <p className="text-text">Carregando...</p>
      ) : (
        <Table
          columns={columns}
          data={contas}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <ButtonAdicionar setOpenModal={() => setModal("adicionar")} />
      <ModalAdicionarConta
        openModal={modal === "adicionar"}
        setOpenModal={closeModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formState={formState}
      />
      <ModalEditarConta
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
        entityLabel="conta"
      />
    </div>
  );
}

export default Contas;