import { useState } from "react";
import DateRangeFilter from "../../ui/filtros/DateRangeFilter";
import CardsSalarios from "./CardsSalarios";
import Graficos from "./Graficos";
import getCurrentMonthRange from "../../utils/getCurrentMonthRange";

export function Home() {
  const { startDate: initialStartDate, endDate: initialEndDate } = getCurrentMonthRange();
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const handleMonthChange = (direction) => {
    const currentDate = startDate || endDate || initialStartDate;
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

    setStartDate(formatDate(start));
    setEndDate(formatDate(end));
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4">
        <h1 className="text-text text-3xl md:text-4xl font-bold">Gráficos</h1>

        <div className="w-full md:w-auto">
          <DateRangeFilter
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onMonthChange={handleMonthChange}
          />
        </div>
      </div>
      <CardsSalarios />
      <Graficos startDate={startDate} endDate={endDate} />
    </div>
  );
}
