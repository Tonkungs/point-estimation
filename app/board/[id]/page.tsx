"use client"
import React, { useEffect, useState } from "react";
import { CARDTYPE, EActionBoard, EbgColor, IBoard, ICard, IWSBoard, USER_JOIN_BOARD } from "./interface";
import PlayIcon from "./icon/PlayIcon";
import PauseIcon from "./icon/PauseIcon";
import { useMyContext } from "@/context/MyContext";
import { useRouter } from 'next/navigation'
import Card from "./components/Card";
import Column from "./components/Column";


export default function Page({ params }: { params: { id: string } }) {
  const [board, setBoard] = useState<IBoard>();
  const { mainBoard, ws } = useMyContext();
  const router = useRouter()


  useEffect(() => {
    // const roomData: IWSBoard = JSON.parse(room)
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
      // router.push(`/`)
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

  // const sortData = (array: ICard[], sort: ESORTTYPE) => {
  //   switch (sort) {
  //     case ESORTTYPE.ASC:
  //       array.sort((a, b) => a.Like - b.Like)
  //       break;
  //     case ESORTTYPE.DESC:
  //       array.sort((a, b) => b.Like - a.Like)
  //       break;
  //     default:
  //       array.sort((a, b) => a.UserID.localeCompare(b.UserID))
  //       break;
  //   }
  //   return [...array]
  // }

  // const sortGreenCards = (sort: ESORTTYPE) => {
  //   setGreenCards(sortData(greenCards, sort))
  // }

  // const sortRedCards = (sort: ESORTTYPE) => {
  //   setRedCards(sortData(redCards, sort))
  // }

  // const sortPurpleCards = (sort: ESORTTYPE) => {
  //   setPurpleCards(sortData(purpleCards, sort))
  // }

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

  return (<div className="flex flex-col">
    <div className="bg-white px-4 py-8 card shadow-xl">
      เวลา  {board?.TimeStart}
    </div>
    <div className="bg-white px-4 py-8 card shadow-xl my-4">
      <div className="text-center font-bold my-4">
        Sprint Retrospective Board
      </div>
      <div className="flex my-4">
        <button type="button" className="btn flex-1 bg-blue-400 text-white hover:bg-blue-600" onClick={startTime}>
          {board?.IsTime ? <PauseIcon color="text-blue-200" width={24} height={24} /> : <PlayIcon color="text-blue-200" width={24} height={24} />}
          เริ่มหยุดการนับเวลา
        </button>
        <button type="button" className="btn flex-1 bg-indigo-400 text-white hover:bg-indigo-600" onClick={setTextBlur}>ปิด/เปิดข้อความ</button>
        <button type="button" className="btn flex-1 bg-green-400 text-white hover:bg-green-600" onClick={setEditText}>เริ่ม/หยุดการทำ</button>
        <button type="button" className="btn flex-1 bg-orange-400 text-white hover:bg-orange-600" onClick={setPointEsti}>เริ่ม/หยุดการให้คะแนน</button>
      </div>
      <div className="flex">

        <Column title="สิ่งที่ดีอยู่แล้ว" bgColor={EbgColor.GREEN} color={EbgColor.GREEN} CardType={CARDTYPE.CONTINUE}
          addNewCard={addCard} sort={() => { }} IsEdit={board?.IsEdit}>
          {
            board?.Boards.filter((item) => item.Type === CARDTYPE.CONTINUE).map((item, index) => {
              return (
                <Card
                  key={index}
                  content={item}
                  bgColor={EbgColor.GREEN}
                  color={EbgColor.GREEN}
                  isBlur={board.IsBlur}
                  isEdit={board.IsEdit}
                  isPoint={board.IsPoint}
                  editCard={editCard}
                  removeCard={removeCard}

                />
              )
            })
          }
        </Column>
        <Column title="สิ่งที่ควรหยุด" bgColor={EbgColor.RED} color={EbgColor.RED} CardType={CARDTYPE.END}
          addNewCard={addCard} sort={() => { }} IsEdit={board?.IsEdit}>
          {
            board?.Boards.filter((item) => item.Type === CARDTYPE.END).map((item, index) => {
              return (
                <Card
                  key={index}
                  content={item}
                  bgColor={EbgColor.RED}
                  color={EbgColor.RED}
                  isBlur={board.IsBlur}
                  isEdit={board.IsEdit}
                  isPoint={board.IsPoint}
                  editCard={editCard}
                  removeCard={removeCard}
                />
              )
            })
          }
        </Column>
        <Column title="สิ่งที่ควรเริ่ม" bgColor={EbgColor.PURPLE} color={EbgColor.PURPLE} CardType={CARDTYPE.START}
          addNewCard={addCard} sort={() => { }} IsEdit={board?.IsEdit}>
          {board?.Boards.filter((item) => item.Type === CARDTYPE.START).map((item, index) => {
            return (
              <Card
                key={index}
                content={item}
                bgColor={EbgColor.PURPLE}
                color={EbgColor.PURPLE}
                isBlur={board.IsBlur}
                isEdit={board.IsEdit}
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
