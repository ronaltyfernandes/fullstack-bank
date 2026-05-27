import GraficoDunut from "./GraficoDunut";

const dataPie = [
  { id: 0, value: 10, label: 'gasto A' },
  { id: 1, value: 15, label: 'gasto B' },
  { id: 2, value: 20, label: 'gasto C' },
  { id: 3, value: 20, label: 'gasto D' },
];

function CardGraficoDunut() {
  return (
    <div className="flex flex-col h-[340px] bg-bg-secondary items-center justify-between rounded-md">
      <div className="flex flex-col lg:flex-row lg:px-8 px-2 pt-4 justify-between mb-4 items-center gap-2 w-full">
        <h2 className="text-text text-2xl sombra-azul font-medium">Receita/Despesa Por seção</h2>
        <div className="flex gap-2">
          <p className="text-text sombra-azul text-lg">Despesa/Receita</p>
          <p className="text-text sombra-azul text-lg">Data</p>
        </div>
      </div>
      <div className="w-full px-4 md:px-8">
        <GraficoDunut data={dataPie} width={200} height={200} className="w-full mb-8" />
      </div>
    </div>
  )
}

export default CardGraficoDunut;