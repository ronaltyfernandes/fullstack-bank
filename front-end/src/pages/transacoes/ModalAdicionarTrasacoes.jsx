import React, { useState } from 'react';
import FormAdicionarTransacao from './FormAdicionarTransacao';
import Modal from '../../ui/Modais/Modal';

function ModalAdicionarTrasacoes({ openModal, setOpenModal, handleChange, handleSubmit, formState }) {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)} title="Nova Transação" maxWidth="max-w-2xl">
      <FormAdicionarTransacao
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setOpenModal={setOpenModal}
      />
    </Modal>
  )
}

export default ModalAdicionarTrasacoes;