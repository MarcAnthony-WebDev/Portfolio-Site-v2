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
      <div className="z-[60] mx-2 flex w-full max-w-[500px] flex-col items-center justify-center rounded bg-white p-10 text-light-color shadow-lg dark:text-light-color">
        <h2 className="mb-2 text-xl font-bold">Success!</h2>
        <p className="text-center text-lg">
          your message has been sent successfully, thank you for reaching out!
        </p>
        <button
          className="mt-4 w-52 self-center rounded-3xl bg-slate-600 p-2 text-white transition duration-200 hover:bg-slate-500 active:translate-y-1"
          onClick={onClose}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Modal;
