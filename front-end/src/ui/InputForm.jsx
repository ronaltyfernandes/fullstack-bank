import React, { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'

function InputForm({
  label,
  id,
  type = 'text',
  placeholder = '',
  icon,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'

  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={id}
          className='block text-sm font-medium text-text mb-1'
        >
          {label}
        </label>
      )}

      <div className='relative'>
        {icon && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2 text-text/60'>
            {icon}
          </div>
        )}

        <input
          id={id}
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          className={`w-full py-2 border text-text   border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            icon ? 'pl-10' : 'pl-3'
          } ${isPassword ? 'pr-10' : 'pr-3'}`}
          {...props}
        />

        {isPassword && (
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-text/60'
          >
            {showPassword ? (
              <EyeClosed fontSize='small' />
            ) : (
              <Eye fontSize='small' />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default InputForm