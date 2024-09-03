import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div className="mx-2 flex w-full max-w-[500px] flex-col items-center justify-center rounded bg-white p-6 text-light-color shadow-lg dark:text-dark-color">
        <h2>Success!</h2>
        <p>your message has been sent successfully</p>
        <button
          className="mt-4 rounded bg-blue-500 p-2 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
