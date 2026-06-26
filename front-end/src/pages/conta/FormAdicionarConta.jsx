import React from 'react'
import InputForm from '../../ui/Inputs/InputForm';
import SelectInput from '../../ui/Inputs/SelectInput';
import InputSelectStatusConta from './InputSelectStatusConta';

function FormAdicionarConta({
  handleSubmit,
  handleChange,
  formState,
  onCancel,
  submitText = "Salvar"
}) {
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
      {/* Nome */}
      <div className="col-span-2">
        <InputForm
          label="Nome *"
          id="name"
          name="name"
          placeholder="Ex: Aluguel"
          value={formState.name || ""}
          onChange={handleChange}
          required
        />
      </div>

      {/* STATUS */}
      <InputSelectStatusConta onChange={handleChange} value={formState.status}/>


      {/* Descrição */}
      <div className="col-span-2">
        <label className="block text-sm font-medium text-text mb-1">Descrição</label>
        <textarea
          name="description"
          value={formState.description || ""}
          onChange={handleChange}
          placeholder="Gastos com ..."
          className="w-full py-2 border text-text border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary pl-3 pr-3 min-h-20 max-h-[140px] bg-transparent"
        />
      </div>

      {/* Botões de Ação */}
      <div className="col-span-2 flex justify-end gap-1 mt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 rounded-lg border border-text/20 text-text hover:bg-text/5 transition-colors"
          >
            Cancelar
          </button>
        )}

        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}

export default FormAdicionarConta;