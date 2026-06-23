import { Plus } from 'lucide-react'
import React from 'react'

function ButtonAdicionar({setOpenModal}) {
  return (
    <button
      onClick={() => setOpenModal(true)}
      className="
        fixed
        bottom-8
        right-8
        w-16
        h-16
        rounded-full
        bg-primary
        text-white
        shadow-xl
        hover:scale-110
        transition-all
        duration-200
        flex
        items-center
        justify-center
        z-50
      "
    >
      <Plus size={32} />
    </button>
  )
}

export default ButtonAdicionar;