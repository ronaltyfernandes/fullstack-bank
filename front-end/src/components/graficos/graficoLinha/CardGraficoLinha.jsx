import { useState } from "react";
import SelecaoDeFiltros from "../../../ui/filtros/SelecaoDeFiltros";
import GraficoLinha from "./GraficoLinha";
import { ChartArea } from "lucide-react";

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

const listaCategoriasDaApi = ['Alimentação', 'Transporte', 'Salário', 'Lazer'];

function CardGraficoLinha() {
  const [categoria, setCategoria] = useState('todas');
  const [tipo, setTipo] = useState('todos');

  return (
    <div className="w-full mt-2 bg-bg-secondary rounded-md sm:px-4">
      <div className="flex flex-col lg:flex-row px-2 pt-4 justify-between mb-4 items-center gap-2 w-full">
        <SelecaoDeFiltros
          categorias={listaCategoriasDaApi}
          categoriaSelecionada={categoria}
          setCategoriaSelecionada={setCategoria}
          tipoSelecionado={tipo}
          setTipoSelecionado={setTipo}
          Icone={ChartArea}
        />
      </div>
      <GraficoLinha dados={dados}/>
    </div>
  )
}

export default CardGraficoLinha