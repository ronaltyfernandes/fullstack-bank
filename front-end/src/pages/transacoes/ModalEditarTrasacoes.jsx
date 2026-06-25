import React from "react";
import Modal from '../../ui/Modais/Modal';
import FormAdicionarTransacao from "./FormAdicionarTransacao";

function ModalEditarTrasacoes({ openModal, setOpenModal, formState, handleChange, handleSubmit}) {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      title="Editar Transação"
      maxWidth="max-w-2xl"
    >
      <FormAdicionarTransacao
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitText="Atualizar"
        onCancel={() => setOpenModal(false)}
      />
    </Modal>
  );
}

export default ModalEditarTrasacoes;