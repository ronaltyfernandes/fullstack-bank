import { Pizza } from "lucide-react";
import GraficoDunut from "./GraficoDunut";
import { useState, useEffect, useMemo } from "react";
import { getTransactionTotalsByCategory } from "../../../services/api";
import SelecaoDeFiltrosSemCategoria from "../../../ui/filtros/SelecaoDeFiltrosSemCategoria";
import DateFilter from "../../../ui/filtros/DateFilter";

function CardGraficoDunut() {
  const [tipo, setTipo] = useState('todos');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dataPie, setDataPie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const params = {};

        if (tipo !== 'todos')  params.incomeExpense = tipo; 
        if (startDate)  params.startDate = startDate;
        if (endDate) params.endDate = endDate;

        setLoading(true);
        const response = await getTransactionTotalsByCategory(params);

        setDataPie(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    init(); 

  }, [tipo, startDate, endDate]);

  //  Deriva a lista de categorias a partir dos próprios dados do gráfico
  const createListaCategorias = useMemo(
    () => dataPie.map((item) => ({ id: item.id, nome: item.label })),
    [dataPie]
  );

  return (
    <div className="flex flex-col min-h-[420px] lg:min-h-[380px] bg-bg-secondary items-center justify-between rounded-md p-3 md:p-4">
      <div className="lex flex-col lg:flex-row lg:px-0 px-0 pt-2 justify-between mb-4 items-start lg:items-center gap-4 w-full">
        <SelecaoDeFiltrosSemCategoria
          categorias={createListaCategorias}
          tipoSelecionado={tipo}
          setTipoSelecionado={setTipo}
          Icone={Pizza}
        />

        <div className="flex-col md:flex items-center gap-1 w-full lg:flex-row lg:justify-start px-2">
          <DateFilter onDateChange={(e) => setStartDate(e.target.value)} selectedDate={startDate} key="start-date" label="Data Inicial"/>
          <DateFilter onDateChange={(e) => setEndDate(e.target.value)} selectedDate={endDate} key="end-date" label="Data Final"/>
        </div>
      </div>

      <div className="w-full px-4 md:px-8">
        {loading ? (
          <p className="text-center text-sm">Carregando...</p>
        ) : dataPie.length === 0 ? (
          <p className="text-center text-sm">Nenhum dado encontrado</p>
        ) : (
          <GraficoDunut data={dataPie} width={200} height={200} className="w-full mb-8" />
        )}
      </div>
    </div>
  );
}

export default CardGraficoDunut;