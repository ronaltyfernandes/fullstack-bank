import Modal from '../../ui/Modais/Modal';
import FormAdicionarConta from './FormAdicionarConta';

function ModalAdicionarConta({ openModal, setOpenModal, handleChange, handleSubmit, formState }) {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)} title="Nova Conta" maxWidth="max-w-2xl">
      <FormAdicionarConta
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setOpenModal={setOpenModal}
      />
    </Modal>
  )
}

export default ModalAdicionarConta;