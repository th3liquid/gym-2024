
import React, { useState } from 'react'

export const Modal = ({ isOpen, onClose, nombreUsuario }) => {
  const handleCloseModal = (event) => {
    if (event.target.classList.contains('modal')) {
      onClose();
    }
  };


  if (!isOpen) return null;
  return (
    <div className="modal" onClick={handleCloseModal}>
    <div className="modal-content">
      <span className="close-btn" onClick={onClose}>&times;</span>
      <h2>Bienvenido {nombreUsuario}</h2>
      <p>Tu Licencia expira en: ....</p>
    </div>
  </div>
  )
}

