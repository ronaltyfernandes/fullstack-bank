import React from 'react'
import FormCadastro from './FormCadastro';
import AsideFormCadastro from './AsideFormCadastro';

function Cadastro() {
  return (    
    <div className='overflow-x-auto p-6 h-screen'>
      <div className='mx-auto h-10/12 rounded-xl p-0.5 shadow-md gradient-border-half-right'>
        <div className='h-full rounded-xl overflow-hidden bg-bg-secondary'>
          <div className='w-full flex flex-col md:flex-row h-full'>
            <FormCadastro />
            <AsideFormCadastro />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;