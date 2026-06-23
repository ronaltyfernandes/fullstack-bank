import { Mail, LockKeyhole, Chrome } from 'lucide-react'
import InputForm from '../../ui/InputForm'
import ButtonNavWithIcon from '../../ui/ButtonNavWithIcon'
import { Link } from 'react-router-dom'

function FormLogin() {
  return (
    <form className='w-full md:w-1/2 h-full mx-auto p-8 md:p-16 shadow-md rounded-b-xl md:rounded-e-xl flex flex-col justify-center'>
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
        icon = {<LockKeyhole fontSize="small" />}
      />

      <ButtonNavWithIcon
        as='button'
        type='submit'
        variant='primary'
        label='Acessar Minha Conta'
        className='mb-4'
        icon={<LockKeyhole size={18} />}
      />

      <div className="flex items-center gap-4 text-text text-sm my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="whitespace-nowrap">ou</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <ButtonNavWithIcon
        as='button'
        variant='outline'
        icon={<Chrome size={18} />}
        label='Entrar com Google'
      />

      <p className='mt-4 text-sm text-center text-text'>Não tem uma conta? <Link to='/cadastro' className='text-primary hover:underline'>Cadastre-se</Link></p>
    </form>
  )
}

export default FormLogin