import { useState } from "react";
import GraficoBarras from "../graficoBarras/GraficoBarras";
import { ChartColumnBig } from "lucide-react";
import SelecaoDeFiltros from "../../../ui/filtros/SelecaoDeFiltros";

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

const listaCategoriasDaApi = ['Alimentação', 'Transporte', 'Salário', 'Lazer'];

function CardGraficoBarras() {
  const [categoria, setCategoria] = useState('todas');
  const [tipo, setTipo] = useState('todos');

  return (
    <div className="flex flex-col min-h-[420px] lg:min-h-[380px] bg-bg-secondary items-center justify-between rounded-md p-3 md:p-4">
      <div className="flex flex-col lg:flex-row lg:px-0 px-0 pt-2 justify-between mb-4 items-start lg:items-center gap-4 w-full">
        <SelecaoDeFiltros
          categorias={listaCategoriasDaApi}
          categoriaSelecionada={categoria}
          setCategoriaSelecionada={setCategoria}
          tipoSelecionado={tipo}
          setTipoSelecionado={setTipo}
          Icone={ChartColumnBig}
        />
      </div>
      <div className="w-full flex-1 md:px-4">
        <GraficoBarras data={dataPie} height={220} className="w-full h-[280px] md:h-[250px] lg:h-[220px]" />
      </div>
    </div>
  )
}

export default CardGraficoBarras