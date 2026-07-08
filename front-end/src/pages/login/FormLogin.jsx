import { Mail, LockKeyhole, Chrome, Eye } from 'lucide-react'
import InputForm from '../../ui/Inputs/InputForm'
import ButtonNavWithIcon from '../../ui/Buttons/ButtonNavWithIcon'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../services/api.js'

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
      await login({ email, password })
      navigate('/')
    } catch (error) {
      setError('E-mail ou senha inválidos.')
    } finally {
      setLoading(false)
    }
  }

  const fillDemoAccount = () => {
    setEmail('demo@financas.com')
    setPassword('123456')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 h-full mx-auto p-8 md:p-16 shadow-md rounded-b-xl md:rounded-e-xl flex flex-col justify-center"
    >
      <h1 className="text-2xl md:text-4xl font-semibold mb-1 text-text">
        Acesse sua conta
      </h1>

      <p className="mb-4 text-sm text-text">
        Digite seus dados para continuar
      </p>

      <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800 p-4">
        <div className="flex items-start gap-3">
          <Eye
            size={20}
            className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0"
          />

          <div className="flex-1">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300">
              Conta para Demonstração
            </h3>

            <p className="text-sm text-text mt-1">
              Este projeto faz parte do meu portfólio. Utilize a conta abaixo
              para explorar as funcionalidades sem precisar criar um cadastro.
            </p>

            <div className="mt-3 rounded-lg border border-blue-100 dark:border-blue-900 bg-white/70 dark:bg-slate-900/40 p-3 space-y-1">
              <p className="text-sm text-text">
                <strong>E-mail:</strong> demo@financas.com
              </p>

              <p className="text-sm text-text">
                <strong>Senha:</strong> 123456
              </p>
            </div>

            <button
              type="button"
              onClick={fillDemoAccount}
              className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Preencher dados de demonstração
            </button>
          </div>
        </div>
      </div>

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
        <p className="text-red-500 text-sm mb-4">
          {error}
        </p>
      )}

      <ButtonNavWithIcon
        as="button"
        type="submit"
        variant="primary"
        label={loading ? 'Entrando...' : 'Acessar Minha Conta'}
        className="mb-4"
        icon={<LockKeyhole size={18} />}
        disabled={loading}
      />

      <div className="flex items-center gap-4 text-text text-sm my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="whitespace-nowrap">ou</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <ButtonNavWithIcon
        as="button"
        variant="outline"
        icon={<Chrome size={18} />}
        label="Entrar com Google"
      />

      <p className="mt-4 text-sm text-center text-text">
        Não tem uma conta?{' '}
        <Link
          to="/cadastro"
          className="text-primary hover:underline"
        >
          Cadastre-se
        </Link>
      </p>
    </form>
  )
}

export default FormLogin;