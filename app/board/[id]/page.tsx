"use client"
import React, { useEffect, useState } from "react";
import { CARDTYPE, EActionBoard, EbgColor, ESORTTYPE, IBoard, ICard, IWSBoard, USER_JOIN_BOARD } from "./interface";
import PlayIcon from "./icon/PlayIcon";
import PauseIcon from "./icon/PauseIcon";
import { useMyContext } from "@/context/MyContext";
import { useRouter } from 'next/navigation'
import Card from "./components/Card";
import Column from "./components/Column";
import ArrowUpIcon from "./icon/ArrowUpIcon";
import ArrowDownIcon from "./icon/ArrowDownIcon";
import ClockIcon from "./icon/ClockIcon";


export default function Page({ params }: { params: { id: string } }) {
  const [board, setBoard] = useState<IBoard>();
  const { mainBoard, ws } = useMyContext();
  const [sortType, setSortType] = useState(ESORTTYPE.NONE)
  const router = useRouter()


  useEffect(() => {
    if (ws) {
      const socket: WebSocket = ws as WebSocket
      socket.onmessage = (event) => {
        const dataRoom = JSON.parse(event.data) as IBoard
        setBoard(dataRoom)
      };

      joinBoard()
      return () => {
        socket.close();
      }
    } else {
      router.push(`/`)
    }
  }, []);

  const joinBoard = () => {
    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd = USER_JOIN_BOARD
      usedd.roomID = params.id
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName

      ws.send(JSON.stringify(usedd));
    }
  };

  const addCard = (card: ICard) => {

    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd: IWSBoard = USER_JOIN_BOARD
      usedd.roomID = roomData.RoomID
      usedd.action = EActionBoard.EDITING_BOARD
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName
      usedd.userData.Content = card.Content
      usedd.userData.Type = card.Type
      usedd.userData.CardID = card.CardID
      ws.send(JSON.stringify(usedd));
    }

  }

  const editCard = (type: CARDTYPE, card: ICard) => {

    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd: IWSBoard = USER_JOIN_BOARD
      usedd.roomID = roomData.RoomID
      usedd.action = EActionBoard.EDITING_BOARD
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName
      usedd.userData.Content = card.Content
      usedd.userData.Type = card.Type
      usedd.userData.CardID = card.CardID
      usedd.userData.Like = card.Like
      ws.send(JSON.stringify(usedd));
    }
  }

  const removeCard = (type: CARDTYPE, CardID: string) => {
    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd: IWSBoard = USER_JOIN_BOARD
      usedd.roomID = roomData.RoomID
      usedd.action = EActionBoard.REMOVE_BOARD
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName
      usedd.userData.CardID = CardID
      ws.send(JSON.stringify(usedd));
    }
  }

  const onNextSort = () => {
    switch (sortType) {
      case ESORTTYPE.NONE:
        setSortType(ESORTTYPE.DESC)
        sortCards(ESORTTYPE.DESC)
        break;
      case ESORTTYPE.DESC:
        setSortType(ESORTTYPE.ASC)
        sortCards(ESORTTYPE.ASC)
        break;
      default:
        setSortType(ESORTTYPE.NONE)
        sortCards(ESORTTYPE.NONE)
        break;
    }
  }
  const sortCards = (sort: ESORTTYPE) => {
    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd: IWSBoard = USER_JOIN_BOARD
      usedd.roomID = roomData.RoomID
      usedd.action = EActionBoard.SORTING_BOARD
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName
      usedd.userData.SortType = sort
      ws.send(JSON.stringify(usedd));
    }
  }

  const startTime = () => {
    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd: IWSBoard = USER_JOIN_BOARD
      usedd.roomID = roomData.RoomID
      usedd.action = EActionBoard.IS_TIME_BOARD
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName

      ws.send(JSON.stringify(usedd));
    }
  }

  const setTextBlur = () => {
    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd: IWSBoard = USER_JOIN_BOARD
      usedd.roomID = roomData.RoomID
      usedd.action = EActionBoard.IS_BLUR_BOARD
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName
      ws.send(JSON.stringify(usedd));
    }
  }

  const setEditText = () => {
    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd: IWSBoard = USER_JOIN_BOARD
      usedd.roomID = roomData.RoomID
      usedd.action = EActionBoard.IS_EDIT_BOARD
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName
      ws.send(JSON.stringify(usedd));
    }
  }

  const setPointEsti = () => {
    if (ws) {
      const roomData: IBoard = JSON.parse(mainBoard)

      const usedd: IWSBoard = USER_JOIN_BOARD
      usedd.roomID = roomData.RoomID
      usedd.action = EActionBoard.IS_POINT_BOARD
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName
      ws.send(JSON.stringify(usedd));
    }
  }


  const sortTypeIcon = (type: ESORTTYPE) => {
    switch (type) {
      case ESORTTYPE.ASC:
        return <div onClick={onNextSort}> <ArrowUpIcon color="white" /> </div>
      case ESORTTYPE.DESC:
        return <div onClick={onNextSort}><ArrowDownIcon color="white" /></div>
      default:
        return <div onClick={onNextSort}><ClockIcon color="white" /></div>
    }
  }


  const checkHideWithUserID = (checkHide: boolean, iboard: ICard) => {
    const roomData: IBoard = JSON.parse(mainBoard)
    if (!checkHide) return false
    return (checkHide && (iboard.UserID === roomData?.Member?.ID)) ? false : true
  }

  return (<div className="flex flex-col ">
    <div className="bg-white px-4 py-8 card shadow-xl">
      <span className="text-center"> เวลา  {board?.TimeStart}</span>
    </div>
    <div className="bg-white px-4 py-8 card shadow-xl my-4 w-[992px]">
      <div className="text-center font-bold my-4">
        Sprint Retrospective Board  {board?.Members?.length}
      </div>
      <div className="flex my-4">
        <button type="button" className="btn flex-1 bg-blue-400 text-white hover:bg-blue-600" onClick={startTime}>
          {board?.IsTime ? <PauseIcon color="text-blue-200" width={24} height={24} /> : <PlayIcon color="text-blue-200" width={24} height={24} />}
          เริ่มหยุดการนับเวลา
        </button>
        <button type="button" className="btn flex-1 bg-indigo-400 text-white hover:bg-indigo-600" onClick={setTextBlur}>ปิด/เปิดข้อความ</button>
        <button type="button" className="btn flex-1 bg-green-400 text-white hover:bg-green-600" onClick={setEditText}>เริ่ม/หยุดการทำ</button>
        <button type="button" className="btn flex-1 bg-orange-400 text-white hover:bg-orange-600" onClick={setPointEsti}>เริ่ม/หยุดการให้คะแนน</button>
        <button type="button" className="btn flex-1 bg-red-400 text-white hover:bg-red-600" onClick={onNextSort}>
          {sortTypeIcon(sortType)}
          Sort
        </button>
      </div>
      <div className="flex">

        <Column title="สิ่งที่ดีอยู่แล้ว" bgColor={EbgColor.GREEN} color={EbgColor.GREEN} CardType={CARDTYPE.CONTINUE}
          addNewCard={addCard} IsEdit={board?.IsEdit}>
          {
            board?.Boards.filter((item) => item.Type === CARDTYPE.CONTINUE).map((item, index) => {
              return (
                <Card
                  key={index}
                  content={item}
                  bgColor={EbgColor.GREEN}
                  color={EbgColor.GREEN}
                  isBlur={checkHideWithUserID(board.IsBlur, item)}
                  isEdit={!checkHideWithUserID(board.IsEdit, item)}
                  isPoint={board.IsPoint}
                  editCard={editCard}
                  removeCard={removeCard}
                />
              )
            })
          }
        </Column>
        <Column title="สิ่งที่ควรหยุด" bgColor={EbgColor.RED} color={EbgColor.RED} CardType={CARDTYPE.END}
          addNewCard={addCard} IsEdit={board?.IsEdit}>
          {
            board?.Boards.filter((item) => item.Type === CARDTYPE.END).map((item, index) => {
              return (
                <Card
                  key={index}
                  content={item}
                  bgColor={EbgColor.RED}
                  color={EbgColor.RED}
                  isBlur={checkHideWithUserID(board.IsBlur, item)}
                  isEdit={!checkHideWithUserID(board.IsEdit, item)}
                  isPoint={board.IsPoint}
                  editCard={editCard}
                  removeCard={removeCard}
                />
              )
            })
          }
        </Column>
        <Column title="สิ่งที่ควรเริ่ม" bgColor={EbgColor.PURPLE} color={EbgColor.PURPLE} CardType={CARDTYPE.START}
          addNewCard={addCard} IsEdit={board?.IsEdit}>
          {board?.Boards.filter((item) => item.Type === CARDTYPE.START).map((item, index) => {
            return (
              <Card
                key={index}
                content={item}
                bgColor={EbgColor.PURPLE}
                color={EbgColor.PURPLE}
                isBlur={checkHideWithUserID(board.IsBlur, item)}
                isEdit={!checkHideWithUserID(board.IsEdit, item)}
                isPoint={board.IsPoint}
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
