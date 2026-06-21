import React from 'react'
import { Mail, LockKeyhole, User, Check } from 'lucide-react'
import InputForm from '../../../ui/InputForm'

function InputsForm({ formData, onChange }) {
  const passwordsDontMatch =
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword

  return (
    <>
      <InputForm
        label="Nome Completo"
        id="name"
        name="name"
        value={formData.name}
        onChange={onChange}
        type="text"
        placeholder="Digite seu nome completo"
      />

      <InputForm
        label="E-mail"
        id="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        type="email"
        placeholder="Digite seu e-mail"
      />

      <InputForm
        label="Senha"
        id="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        type="password"
        placeholder="Digite sua senha"
      />

      <InputForm
        label="Confirmar Senha"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
        type="password"
        placeholder="Digite sua senha novamente"
      />

      {passwordsDontMatch && (
        <p className="mt-1 mb-4 text-sm text-red-500">
          As senhas não coincidem.
        </p>
      )}
    </>
  )
}

export default InputsForm