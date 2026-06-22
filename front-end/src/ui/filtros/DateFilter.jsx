import { CalendarDays } from 'lucide-react';

export default function DateFilter({ selectedDate, onDateChange }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Container do Input */}
      <div className="relative flex items-center max-w-xs">
        <CalendarDays className="absolute left-3 text-blue-500 w-5 h-5 pointer-events-none z-10" />
        
        {/* Input com classes adicionais para esconder o ícone nativo */}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer
          [&::-webkit-calendar-picker-indicator]:absolute 
          [&::-webkit-calendar-picker-indicator]:left-0 
          [&::-webkit-calendar-picker-indicator]:w-full 
          [&::-webkit-calendar-picker-indicator]:opacity-0"
        />
      </div>
    </div>
  );
}