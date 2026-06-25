import { Pizza } from "lucide-react";
import GraficoDunut from "./GraficoDunut";
import { useState } from "react";
import SelecaoDeFiltros from "../../../ui/filtros/SelecaoDeFiltros";

const dataPie = [
  { id: 0, value: 10, label: 'gasto A' },
  { id: 1, value: 15, label: 'gasto B' },
  { id: 2, value: 20, label: 'gasto C' },
  { id: 3, value: 20, label: 'gasto D' },
];

const listaCategoriasDaApi = ['Alimentação', 'Transporte', 'Salário', 'Lazer'];


function CardGraficoDunut() {
  const [categoria, setCategoria] = useState('todas');
  const [tipo, setTipo] = useState('todos');
  
  return (
   <div className="flex flex-col min-h-[420px] lg:min-h-[380px] bg-bg-secondary items-center justify-between rounded-md p-3 md:p-4">
      <div className="flex flex-col lg:flex-row lg:px-8 px-2 pt-4 justify-between mb-4 items-center gap-2 w-full">
        <SelecaoDeFiltros
          categorias={listaCategoriasDaApi}
          categoriaSelecionada={categoria}
          setCategoriaSelecionada={setCategoria}
          tipoSelecionado={tipo}
          setTipoSelecionado={setTipo}
          Icone={Pizza}
        />
      </div>
      <div className="w-full px-4 md:px-8">
        <GraficoDunut data={dataPie} width={200} height={200} className="w-full mb-8" />
      </div>
    </div>
  )
}

export default CardGraficoDunut;