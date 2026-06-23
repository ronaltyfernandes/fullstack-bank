import React from "react";
import { Tag } from "lucide-react";
import SelectInput from "../Inputs/SelectInput";

function FiltroCategorias({
  categoriaSelecionada,
  setCategoriaSelecionada,
  categorias,
}) {
  return (
    <div className="flex flex-col flex-1 min-w-0 w-full sm:max-w-[320px]">
      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Categoria</label>

      <div className="relative w-full gap-10">
        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

        <SelectInput
          name="categoria"
          list={categorias}
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default FiltroCategorias;
