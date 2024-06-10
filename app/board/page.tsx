"use client"
import React, { ReactElement, useState } from "react";
import PlusIcon from "./components/PlusIcon";
import Modal from "./components/Model";
import { CardProps, ColumnProps, EbgColor, ESORTTYPE, ICard } from "./interface";
import PencilIcon from "./components/Pencil";
import Utils from "@/utils/utils";
import ModelConfirm from "./components/ModelConfirm";
// import MinusIcon from "./components/MinusIcon";
import ArrowUpIcon from "./components/ArrowUpIcon";
import ArrowDownIcon from "./components/ArrowDownIcon";
import ClockIcon from "./components/ClockIcon";
import RemoveIcon from "./components/RemoveIcon";
import PlayIcon from "./components/PlayIcon";
import PauseIcon from "./components/PauseIcon";

const Card: React.FC<CardProps> = ({
  content, bgColor, title, isBlur, isEdit,
  isPoint, color, editCard,
  removeCard }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [modalData, setModalData] = useState('');

  const handleModalSubmit = (value: string) => {
    setModalData(value);
    editCard(color, { ...content, content: value })
  };

  const handleModalSubmitLike = () => {
    editCard(color, { ...content, like: content.like + 1 })
    setModalConfirmOpen(false)
  };

  const handleModalSubmitDelete = () => {
    removeCard(color, content.idCard)
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
      {(content.like === 0) ? null : (
        <div className="flex justify-end">
          <div className="badge">+{content.like}</div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        title={title as string}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        color={color}
        content={content.content}
      />

      <ModelConfirm
        isOpen={isModalConfirmOpen}
        onClose={() => setModalConfirmOpen(false)}
        onSubmit={handleModalSubmitDelete}
        content={content.content}
      />

      <p className={colorVariantsText[color]} >
        {content.content}
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

const Column: React.FC<ColumnProps> = ({ title = "", bgColor, color, children, addNewCard }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const [sortType, setSortType] = useState(ESORTTYPE.NONE)

  const handleModalSubmit = (value: string) => {
    setModalData(value);
    const newCards = { userID: '1', idCard: Utils.GenUserID(), content: value, like: 0 }
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
        break;
      case ESORTTYPE.DESC:
        setSortType(ESORTTYPE.ASC)
        break;
      default:
        setSortType(ESORTTYPE.NONE)
        break;
    }
  }

  return (
    <div className={`flex flex-col gap-4 w-1/3 ${colorVariantsBG[color]} p-4`}>
      {/* <button
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </button> */}

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
            return React.cloneElement(child as ReactElement<any>, { title });
          }
          return child;
        })}
      </div>
      <div className="flex flex-col gap-4">
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Add card</button>
      </div>
    </div>
  );
};


const greenCards_C: ICard[] = [
  {
    userID: "",
    idCard: "1",
    content: "Nice work on the backend by Ana",
    like: 1,
  },
  {
    userID: "",
    idCard: "2",
    content: "Team outing was grea",
    like: 10,
  },
  {
    userID: "",
    idCard: "3",
    content: "Paul joined the team",
    like: 0,
  },
]

const redCards_C: ICard[] = [
  {
    userID: "",
    idCard: "4",
    content: "Developers should be close to the customer",
    like: 50,
  },
  {
    userID: "",
    idCard: "5",
    content: "Functional tests keep breaking",
    like: 0,
  },
  {
    userID: "",
    idCard: "6",
    content: "Improve speed of cards getting done on Kanban",
    like: 0,
  },
]

const purpleCards_C: ICard[] = [
  {
    userID: "",
    idCard: "7",
    content: "Fix flaky tests",
    like: 30,
  },
  {
    userID: "",
    idCard: "8",
    content: "Send email to customers",
    like: 0,
  },
]

