import { useEffect, useState } from "react";
import GraficoBarras from "../graficoBarras/GraficoBarras";
import { ChartColumnBig } from "lucide-react";
import SelecaoDeFiltros from "../../../ui/filtros/SelecaoDeFiltros";
import { getTransactionMonthlyBalance } from "../../../services/api";
import { formataDespesasEntradasEmMeses } from "../../../utils/formataData";

function CardGraficoBarras() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getTransactionMonthlyBalance({ userId: localStorage.getItem('finan_user_id') });
        const formatadosData = formataDespesasEntradasEmMeses(response);
        setDados(formatadosData);
      } catch (error) {
        console.error("Erro ao buscar dados do gráfico:", error);
      }
    }
    init();
  }, []);
  
  return (
     <div className="flex flex-col h-full min-h-[420px] bg-bg-secondary rounded-md p-4">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 px-2 lg:px-4 pt-4 mb-4 w-auto">
        {/* Título */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center p-2 rounded-xl bg-gray-100">
            <ChartColumnBig className="w-6 h-6 text-primary-light" />
          </div>

          <h2 className="text-text text-xl md:text-2xl font-medium">
            Entradas e Saídas Mensais
          </h2>
        </div>
      </div>
      <GraficoBarras data={dados} className="w-full h-[280px] md:h-[250px] lg:h-[220px]" />
    </div>
  )
}

export default CardGraficoBarras