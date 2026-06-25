import { TrendingUp } from "lucide-react";
import React from "react";
import SelectInput from "../Inputs/SelectInput";


function FiltroDespesaReceita({
  tipoSelecionado,
  setTipoSelecionado,
}) {
  const options = [
    { value: "todos", label: "Todos os Tipos" },
    { value: "receita", label: "💰 Receita" },
    { value: "despesa", label: "💸 Despesa" },
  ];

  return (
    <div className="flex flex-col flex-1 min-w-0 w-full sm:max-w-[320px]">
      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Tipo de Movimentação</label>

      <div className="relative w-full">
        <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

        <SelectInput
          name="tipo"
          list={options}
          value={tipoSelecionado}
          onChange={(e) => setTipoSelecionado(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default FiltroDespesaReceita;