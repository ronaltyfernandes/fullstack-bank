import React from 'react'

export default function Modal({ open, onClose, title, children, maxWidth = 'max-w-2xl' }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={`${maxWidth} w-full bg-bg-secondary rounded-2xl shadow-xl p-6 border border-text/10`}>
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-2xl font-bold text-text">{title}</h2>}
          <button
            onClick={onClose}
            className="text-text/60 hover:text-text transition-colors text-xl"
            type="button"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
