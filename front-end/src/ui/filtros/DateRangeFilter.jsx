import { ChevronLeft, ChevronRight } from "lucide-react";
import DateFilter from "./DateFilter";

export default function DateRangeFilter({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onMonthChange,
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-end">
      <button
        type="button"
        onClick={() => onMonthChange?.(-1)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-100"
        aria-label="Mês anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex flex-row gap-2 flex-wrap justify-end">
        <DateFilter label="De:" onDateChange={onStartDateChange} selectedDate={startDate} />
        <DateFilter label="Até:" onDateChange={onEndDateChange} selectedDate={endDate} />
      </div>

      <button
        type="button"
        onClick={() => onMonthChange?.(1)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-100"
        aria-label="Próximo mês"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
