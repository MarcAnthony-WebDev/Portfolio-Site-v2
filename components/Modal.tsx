import React from "react";
import { CheckCircle } from "lucide-react";

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
      <div className="animate-fadeInDown z-[60] mx-2 flex w-full max-w-[500px] flex-col items-center justify-center rounded bg-white dark:bg-gray-800 p-10 text-light-color dark:text-dark-color shadow-lg dark:text-light-color">
        <CheckCircle className="text-green-500 w-12 h-12 mb-3" />
        <h2 className="mb-2 text-xl font-bold text-light-color dark:text-dark-color">Success!</h2>
        <p className="text-center text-lg text-light-color dark:text-dark-color">
          Thank you for reaching out! A confirmation email has been sent to you.
        </p>
        <button
          className="mt-4 w-52 self-center rounded-3xl bg-slate-600 p-2 text-white dark:text-dark-color transition duration-200 hover:bg-slate-500 active:translate-y-1"
          onClick={onClose}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Modal;
