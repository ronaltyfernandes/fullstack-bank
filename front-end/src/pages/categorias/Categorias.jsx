import { useEffect, useState } from "react";
import { Table } from "../../components/tabelas/Tabelas";
import DateFilter from "../../ui/filtros/DateFilter";
import ButtonAdicionar from "../../ui/AdicionarValores/ButtonAdicionar";
import ModalAdicionarCategoria from "./ModalAdicionarCategoria";
import ModalEditarCategoria from "./ModalEditarCategoria";
import ModalDeletar from "../../ui/Modais/ModalDeletar";
import { getMe, getCategories, createCategory, updateCategory, deleteCategory } from "../../services/api"; // ajuste o caminho

const emptyForm = {
  name: "",
  description: "",
  incomeExpense: "EXPENSE",
  color: ""
};

const columns = [
  { header: "Nome", accessor: "name" },
  { header: "Descrição", accessor: "description" },
  { header: "Tipo", accessor: "incomeExpense" },
  { header: "Cor", accessor: "color" },
];

function Categorias() {
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [formState, setFormState] = useState(emptyForm);
  const [categories, setCategories] = useState([]);
  const userId = localStorage.getItem('finan_user_id');
  const [loading, setLoading] = useState(true);

  // Busca o usuário logado e depois as categorias dele
  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getCategories({ userId: userId });
        // ajuste conforme o formato de retorno da sua API (paginado ou array direto)
        setCategories(data.items ?? data);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const refreshCategories = async () => {
    if (!userId) return;
    const { data } = await getCategories({ userId: userId });
    setCategories(data.items ?? data);
  };

  const closeModal = () => {
    setModal(null);
    setSelected(null);
    setFormState(emptyForm);
  };

  const handleEdit = (categoria) => {
    setFormState({ ...emptyForm, ...categoria });
    setSelected(categoria);
    setModal("editar");
  };

  const handleDelete = (categoria) => {
    setSelected(categoria);
    setModal("deletar");
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteCategory(selected.id);
      await refreshCategories();
      closeModal();
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
        await updateCategory(formState.id, {
          name: formState.name,
          description: formState.description,
          incomeExpense: formState.incomeExpense,
        });
      } else {
        await createCategory({
          name: formState.name,
          description: formState.description,
          incomeExpense: formState.incomeExpense,
          user: userId, 
        });
      }
      await refreshCategories();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-4xl font-bold lg:mb-4 mb-0 text-text">Categorias</h1>
      </div>

      {loading ? (
        <p className="text-text/60 text-sm">Carregando categorias...</p>
      ) : (
        <Table columns={columns} data={categories} onEdit={handleEdit} onDelete={handleDelete} />
      )}

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