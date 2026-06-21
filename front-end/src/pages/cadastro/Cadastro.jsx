import React from 'react'
import FormCadastro from './FormCadastro';
import AsideFormCadastro from './AsideForm';

function Cadastro() {
  return (    
    <div className='overflow-x-auto p-6 h-screen'>
      <div className='mx-auto bg-bg-secondary shadow-md border border-text/10 rounded-xl h-10/12'>
        <div className='w-full flex flex-col md:flex-row h-full'>
          <FormCadastro/>
          <AsideFormCadastro/>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;