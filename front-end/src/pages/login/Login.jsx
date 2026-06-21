import React from 'react'
import FormLogin from './FormLogin'
import AsideFormLogin from './AsideFormLogin'

function Login() {
  return (
    <div className='overflow-x-auto p-6 h-screen'>
      <div className='mx-auto h-10/12 rounded-xl p-0.5 shadow-md gradient-border-half-left'>
        <div className='h-full rounded-xl overflow-hidden bg-bg-secondary'>
          <div className='w-full flex flex-col md:flex-row h-full'>
            <AsideFormLogin/>
            <FormLogin/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login