import React from "react";
import Modal from '../../ui/Modais/Modal';
import FormAdicionarCategoria from "./FormAdicionarCategoria";

function ModalEditarCategoria({ openModal, setOpenModal, formState, handleChange, handleSubmit}) {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      title="Editar Categoria"
      maxWidth="max-w-2xl"
    >
      <FormAdicionarCategoria
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitText="Atualizar"
        onCancel={() => setOpenModal(false)}
      />
    </Modal>
  );
}

export default ModalEditarCategoria;