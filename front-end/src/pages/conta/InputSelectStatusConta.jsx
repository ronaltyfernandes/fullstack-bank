import React from 'react';

function InputSelectStatusConta({ value, onChange }) {
  const isDespesa = value === 'Ativa';

  const toggleStatus = () => {
    onChange({
      target: {
        name: 'status',
        value: isDespesa ? 'Inativa' : 'Ativa',
      },
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-text/80">Status</label>
      
      <div className="flex items-center gap-3 h-[42px]">
        {/* O Interruptor */}
        <button
          type="button"
          onClick={toggleStatus}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
            isDespesa ? 'bg-green-500' : ' bg-red-500'
          }`}
        >
          {/* A Bolinha */}
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              isDespesa ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>

        {/* Texto Dinâmico */}
        <span className={`text-sm font-medium ${isDespesa ? 'text-green-500 font-semibold' : 'text-red-500/60'}`}>
          {value}
        </span>
      </div>
    </div>
  );
}

export default InputSelectStatusConta;