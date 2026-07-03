import React, { useEffect, useState } from 'react'
import InputForm from '../../ui/Inputs/InputForm';
import SelectInput from '../../ui/Inputs/SelectInput';
import StatusPagoPendent from './StatusPagoPendent';
import { getCategories, getBankAccounts } from '../../services/api';

function FormAdicionarTransacao({
  handleSubmit,
  handleChange,
  formState,
  onCancel,
  paymentMethods = ["PIX", "CASH", "DEBITCARD", "CREDITCARD", "TICKET"],
  submitText = "Salvar"
}) {
  const [categories, setCategories] = useState([]);
  const [bankAccounts, setBankAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriaResponse, bankResponse] = await Promise.all([
          getCategories(),
          getBankAccounts(),
        ]);

        const categorias = categoriaResponse.data.items ?? categoriaResponse.data;
        const banks = bankResponse.data.items ?? bankResponse.data;
        
        setCategories(categorias.map((c) => ({ id: c.id, name: c.name })));
        setBankAccounts(banks.map((b) => ({ id: b.id, name: b.name })));
      } catch (error) {
        console.error("Erro ao carregar categorias/contas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
      
      {/* Nome */}
      <div className="col-span-2">
        <InputForm
          label="Nome *"
          id="name"
          name="name"
          placeholder="Ex: Conta de Luz"
          value={formState.name || ""}
          onChange={handleChange}
          required
        />
      </div>

      {/* Status de Pagamento */}
      <StatusPagoPendent 
        onChange={handleChange} 
        value={formState.paymentStatus || "PENDING"}
      />

      {/* Valor */}
      <div>
        <InputForm
          label="Valor (R$) *"
          id="value"
          name="value"
          type="number"
          step="0.01"
          placeholder="0,00"
          value={formState.value || ""}
          onChange={handleChange}
          required
        />
      </div>

      {/* Data */}
      <div>
        <InputForm
          label="Data de Vencimento *"
          id="date"
          name="date"
          type="date"
          value={formState.date || ""}
          onChange={handleChange}
          required
        />
      </div>

      {/* Categoria */}
      <div>
        <SelectInput
          label="Categoria *"
          name="category"
          value={formState.category || ""}
          onChange={handleChange}
          required
          list={categories}
        />
      </div>

      {/* Banco */}
      <div>
        <SelectInput
          label="Conta Bancária *"
          name="bankAccount"
          value={formState.bankAccount || ""}
          onChange={handleChange}
          required
          list={bankAccounts}
        />
      </div>

      {/* Forma de Pagamento */}
      <div>
        <SelectInput
          label="Forma de Pagamento"
          name="paymentMethod"
          value={formState.paymentMethod || ""}
          onChange={handleChange}
          list={paymentMethods}
        />
      </div>

      {/* Descrição */}
      <div className="col-span-2">
        <label className="block text-sm font-medium text-text mb-1">Descrição</label>
        <textarea
          name="description"
          value={formState.description || ""}
          onChange={handleChange}
          placeholder="Fatura mensal de energia..."
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

export default FormAdicionarTransacao;