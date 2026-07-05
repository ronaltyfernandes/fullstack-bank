const formatarMes = (month) => {
    const [year, monthNumber] = month.split("-").map(Number);
    const data = new Date(Date.UTC(year, monthNumber - 1, 1));

    return data.toLocaleDateString("pt-BR", {
        month: "short",
        timeZone: "UTC",
    });
};

export const formataPatrimonioEmMeses = (response) => response.data.map((item) => ({
    mes: formatarMes(item.month),
    patrimonio: item.accumulatedBalance,
}));

export const formataDespesasEntradasEmMeses = (response) => response.data.map((item) => ({
    mes: formatarMes(item.month),
    expense: item.expense,
    income: item.income,
}));

export const mesAtualEAnterior = (selectedDate) => {
    const [year, month] = (selectedDate || "").split("-").map(Number);
    const baseDate = Number.isNaN(year) || Number.isNaN(month)
        ? new Date()
        : new Date(Date.UTC(year, month - 1, 1));

    const previousMonthStart = new Date(Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth() - 1, 1));
    const currentMonthEnd = new Date(Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth() + 1, 0));

    const formatDate = (date) => {
        const yearValue = date.getUTCFullYear();
        const monthValue = String(date.getUTCMonth() + 1).padStart(2, "0");
        const dayValue = String(date.getUTCDate()).padStart(2, "0");
        return `${yearValue}-${monthValue}-${dayValue}`;
    };

    return [formatDate(previousMonthStart), formatDate(currentMonthEnd)];
}

export function changeMonth({ startDate, endDate, initialDate, direction }) {
  const currentDate = startDate || endDate || initialDate;

  const [year, month] = currentDate.split("-").map(Number);
  const nextDate = new Date(year, month - 1 + direction, 1);

  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${d}`;
  };

  const start = new Date(nextDate.getFullYear(), nextDate.getMonth(), 1);
  const end = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0);

  return {
    startDate: formatDate(start),
    endDate: formatDate(end),
  };
}
