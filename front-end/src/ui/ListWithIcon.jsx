import React from 'react'

function ListWithIcon({ icon, text, subText }) {
  return (
    <div className='flex gap-2 items-center'>
      <div className='w-12 h-12 bg-white rounded-md flex items-center justify-center'>
        {icon}
      </div>

      <div className='text-white'>
        <p className='font-medium'>{text}</p>
        <p className='text-sm opacity-80'>{subText}</p>
      </div>
    </div>
  )
}

export default ListWithIcon