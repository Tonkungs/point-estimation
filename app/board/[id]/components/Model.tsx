// components/Modal.tsx
import React, { FC, useEffect, useState } from 'react';
import { EbgColor } from '../interface';

interface ModalProps {
  title: string
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
  color: EbgColor;
  content: string
}

const Modal: FC<ModalProps> = ({ title, isOpen, onClose, onSubmit, color, content }) => {
  const [textValue, setTextValue] = useState(content);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(textValue);
    onClose();
  };

  const colorVariantsBG: { [key: string]: string } = {
    green: 'bg-green-100 border-green-200',
    red: 'bg-red-100 border-red-200',
    purple: 'bg-purple-100 border-purple-200',
  }



  const colorVariantsText: { [key: string]: string } = {
    green: 'text-green-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className={`relative w-full max-w-lg p-6 mx-auto ${colorVariantsBG[color]} rounded-md shadow-lg`}>
        <button
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className={`text-xl font-bold` + ` ${colorVariantsText[color]}`}>{title}</h2>
        <textarea
          className="w-full p-2 mt-4 border rounded-md"
          rows={5}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-md hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
