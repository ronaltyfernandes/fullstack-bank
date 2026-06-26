import Modal from '../../ui/Modais/Modal';
import FormAdicionarCategoria from './FormAdicionarCategoria';

function ModalAdicionarCategoria({ openModal, setOpenModal, handleChange, handleSubmit, formState }) {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)} title="Nova Categoria" maxWidth="max-w-2xl">
      <FormAdicionarCategoria
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setOpenModal={setOpenModal}
      />
    </Modal>
  )
}

export default ModalAdicionarCategoria;