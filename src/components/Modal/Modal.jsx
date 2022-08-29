import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { ModalContent, Backdrop, stylingModalIconBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({children, onClose}) {
  const handleBackBackdropClick = (e) => {

    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  },[onClose])

  return createPortal(
    <Backdrop onClick={handleBackBackdropClick}>
        <ModalContent>
            <IconButton sx={stylingModalIconBtn} onClick={onClose} aria-label="delete">
                <CloseIcon />
            </IconButton>
            {children}
        </ModalContent>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
};
