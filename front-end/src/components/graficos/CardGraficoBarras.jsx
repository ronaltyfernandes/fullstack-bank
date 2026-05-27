import GraficoBarras from "./GraficoBarras";
//todo : ajustar dados do grafico
const dataPie = [
  { id: 0, value: 10, label: 'jan' },
  { id: 1, value: 15, label: 'fev' },
  { id: 2, value: 20, label: 'mar' },
  { id: 3, value: 20, label: 'abr' },
  { id: 4, value: 25, label: 'mai' },
  { id: 5, value: 30, label: 'jun' },
  { id: 6, value: 35, label: 'jul' },
  { id: 7, value: 40, label: 'ago' },
  { id: 8, value: 45, label: 'set' },
  { id: 9, value: -50, label: 'out' },
  { id: 10, value: 55, label: 'nov' },
  { id: 11, value: 60, label: 'dez' },
];

function CardGraficoBarras() {
  return (
    <div className="flex flex-col h-[340px] bg-bg-secondary items-center justify-between rounded-md">
      <div className="flex flex-col lg:flex-row lg:px-8 px-2 pt-4 justify-between mb-4 items-center gap-2 w-full">
        <h2 className="text-text text-2xl sombra-azul font-medium">Receita/Despesa Por seção</h2>
        <div className="flex gap-2">
          <p className="text-text sombra-azul text-lg">Despesa/Receita</p>
          <p className="text-text sombra-azul text-lg">Data</p>
        </div>
      </div>
      <div className="w-full md:px-4">
        <GraficoBarras data={dataPie} height={250} className="w-full" />
      </div>
    </div>
  )
}

export default CardGraficoBarras