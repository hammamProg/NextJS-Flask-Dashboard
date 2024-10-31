import React from "react";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold">Error</h2>
        <p className="mt-2">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
