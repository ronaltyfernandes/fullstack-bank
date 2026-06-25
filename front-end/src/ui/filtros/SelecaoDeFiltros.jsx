import React from 'react';
import FiltroDespesaReceita from './FiltroDespesaReceita';
import FiltroCategorias from './FiltroCategorias';

export default function SelecaoDeFiltros({ 
  categorias, 
  categoriaSelecionada, 
  setCategoriaSelecionada, 
  tipoSelecionado, 
  setTipoSelecionado,
  Icone
}) {
  return (
    <div className="flex flex-wrap lg:px-4 px-2 pt-4 justify-between mb-4 items-start lg:items-center gap-4 w-full">
      
      {/* Título com o Ícone à esquerda */}
      <div className="flex flex-1 min-w-0 items-center gap-2">
        {Icone && (
          <div className="flex items-center justify-center p-2 rounded-xl bg-gray-100">
            <Icone className="w-6 h-6 text-primary-light" />
          </div>
        )}
        <h2 className="text-text md:text-2xl text-xl font-medium truncate">Receita/Despesa Por seção</h2>
      </div>
      
      {/* Container dos Filtros */}
      <div className="flex flex-col md:flex-row flex-wrap items-stretch sm:items-center gap-2 w-full lg:w-auto justify-end">
        <FiltroCategorias 
          categoriaSelecionada={categoriaSelecionada} 
          setCategoriaSelecionada={setCategoriaSelecionada} 
          categorias={categorias}
        />
        <FiltroDespesaReceita 
          tipoSelecionado={tipoSelecionado} 
          setTipoSelecionado={setTipoSelecionado} 
        />
      </div>
    </div>
  );
}