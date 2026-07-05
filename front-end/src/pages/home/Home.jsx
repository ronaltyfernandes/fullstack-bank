import { useMemo, useState } from "react";
import DateRangeFilter from "../../ui/filtros/DateRangeFilter";
import CardsSalarios from "./CardsSalarios";
import Graficos from "./Graficos";
import getCurrentMonthRange from "../../utils/getCurrentMonthRange";
import { changeMonth, mesAtualEAnterior } from "../../utils/formataData";

export function Home() {
  const { startDate: initialStartDate, endDate: initialEndDate } = getCurrentMonthRange();
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [mesAtual, mesAnterior] = useMemo(
    () => mesAtualEAnterior(startDate),
    [startDate]
  );

  const handleMonthChange = (direction) => {
    const { startDate: newStartDate, endDate: newEndDate } = changeMonth({
      startDate,
      endDate,
      initialDate: initialStartDate,
      direction,
    });

    setStartDate(newStartDate);
    setEndDate(newEndDate);
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
      <CardsSalarios startDate={mesAtual} endDate={mesAnterior} />
      <Graficos startDate={startDate} endDate={endDate} />
    </div>
  );
}
