import React from 'react'
import { Check } from 'lucide-react'

function CheckBoxCadastro({
  name,
  checked,
  onChange,
  label,
  className = '',
}) {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer ${className}`}
    >
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />

        <div className="w-5 h-5 border border-text rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
          {checked && (
            <Check
              size={14}
              className="text-white"
            />
          )}
        </div>
      </div>

      <span className="text-sm text-text">
        {label}
      </span>
    </label>
  )
}

export default CheckBoxCadastro