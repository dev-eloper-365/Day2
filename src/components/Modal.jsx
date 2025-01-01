import React from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="h-screen w-screen fixed top-0 left-0 z-40 bg-black opacity-50" onClick={onClose} />
          <div className="m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl cursor-pointer" />
            </div>
            {children}
          </div>
        </>
      )}
    </>,
    document.getElementById('modal-root')
  );
}

export default Modal;