import React from "react";
import { Tag } from "lucide-react";

function FiltroCategorias({
  categoriaSelecionada,
  setCategoriaSelecionada,
  categorias,
}) {
  return (
    <div className="flex flex-col flex-1 min-w-[260px]">
      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
        Categoria
      </label>

      <div className="relative w-full">
        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          className="
            w-full
            pl-10 pr-4 py-2.5
            bg-white
            border border-gray-200
            rounded-xl
            text-sm font-medium text-gray-700
            shadow-sm
            cursor-pointer
            transition-all duration-200
            hover:border-blue-300
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500/20
            focus:border-blue-500
          "
        >
          <option value="todas">Todas as Categorias</option>

          {categorias.map((cat, index) => (
            <option key={index} value={cat.id || cat}>
              {cat.nome || cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FiltroCategorias;