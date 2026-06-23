import React from 'react'
import { Link } from 'react-router-dom'

function ButtonNavWithIcon({
  as = 'link',
  to = '/',
  href,
  type = 'button',
  icon,
  label,
  helperText,
  variant = 'primary',
  className = '',
  ...props
}) {
  const variantStyles = {
    primary: 'border border-white bg-primary text-white',
    secondary: 'border border-white bg-white text-primary',
    outline: 'border border-text bg-transparent text-text',
    ghost: 'bg-transparent text-text border-none',
    danger: 'border border-red-500 bg-transparent text-red-500',
  }

  const classes = `w-full flex items-center justify-center gap-2 py-3 rounded-lg shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${variantStyles[variant] ?? variantStyles.primary} ${className}`

  const content = (<>{icon}{label}</>)

  return (
    <div className='w-full'>
      {as === 'button' ? (
        <button type={type} className={classes} {...props}>
          {content}
        </button>
      ) : as === 'a' ? (
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      ) : (
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      )}

      {helperText && (
        <p className='text-white text-sm text-center mt-4'>{helperText}</p>
      )}
    </div>
  )
}

export default ButtonNavWithIcon