const Board: React.FC = () => {
  const [greenCards, setGreenCards] = useState<ICard[]>(greenCards_C);
  const [redCards, setRedCards] = useState<ICard[]>(redCards_C);
  const [purpleCards, setPurpleCards] = useState<ICard[]>(purpleCards_C);
  const [time, setTime] = useState<string>("15:00")
  const [isTimeRun, setIsTimeRun] = useState<boolean>(false)
  const [timeOutIn, setTimeOutIN] = useState<ReturnType<typeof setTimeout> | null>(null)
  const [isBlur, setIsBlur] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isPoint, setisPoint] = useState(false);
  const addGreenCard = (card: ICard) => {
    setGreenCards([...greenCards, card])
  }

  const addRedCard = (card: ICard) => {
    setRedCards([...redCards, card])
  }

  const addPurpleCard = (card: ICard) => {
    setPurpleCards([...purpleCards, card])
  }

  const editCard = (type: EbgColor, card: ICard) => {

    switch (type) {
      case EbgColor.GREEN:
        setGreenCards(greenCards.map((item) => item.idCard === card.idCard ? card : item))
        break;
      case EbgColor.RED:
        setRedCards(redCards.map((item) => item.idCard === card.idCard ? card : item))
        break;
      case EbgColor.PURPLE:
        setPurpleCards(purpleCards.map((item) => item.idCard === card.idCard ? card : item))
        break;
      default:
        throw new Error('Invalid type');
    }
  }

  const removeCard = (type: EbgColor, idCard: string) => {
    switch (type) {
      case EbgColor.GREEN:
        setGreenCards(greenCards.filter((card) => card.idCard !== idCard))
        break;
      case EbgColor.RED:
        setRedCards(redCards.filter((card) => card.idCard !== idCard))
        break;
      case EbgColor.PURPLE:
        setPurpleCards(purpleCards.filter((card) => card.idCard !== idCard))
        break;
      default:
        throw new Error('Invalid type');
    }
  }

  const startTime = () => {
    if (!isTimeRun) {
      setIsTimeRun(true)
      const split = time.split(":")
      let newTime: number = parseInt(split[0])
      let newSecond: number = parseInt(split[1])

      setTimeOutIN(setInterval(() => {

        if (newSecond === 0) {
          newTime = newTime - 1
          newSecond = 60
        }

        newSecond = newSecond - 1;
        let newTimePaddingString = newTime.toString().padStart(2, "0")
        let newSecondStringPadding = newSecond.toString().padStart(2, "0")
        setTime(`${newTimePaddingString}:${newSecondStringPadding}`)


        if (newTime < 0) {
          clearInterval(timeOutIn as NodeJS.Timeout)
          setIsTimeRun(false)
        }

      }, 1000))
    } else {
      clearInterval(timeOutIn as NodeJS.Timeout)
      setIsTimeRun(false)
    }
  }

  const setTextBlur = () => {
    setIsBlur(!isBlur)
  }

  const setEditText = () => {
    setIsEdit(!isEdit)
  }

  const setPointEsti = () => {
    setisPoint(!isPoint)
  }

  return (<div className="flex flex-col">
    <div className="bg-white px-4 py-8 card shadow-xl">
      เวลา  {time}
    </div>
    <div className="bg-white px-4 py-8 card shadow-xl my-4">
      <div className="text-center font-bold my-4">
        Sprint Retrospective Board
      </div>
      <div className="flex my-4">
        <button type="button" className="btn flex-1 bg-blue-400 text-white hover:bg-blue-600" onClick={startTime}>
          {isTimeRun ? <PauseIcon color="text-blue-200" width={24} height={24} /> : <PlayIcon color="text-blue-200" width={24} height={24} />}
          เริ่มหยุดการนับเวลา
        </button>
        <button type="button" className="btn flex-1 bg-indigo-400 text-white hover:bg-indigo-600" onClick={setTextBlur}>ปิด/เปิดข้อความ</button>
        <button type="button" className="btn flex-1 bg-green-400 text-white hover:bg-green-600" onClick={setEditText}>เริ่ม/หยุดการทำ</button>
        <button type="button" className="btn flex-1 bg-orange-400 text-white hover:bg-orange-600" onClick={setPointEsti}>เริ่ม/หยุดการให้คะแนน</button>
      </div>
      <div className="flex">

        <Column title="สิ่งที่ดีอยู่แล้ว" bgColor={EbgColor.GREEN} color={EbgColor.GREEN}
          addNewCard={addGreenCard}>
          {
            greenCards.map((item, index) => {
              return (
                <Card
                  key={index}
                  content={item}
                  bgColor={EbgColor.GREEN}
                  color={EbgColor.GREEN}
                  isBlur={isBlur}
                  isEdit={isEdit}
                  isPoint={isPoint}
                  editCard={editCard}
                  removeCard={removeCard}

                />
              )
            })
          }
        </Column>
        <Column title="สิ่งที่ควรหยุด" bgColor={EbgColor.RED} color={EbgColor.RED}
          addNewCard={addRedCard}>
          {
            redCards.map((item, index) => {
              return (
                <Card
                  key={index}
                  content={item}
                  bgColor={EbgColor.RED}
                  color={EbgColor.RED}
                  isBlur={isBlur}
                  isEdit={isEdit}
                  isPoint={isPoint}
                  editCard={editCard}
                  removeCard={removeCard}
                />
              )
            })
          }
        </Column>
        <Column title="สิ่งที่ควรเริ่ม" bgColor={EbgColor.PURPLE} color={EbgColor.PURPLE}
          addNewCard={addPurpleCard}>
          {purpleCards.map((item, index) => {
            return (
              <Card
                key={index}
                content={item}
                bgColor={EbgColor.PURPLE}
                color={EbgColor.PURPLE}
                isBlur={isBlur}
                isEdit={isEdit}
                isPoint={isPoint}
                editCard={editCard}
                removeCard={removeCard}
              />
            )
          })}
        </Column>
      </div>
    </div>
  </div>
  );
};

export default Board;