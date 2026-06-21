import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputsForm from './inputsForm/InputsForm'
import CheckBoxCadastro from '../../ui/CheckBoxCadastro'
import { Chrome } from 'lucide-react'

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
    <form className='md:w-1/2 h-full mx-auto p-16 shadow-md rounded-e-xl flex flex-col justify-center'>
      <h1 className='text-2xl md:text-4xl font-semibold mb-1 text-text'>Cadastre-se</h1>
      <p className='mb-6 text-sm text-text'>Preencha os dados para criar sua conta</p>

      <InputsForm
        formData={formData}
        onChange={handleChange}
      />

      <CheckBoxCadastro
        name="acceptTerms"
        checked={formData.acceptTerms}
        onChange={handleChange}
        label="Eu aceito os Termos de Uso e a Política de Privacidade."
        className="mb-4"
      />

      <button
        type="submit"
        disabled={!isFormValid}
        className="
          mb-4
          w-full
          bg-primary
          text-white
          font-medium
          py-3
          rounded-lg
          shadow-md
          hover:shadow-lg
          hover:-translate-y-0.5
          transition-all
          duration-200
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:translate-y-0
          disabled:hover:shadow-md
        "
      >
        Criar Conta
      </button>

      <div className="flex items-center gap-4 text-text/60 text-sm my-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <p className="whitespace-nowrap font-medium">ou</p>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <button
        type="button"
        className="
          w-full
          flex
          items-center
          justify-center
          gap-2
          py-3
          border
          border-gray-300
          rounded-lg
          bg-white
          text-black
          font-medium
          shadow-sm
          hover:shadow-lg
          hover:-translate-y-0.5
          transition-all
          duration-200
        "
      >
        <Chrome size={18} />
        Entrar com Google
      </button>

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