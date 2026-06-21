import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputsForm from './inputsForm/InputsForm'
import CheckBoxCadastro from '../../ui/CheckBoxCadastro'
import ButtonNavWithIcon from '../../ui/ButtonNavWithIcon'
import { Chrome, LockKeyhole, UserPlus2 } from 'lucide-react'

function FormCadastro() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.password.trim() !== '' &&
    formData.confirmPassword.trim() !== '' &&
    formData.password === formData.confirmPassword &&
    formData.acceptTerms

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <form className='md:w-1/2 h-full mx-auto p-16 shadow-md rounded-s-xl flex flex-col justify-center'>
      <h1 className='text-2xl md:text-4xl font-semibold mb-1 text-text'>Cadastre-se</h1>
      <p className='mb-6 text-sm text-text'>Preencha os dados para criar sua conta</p>

      <InputsForm
        formData={formData}
        onChange={handleChange}
        icon = {<LockKeyhole fontSize="small" />}
      />

      <CheckBoxCadastro
        name="acceptTerms"
        checked={formData.acceptTerms}
        onChange={handleChange}
        label="Eu aceito os Termos de Uso e a Política de Privacidade."
        className="mb-4"
      />

      <ButtonNavWithIcon
        as='button'
        type='submit'
        variant='primary'
        label='Criar Conta'
        className='mb-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md'
        disabled={!isFormValid}
        icon = {<UserPlus2 fontSize="small" />}
      />

      <div className="flex items-center gap-4 text-text/60 text-sm my-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <p className="whitespace-nowrap font-medium">ou</p>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <ButtonNavWithIcon
        as='button'
        variant='outline'
        icon={<Chrome size={18} />}
        label='Entrar com Google'
      />

      <p className='mt-4 text-sm text-center text-text'>Já tem uma conta? 
        <Link
          to="/login"
          className="text-primary hover:underline"
          >
          Acesse aqui
        </Link>
      </p>

    </form>
  )
}

export default FormCadastro