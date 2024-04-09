
import React, { useState } from 'react'

export const ModalNo = ({ isOpen, onClose, nombreUsuario }) => {
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
      <h2>No se encontro </h2>
      <p>No hay datos</p>
    </div>
  </div>
  )
}