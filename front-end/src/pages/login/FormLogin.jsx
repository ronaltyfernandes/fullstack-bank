import { Mail, LockKeyhole, Chrome } from 'lucide-react'
import InputForm from '../../ui/Inputs/InputForm'
import ButtonNavWithIcon from '../../ui/Buttons/ButtonNavWithIcon'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../services/api.js' // ajuste o caminho se necessário

function FormLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await login({ email, password })
      console.log(response)
      const token = response.data.token

      localStorage.setItem('finan_login_token', token)
      navigate('/')
    } catch (err) {
      setError('E-mail ou senha inválidos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full md:w-1/2 h-full mx-auto p-8 md:p-16 shadow-md rounded-b-xl md:rounded-e-xl flex flex-col justify-center'
    >
      <h1 className='text-2xl md:text-4xl font-semibold mb-1 text-text'>Acesse sua conta</h1>
      <p className='mb-6 text-sm text-text'>Digite seus dados para continuar</p>

      <InputForm
        label="E-mail"
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
        icon={<Mail fontSize="small" />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputForm
        label="Senha"
        id="password"
        type="password"
        placeholder="Digite sua senha"
        icon={<LockKeyhole fontSize="small" />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <p className='text-red-500 text-sm mb-4'>{error}</p>
      )}

      <ButtonNavWithIcon
        as='button'
        type='submit'
        variant='primary'
        label={loading ? 'Entrando...' : 'Acessar Minha Conta'}
        className='mb-4'
        icon={<LockKeyhole size={18} />}
        disabled={loading}
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