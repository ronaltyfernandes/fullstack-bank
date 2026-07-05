import React, { useEffect, useState } from 'react'
import InputForm from '../../ui/Inputs/InputForm';
import SelectInput from '../../ui/Inputs/SelectInput';
import StatusPagoPendent from './StatusPagoPendent';
import { getCategories, getBankAccounts } from '../../services/api';

function getToday() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0]; // yyyy-mm-dd
}

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
  const [loadingOptions, setLoadingOptions] = useState(true);
  const [loadError, setLoadError] = useState(false);

  // Preenche valores padrão apenas se ainda não existirem (não sobrescreve edição)
  useEffect(() => {
    if (!formState.date) {
      handleChange({ target: { name: "date", value: getToday() } });
    }
    if (!formState.paymentStatus) {
      handleChange({ target: { name: "paymentStatus", value: "PAID" } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingOptions(true);
      setLoadError(false);
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
        setLoadError(true);
      } finally {
        setLoadingOptions(false);
      }
    };

    fetchData();
  }, []);

  // Assim que categorias carregarem, seleciona a primeira como padrão (se nada estiver selecionado)
  useEffect(() => {
    if (categories.length > 0 && !formState.category) {
      handleChange({ target: { name: "category", value: categories[0].id } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  // Assim que contas bancárias carregarem, seleciona a primeira como padrão (se nada estiver selecionado)
  useEffect(() => {
    if (bankAccounts.length > 0 && !formState.bankAccount) {
      handleChange({ target: { name: "bankAccount", value: bankAccounts[0].id } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankAccounts]);

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
          autoFocus
        />
      </div>

      {/* Status de Pagamento */}
      <StatusPagoPendent
        onChange={handleChange}
        value={formState.paymentStatus || "PAID"}
      />

      {/* Valor */}
      <div>
        <InputForm
          label="Valor (R$) *"
          id="value"
          name="value"
          type="number"
          step="0.01"
          min="0"
          inputMode="decimal"
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
          value={formState.date || getToday()}
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
          disabled={loadingOptions}
          placeholder={loadingOptions ? "Carregando..." : "Selecione uma categoria"}
        />
        {loadError && (
          <p className="text-xs text-red-500 mt-1">
            Não foi possível carregar as categorias.
          </p>
        )}
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
          disabled={loadingOptions}
          placeholder={loadingOptions ? "Carregando..." : "Selecione uma conta"}
        />
        {loadError && (
          <p className="text-xs text-red-500 mt-1">
            Não foi possível carregar as contas bancárias.
          </p>
        )}
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
          disabled={loadingOptions}
          className="px-5 py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingOptions ? "Carregando..." : submitText}
        </button>
      </div>
    </form>
  )
}

export default FormAdicionarTransacao;