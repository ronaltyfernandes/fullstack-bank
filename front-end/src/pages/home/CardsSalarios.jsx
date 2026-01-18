import CardSaldo from "../../components/graficos/CardSaldo"

function CardsSalarios() {
  return (
    <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-2">
      <CardSaldo variant="saldo" nome="Saldo" saldo="R$ 5.000,00" valorAnterior="R$ 5000,00" />
      <CardSaldo variant="receitas" nome="Receitas" saldo="R$ 4.000,00" valorAnterior="R$ 5000,00" />
       <div className="md:col-span-2 lg:col-span-1">
        <CardSaldo variant="despesas" nome="Despesas" saldo="R$ 5.000,00" valorAnterior="R$ 4.500,00" />
       </div>
    </div>
  )
}

export default CardsSalarios;