import { Table } from "../../components/tabelas/Tabelas";
import DateFilter from "../../ui/filtros/DateFilter";

  const columns = [
    { header: "Nome", accessor: "nome" },
    {
      header: "Saldo",
      accessor: "saldo",
      render: (value) => `R$ ${value.toFixed(2)}`
    },
    { header: "Banco", accessor: "banco" },
    { header: "Cor", accessor: "color" },
    { header: "Ações", accessor: "acoes" },
    { header : "Status", accessor: "status" }
  ];

  const data = [
    { nome: "Conta Nubank", banco: "Nubank", saldo: 2500.5, color: "#007bff", status: "Ativa" },
    { nome: "Conta Itaú", banco: "Itaú", saldo: 1200, color: "#28a745", status: "Ativa" },
    { nome: "Conta Bradesco", banco: "Bradesco", saldo: 0, color: "#dc3545", status: "Inativa" }
  ];

function Contas() {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-4xl font-bold mb-4 text-text">Contas Bancárias</h1>

        <div className="flex flex-row gap-2 flex-wrap justify-end w-full md:w-auto">
          <DateFilter/>
        </div>
      </div>

      <Table columns={columns} data={data} />
    </div>
  );
}

export default Contas;
