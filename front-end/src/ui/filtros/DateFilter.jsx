import { CalendarDays } from "lucide-react";

export default function DateFilter({
  selectedDate,
  onDateChange,
  label,
}) {
  return (
    <div className="w-full lg:w-auto">
      {label && (
        <label className="block mb-1 text-sm font-medium text-text/60">
          {label}
        </label>
      )}

      <div className="relative w-full">
        <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500 pointer-events-none" />

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="
            w-full
            lg:w-52
            pl-10
            py-2
            border
            border-gray-300
            rounded-md
            text-text
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            [&::-webkit-calendar-picker-indicator]:absolute
            [&::-webkit-calendar-picker-indicator]:left-0
            [&::-webkit-calendar-picker-indicator]:w-full
            [&::-webkit-calendar-picker-indicator]:opacity-0
          "
        />
      </div>
    </div>
  );
}