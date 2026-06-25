import Modal from "./Modal";

function ModalDeletar({ isOpen, onClose, onConfirm, itemName, entityLabel = "item" }) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title={`Excluir ${entityLabel}`}
      maxWidth="max-w-sm"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" /><path d="M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </div>
          <p className="text-sm text-text/70 leading-relaxed">
            Tem certeza que deseja excluir{" "}
            {itemName && (
              <span className="font-semibold text-text">{itemName}</span>
            )}
            ? Essa ação não pode ser desfeita.
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border border-text/20 text-text/70 hover:bg-text/5 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={() => { onConfirm(); onClose(); }}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-red-100 border border-red-300 text-red-700 hover:bg-red-200 transition-colors"
          >
            Excluir
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDeletar;