import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import DateFilter from "../../ui/filtros/DateFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionarConta from "./ModalAdicionarConta";
import ModalEditarConta from "./ModalEditarConta";
import ModalDeletar from "../../ui/Modais/ModalDeletar";

  const emptyForm = {
    name: "",
    banco: "",
    saldo: "0.00",
    color: "",
    status: "ativa"
  };

  const columns = [
    { header : "Status", accessor: "status" },
    { header: "Nome", accessor: "nome" },
    {
      header: "Saldo",
      accessor: "saldo",
      render: (value) => `R$ ${value.toFixed(2)}`
    },
    { header: "Banco", accessor: "banco" },
    { header: "Cor", accessor: "color" },
  ];

  const data = [
    { nome: "Conta Nubank", banco: "Nubank", saldo: 2500.5, color: "#007bff", status: "Ativa" },
    { nome: "Conta Itaú", banco: "Itaú", saldo: 1200, color: "#28a745", status: "Ativa" },
    { nome: "Conta Bradesco", banco: "Bradesco", saldo: 0, color: "#dc3545", status: "Inativa" }
  ];

function Contas() {
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
        <h1 className="text-4xl font-bold lg:mb-4 mb-0 text-text">Contas Bancárias</h1>

        <div className="flex flex-row gap-2 flex-wrap justify-end w-full md:w-auto">
          <DateFilter/>
        </div>
      </div>

      <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete}/>

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
        entityLabel="categoria"
      />
    </div>
  );
}

export default Contas;
