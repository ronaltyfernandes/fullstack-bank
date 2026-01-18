import GraficoLinha from "./GraficoLinha";

//todo pegar dados reais para os graficos
  const dados = [
    { tempo: "Jan", valor: 10 },
    { tempo: "Fev", valor: 18 },
    { tempo: "Mar", valor: 12 },
    { tempo: "Abr", valor: 25 },
    { tempo: "Mai", valor: 20 },
    { tempo: "Jun", valor: 30 },
    { tempo: "Jul", valor: 28 },
    { tempo: "Ago", valor: 35 },
    { tempo: "Set", valor: 40 },
    { tempo: "Out", valor: 38 },
    { tempo: "Nov", valor: 45 },
    { tempo: "Dez", valor: -20 }
  ];

function CardGraficoLinha() {
  return (
    <div className="w-full mt-2 bg-bg-secondary rounded-md sm:px-4">
      <div className="flex flex-col lg:flex-row px-2 pt-4 justify-between mb-4 items-center gap-2 w-full">
        <h2 className="text-text text-2xl sombra-azul font-medium">Receita/Despesa Por seção</h2>
        <div className="flex gap-2">
          <p className="text-text sombra-azul text-lg">Despesa/Receita</p>
          <p className="text-text sombra-azul text-lg">Data</p>
        </div>
      </div>
      <GraficoLinha dados={dados}/>
    </div>
  )
}

export default CardGraficoLinha