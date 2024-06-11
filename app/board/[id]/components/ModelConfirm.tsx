import React from "react";

interface ModelConfirmProps {
  isOpen: boolean;
  content: string;
  onClose: () => void;
  onSubmit: () => void;
}
const ModelConfirm: React.FC<ModelConfirmProps> = ({ isOpen, content, onClose, onSubmit }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Do you want to delete it?!</h2>
          <p>{content}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={onSubmit}>OK</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ModelConfirm