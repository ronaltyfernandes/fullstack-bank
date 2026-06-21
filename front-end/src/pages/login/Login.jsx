import React from 'react'
import FormLogin from './FormLogin'
import AsideForm from './AsideForm'

function Login() {
  return (
    <div className='overflow-x-auto p-6 h-screen'>
      <div className='mx-auto bg-bg-secondary shadow-md border border-text/10 rounded-xl h-10/12'>
        <div className='w-full flex flex-col md:flex-row h-full'>
          <AsideForm/>
          <FormLogin/>
        </div>
      </div>
    </div>
  )
}

export default Login