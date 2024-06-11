import React, { ReactElement, useEffect, useState } from "react";
import ArrowDownIcon from "../icon/ArrowDownIcon";
import ArrowUpIcon from "../icon/ArrowUpIcon";
import ClockIcon from "../icon/ClockIcon";
import { ColumnProps, ESORTTYPE, ICard } from "../interface";
import Modal from "./Model";
import Utils from "@/utils/utils";
import Card from "./Card";

const Column: React.FC<ColumnProps> = ({ title = "", bgColor, color, children, addNewCard, sort, CardType, IsEdit }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [_, setModalData] = useState('');
  const [sortType, setSortType] = useState(ESORTTYPE.NONE)

  const handleModalSubmit = (value: string) => {
    setModalData(value);
    const newCards: ICard = {
      UserID: '',
      UserName: "",
      CardID: Utils.GenUserID(),
      Content: value,
      Like: 0,
      Type: CardType,
    }
    addNewCard(newCards)
  };

  const colorVariantsBG: { [key: string]: string } = {
    green: 'bg-green-50',
    red: 'bg-red-50',
    purple: 'bg-purple-50',
  }

  const colorVariantsDiv: { [key: string]: string } = {
    green: 'bg-green-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
  }

  const colorVariantsText: { [key: string]: string } = {
    green: 'text-green-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
  }

  const sortTypeIcon = (type: ESORTTYPE) => {
    switch (type) {
      case ESORTTYPE.ASC:
        return <div onClick={onNextSort}> <ArrowUpIcon color={color} /> </div>
      case ESORTTYPE.DESC:
        return <div onClick={onNextSort}><ArrowDownIcon color={color} /></div>
      default:
        return <div onClick={onNextSort}><ClockIcon color={color} /></div>
    }
  }

  const onNextSort = () => {
    switch (sortType) {
      case ESORTTYPE.NONE:
        setSortType(ESORTTYPE.DESC)
        sort(ESORTTYPE.DESC)
        break;
      case ESORTTYPE.DESC:
        setSortType(ESORTTYPE.ASC)
        sort(ESORTTYPE.ASC)
        break;
      default:
        setSortType(ESORTTYPE.NONE)
        sort(ESORTTYPE.NONE)
        break;
    }
  }

  return (
    <div className={`flex flex-col gap-4 w-1/3 ${colorVariantsBG[color]} p-4`}>
      <Modal
        isOpen={isModalOpen}
        title={title}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        color={color}
        content=""
      />

      <div className="flex items-center gap-2">
        <div className={`${colorVariantsDiv[bgColor]} rounded-full w-4 h-4`}></div>
        <h4 className={`${colorVariantsText[color]} font-medium`} >{title}</h4>
        <span className="text-gray-400">...</span>
        <div className={`flex-auto flex justify-end cursor-pointer`}>
          {sortTypeIcon(sortType)}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && 'type' in child && child.type === Card) {
            return React.cloneElement(child as ReactElement<any>, { title, CardType });
          }
          return child;
        })}
      </div>
      {IsEdit ? <div className="flex flex-col gap-4">
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Add card</button>
      </div> : ""}

    </div>
  );
};

export default Column