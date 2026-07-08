import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import GraficoLinha from "./GraficoLinha";
import DateFilter from "../../../ui/filtros/DateFilter";
import { getTransactionMonthlyBalance } from "../../../services/api";
import { formataPatrimonioEmMeses } from "../../../utils/formataData";

export default function CardGraficoPatrimonio() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getTransactionMonthlyBalance({ userId: localStorage.getItem('finan_user_id') });
        const formatadosData = formataPatrimonioEmMeses(response);
        setDados(formatadosData);
      } catch (error) {
        console.error("Erro ao buscar dados do gráfico:", error);
      }
    }
    init();
  }, []);

  return (
    <div className="w-full mt-2 bg-bg-secondary rounded-md px-2 lg:px-4 lg:py-4">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 px-2 lg:px-4 pt-4 mb-4 w-auto">
        {/* Título */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center p-2 rounded-xl bg-gray-100">
            <TrendingUp className="w-6 h-6 text-primary-light" />
          </div>

          <h2 className="text-text text-xl md:text-2xl font-medium">
            Balaço Financeiro Mensal
          </h2>
        </div>
      </div>

      <GraficoLinha dados={dados} xKey="mes" yKey="patrimonio"/>

    </div>
  );
}