import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import DateFilter from "../../ui/filtros/DateFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionarCategoria from "./ModalAdicionarCategoria";
import ModalEditarCategoria from "./ModalEditarCategoria";
import ModalDeletar from "../../ui/Modais/ModalDeletar";

// todo - adicionar valores reais e ações de editar/excluir categorias
const emptyForm = {
  name: "",
  description: "",
  incomeExpensive: "EXPENSE",
  color: ""
};

const columns = [
  { header: "Nome", accessor: "name" },
  { header: "Descrição", accessor: "description" },
  { header: "Tipo", accessor: "incomeExpensive" },
  { header: "Cor", accessor: "color" },
];

const data = [
  {
    id: 1,
    name: "Alimentação",
    description: "Gastos com comida e bebidas",
    incomeExpensive: "EXPENSE",
    color: "#FF6B6B"
  },
  {
    id: 2,
    name: "Transporte",
    description: "Uber, gasolina, combustível",
    incomeExpensive: "EXPENSE",
    color: "#4ECDC4"
  },
  {
    id: 3,
    name: "Saúde",
    description: "Medicamentos, consultas médicas",
    incomeExpensive: "EXPENSE",
    color: "#FFD93D"
  },
  {
    id: 4,
    name: "Salário",
    description: "Renda mensal do trabalho",
    incomeExpensive: "INCOME",
    color: "#6BCB77"
  },
  {
    id: 5,
    name: "Freelance",
    description: "Trabalhos pontuais e projetos",
    incomeExpensive: "INCOME",
    color: "#95E1D3"
  },
  {
    id: 6,
    name: "Entretenimento",
    description: "Cinema, streaming, jogos",
    incomeExpensive: "EXPENSE",
    color: "#A29BFE"
  },
  {
    id: 7,
    name: "Educação",
    description: "Cursos e materiais de aprendizado",
    incomeExpensive: "EXPENSE",
    color: "#74B9FF"
  },
  {
    id: 8,
    name: "Investimentos",
    description: "Aplicações e rendimentos",
    incomeExpensive: "INCOME",
    color: "#00B894"
  }
];

function Categorias() {
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
        <h1 className="text-4xl font-bold lg:mb-4 mb-0 text-text">Categorias</h1>
        <div className="flex flex-row gap-2 flex-wrap justify-end mb-4 lg:mb-0 w-full md:w-auto">
          <DateFilter/>
        </div>
      </div>

    <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete}/>

    <ButtonAdicionar setOpenModal={() => setModal("adicionar")} />
    <ModalAdicionarCategoria
      openModal={modal === "adicionar"}
      setOpenModal={closeModal}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formState={formState}
    />
    <ModalEditarCategoria
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

export default Categorias;
