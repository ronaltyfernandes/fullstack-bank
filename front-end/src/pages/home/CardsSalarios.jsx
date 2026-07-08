import { useEffect, useState } from "react";
import CardSaldo from "../../components/graficos/CardSaldo/CardSaldo";
import { getTransactionMonthlyBalance } from "../../services/api";

function CardsSalarios({ startDate, endDate }) {
  const [dados, setDados] = useState([]);

  const formatCurrency = (value) =>
    `R$ ${Number(value ?? 0).toFixed(2).replace(".", ",")}`;

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getTransactionMonthlyBalance({
          userId: localStorage.getItem("finan_user_id"),
          startDate,
          endDate,
        });

        const apiData = response.data || [];

        const normalizedData = [
          apiData.find((item) => item.month === endDate.slice(0, 7)) || {
            month: endDate.slice(0, 7),
            balance: 0,
            income: 0,
            expense: 0,
          },

          apiData.find((item) => item.month === startDate.slice(0, 7)) || {
            month: startDate.slice(0, 7),
            balance: 0,
            income: 0,
            expense: 0,
          },
        ];

        setDados(normalizedData);
      } catch (error) {
        console.error("Erro ao buscar dados do gráfico:", error);
      }
    };

    init();
  }, [startDate, endDate]);

  const previousMonth = dados[1] || {};
  const currentMonth = dados[0] || {};

  return (
    <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-2">
      <CardSaldo
        variant="saldo"
        nome="Balanço"
        saldo={formatCurrency(currentMonth.balance)}
        valorAnterior={formatCurrency(previousMonth.balance)}
      />

      <CardSaldo
        variant="receitas"
        nome="Receitas"
        saldo={formatCurrency(currentMonth.income)}
        valorAnterior={formatCurrency(previousMonth.income)}
      />

      <div className="md:col-span-2 lg:col-span-1">
        <CardSaldo
          variant="despesas"
          nome="Despesas"
          saldo={formatCurrency(currentMonth.expense)}
          valorAnterior={formatCurrency(previousMonth.expense)}
        />
      </div>
    </div>
  );
}

export default CardsSalarios;