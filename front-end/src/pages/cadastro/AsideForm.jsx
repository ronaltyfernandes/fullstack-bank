import React from 'react'
import ListWithIcon from '../../ui/ListWithIcon'
import { ChartNoAxesCombinedIcon, Landmark, Tags } from 'lucide-react'

function AsideFormCadastro() {
  return(
    <aside className='bg-primary w-1/2 rounded-r-xl p-16 flex flex-col items-center justify-center gap-6 '>
      <div className='w-full'>
        <div className='rounded-full bg-white h-30 w-30'></div>
        <h2 className='text-4xl font-extrabold text-white'>Crie se Cadastro</h2>
        <p className='text-white font-semibold'>É rápido, fácil e gratuito.</p>
        <p className='text-white font-semibold'>Comece a organizar suas finanças.</p>        
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <ListWithIcon icon={<ChartNoAxesCombinedIcon />} text='Text 1' subText='Subtext 1' />
        <ListWithIcon icon={<Landmark />} text='Text 2' subText='Subtext 2' />
        <ListWithIcon icon={<Tags />} text='Text 3' subText='Subtext 3' />
      </div>
  
      <div className='w-full'>
        <button className='border border-white text-white py-2 rounded-md hover:bg-primary-dark transition w-full justify-center'>Entrar em minha Conta</button>
        <p className='text-white text-sm text-center'>Rápido, fácil e gratuito.</p>
      </div>
    </aside>
  )
}

export default AsideFormCadastro