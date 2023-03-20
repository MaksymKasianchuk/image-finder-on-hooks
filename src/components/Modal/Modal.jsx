import { useEffect } from 'react'
import { createPortal } from 'react-dom';
import { ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
  
  useEffect(()=> {
    const handleKeyDown = (event) => {
      if(event.key === 'Escape'){
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if(e.currentTarget === e.target){
      closeModal();
    }
  };

  return createPortal(
    <ModalStyled onClick={handleBackdropClick}>
        <div className='modal-content'>{children}</div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;