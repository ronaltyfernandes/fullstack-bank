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
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-text/20 bg-secundary px-2 py-2 shadow-sm">
      <button
        type="button"
        onClick={() => onMonthChange?.(-1)}
        aria-label="Mês anterior"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-text/20 bg-secundary text-slate-600 transition-all duration-200 hover:scale-105 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
      >
        <ChevronLeft className="h-3 w-5" />
      </button>

      <div className="flex flex-1 flex-wrap items-center gap-3">
        <DateFilter
          selectedDate={startDate}
          onDateChange={onStartDateChange}
        />

        <div className="hidden h-8 w-px bg-slate-300 md:block " />

        <DateFilter
          selectedDate={endDate}
          onDateChange={onEndDateChange}
        />
      </div>

      <button
        type="button"
        onClick={() => onMonthChange?.(1)}
        aria-label="Próximo mês"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-text/20 bg-secundary text-slate-600 transition-all duration-200 hover:scale-105 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
      >
        <ChevronRight className="h-3 w-5" />
      </button>
    </div>
  );
}