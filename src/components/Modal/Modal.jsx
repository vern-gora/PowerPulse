import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ imageURL, tags, toggleModal }) {
  const overlayRef = React.useRef();

  const onKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal]
  );

  const overlayClick = useCallback(
    e => {
      if (e.target === overlayRef.current) {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return createPortal(
    <div className={css.overaly} ref={overlayRef} onClick={overlayClick}></div>,
    modalRoot
  );
}

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
