import React from 'react';

export const Modal = ({ isOpen, onClose, nombreUsuario, usuarios }) => {
  const handleCloseModal = (event) => {
    if (event.target.classList.contains('modal')) {
      onClose();
    }
  };

  const usuarioEncontrado = usuarios.find(
    (usuario) => `${usuario.first_name} ${usuario.last_name}` === nombreUsuario
  );

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        {usuarioEncontrado ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={usuarioEncontrado.avatar} alt="Avatar" style={{ width: '100px', borderRadius: '50%' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '30px' }}>
              <h2>Bienvenido <span style={{color: '#61c9a8'}}>{usuarioEncontrado.first_name} {usuarioEncontrado.last_name}</span> </h2>
              
            </div>
            <p>Tu Licencia expira en: ....</p>
          </>
        ) : (
          <>
            <h2>No se encontró ningún usuario</h2>
            <p>No hay datos disponibles para este ID</p>
          </>
        )}
      </div>
    </div>
  );
};
