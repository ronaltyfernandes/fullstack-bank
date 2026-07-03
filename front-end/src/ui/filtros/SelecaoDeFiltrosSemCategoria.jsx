import React from 'react';
import FiltroDespesaReceita from './FiltroDespesaReceita';

export default function SelecaoDeFiltrosSemCategoria({
  tipoSelecionado,
  setTipoSelecionado,
  Icone,
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 px-2 lg:px-4 pt-4 mb-4 w-auto">

      {/* Título */}
      <div className="flex items-center gap-2">
        {Icone && (
          <div className="flex items-center justify-center p-2 rounded-xl bg-gray-100">
            <Icone className="w-6 h-6 text-primary-light" />
          </div>
        )}

        <h2 className="text-text text-xl md:text-2xl font-medium">
          Receita/Despesa por seção
        </h2>
      </div>

      {/* Filtro */}
      <div className="w-full lg:w-auto">
        <FiltroDespesaReceita
          tipoSelecionado={tipoSelecionado}
          setTipoSelecionado={setTipoSelecionado}
        />
      </div>

    </div>
  );
}