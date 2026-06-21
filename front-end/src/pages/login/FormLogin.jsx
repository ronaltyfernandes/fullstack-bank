import { Mail, LockKeyhole } from 'lucide-react'
import InputForm from '../../ui/InputForm'

function FormLogin() {
  return (
    <form className='md:w-1/2 h-full mx-auto p-16 shadow-md rounded-e-xl flex flex-col justify-center'>
      <h1 className='text-2xl md:text-4xl font-semibold mb-1 text-text'>Acesse sua conta</h1>
      <p className='mb-6 text-sm text-text'>Digite seus dados para continuar</p>

      <InputForm
        label="E-mail"
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
        icon={<Mail fontSize="small" />}
      />

      <InputForm
        label="Senha"
        id="password"
        type="password"
        placeholder="Digite sua senha"
        icon = { <LockKeyhole fontSize="small" />}
      />

      <button className='mb-4 bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition'>Acessar Minha Conta</button>

      <div className="flex items-center gap-4 text-text text-sm my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="whitespace-nowrap">ou</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <button className='bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition'>Entrar com Google</button>
      <p className='mt-4 text-sm text-center text-text'>Não tem uma conta? <a href='/cadastro' className='text-primary hover:underline'>Cadastre-se</a></p>
    </form>
  )
}

export default FormLogin