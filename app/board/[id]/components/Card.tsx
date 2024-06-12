import React, { ReactElement, useEffect, useState } from "react";
import PencilIcon from "../icon/Pencil";
import PlusIcon from "../icon/PlusIcon";
import RemoveIcon from "../icon/RemoveIcon";
import { CardProps, CARDTYPE } from "../interface";
import Modal from "./Model";
import ModelConfirm from "./ModelConfirm";

const Card: React.FC<CardProps> = ({
  content, bgColor, title, isBlur, isEdit,
  isPoint, color, editCard, CardType = CARDTYPE.START,
  removeCard }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [_, setModalData] = useState('');

  const handleModalSubmit = (value: string) => {
    setModalData(value);
    editCard(CardType, { ...content, Content: value })
  };

  const handleModalSubmitLike = () => {
    editCard(CardType, { ...content, Like: content.Like + 1 })
    setModalConfirmOpen(false)
  };

  const handleModalSubmitDelete = () => {
    removeCard(CardType, content.CardID)
    setModalConfirmOpen(false)
  };


  const colorVariantsDiv: { [key: string]: string } = {
    green: 'bg-green-100 border-green-200',
    red: 'bg-red-100 border-red-200',
    purple: 'bg-purple-100 border-purple-200',
  }

  let colorVariantsText: { [key: string]: string } = {
    green: 'text-green-700',
    red: 'text-red-700',
    purple: 'text-purple-700',
  }

  if (isBlur) {
    colorVariantsText.green = 'blur-sm select-none ' + colorVariantsText.green
    colorVariantsText.red = 'blur-sm select-none ' + colorVariantsText.red
    colorVariantsText.purple = 'blur-sm select-none ' + colorVariantsText.purple
  }

  return (
    <div
      className={`${colorVariantsDiv[bgColor]} p-4 rounded-md border shadow-sm flex flex-col w-72`}
    >
      {(content.Like === 0) ? null : (
        <div className="flex justify-end">
          <div className="badge">+{content.Like}</div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        title={title as string}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        color={color}
        content={content.Content}
      />

      <ModelConfirm
        isOpen={isModalConfirmOpen}
        onClose={() => setModalConfirmOpen(false)}
        onSubmit={handleModalSubmitDelete}
        content={content.Content}
      />

      <p className={colorVariantsText[color]} >
        {content.Content}
      </p>

      {
        isEdit ? <div className="flex justify-end">
          <button onClick={() => setModalOpen(true)}>
            <PencilIcon width={20} height={20} color={color} />
          </button>
          <button onClick={() => setModalConfirmOpen(true)}>
            <RemoveIcon width={20} height={20} color={color} />
            {/* <MinusIcon width={20} height={20} color={color} /> */}
          </button>
        </div> : ""
      }

      {
        isPoint ? <div className="flex justify-end">
          <button onClick={handleModalSubmitLike}>
            <PlusIcon width={20} height={20} color={color} />
          </button>
        </div> : ""
      }

    </div>
  );
};

export default Card