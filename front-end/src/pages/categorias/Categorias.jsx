import { Table } from "../../components/tabelas/Tabelas";
import DateFilter from "../../ui/filtros/DateFilter";

// todo - adicionar valores reais e ações de editar/excluir categorias
function Categorias() {
  const columns = [
    { header: "Nome", accessor: "name" },
    { header: "Descrição", accessor: "description" },
    { header: "Tipo", accessor: "incomeExpensive" },
    { header: "Cor", accessor: "color" },
    { header: "Ações", accessor: "actions" }
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

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-4 text-text">Categorias</h1>
        <DateFilter/>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Categorias;
