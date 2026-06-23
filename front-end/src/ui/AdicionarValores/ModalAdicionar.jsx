import React, { useState } from 'react';
import FormAdicionarTransacao from './FormAdicionarTransacao';
import Modal from '../Modal';

function ModalAdicionar({ openModal, setOpenModal, handleChange, handleSubmit, initialFormState }) {
  const [formData, setFormData] = useState(initialFormState);

  // Manipulador genérico para atualizar os inputs
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)} title="Nova Transação" maxWidth="max-w-2xl">
      <FormAdicionarTransacao
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        initialFormState={initialFormState}
        setFormData={setFormData}
        setOpenModal={setOpenModal}
      />
    </Modal>
  )
}

export default ModalAdicionar;