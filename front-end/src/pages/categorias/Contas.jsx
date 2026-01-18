import { Table } from "../../components/tabelas/Tabelas";

  const columns = [
    { header: "Nome", accessor: "nome" },
    {
      header: "Saldo",
      accessor: "saldo",
      render: (value) => `R$ ${value.toFixed(2)}`
    },
    { header: "Banco", accessor: "banco" },
    { header: "Cor", accessor: "cor" },
    { header: "Ações", accessor: "acoes" },
    { header : "Status", accessor: "status" }
  ];

  const data = [
    { nome: "Conta Nubank", banco: "Nubank", saldo: 2500.5, cor: "#007bff", status: "Ativa" },
    { nome: "Conta Itaú", banco: "Itaú", saldo: 1200, cor: "#28a745", status: "Ativa" },
    { nome: "Conta Bradesco", banco: "Bradesco", saldo: 0, cor: "#dc3545", status: "Inativa" }
  ];

function Contas() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4 text-text sombra-azul">Contas Bancárias</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Contas;
