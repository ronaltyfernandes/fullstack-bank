import React from "react";
import Modal from '../../ui/Modais/Modal';
import FormAdicionarConta from "./FormAdicionarConta";

function ModalEditarConta({ openModal, setOpenModal, formState, handleChange, handleSubmit}) {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      title="Editar Conta"
      maxWidth="max-w-2xl"
    >
      <FormAdicionarConta
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitText="Atualizar"
        onCancel={() => setOpenModal(false)}
      />
    </Modal>
  );
}

export default ModalEditarConta;