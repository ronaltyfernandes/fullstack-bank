import React from 'react'

function SelectInput({label, name, list = [], value, onChange, placeholder = 'Selecione...', required = false }) {
  return (
    <div>
      {label && <label className="block text-sm font-medium text-text mb-1" htmlFor={name}>{label}</label>}

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        id={name}
        className="w-full py-2 border text-text border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary pl-10 pr-3 bg-bg-secondary"
      >
        {placeholder && <option value="" disabled hidden>{placeholder}</option>}
        {list.map((item, i) => {
          // suporta lista de strings ou objetos { id, nome } / { value, label }
          const val = item?.id ?? item?.value ?? item
          const labelText = item?.name ?? item?.nome ?? item?.label ?? item
          return (
            <option key={i} value={val}>{labelText}</option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectInput