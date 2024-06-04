"use client"
// import useLocalStorage from "@/hook/localstorage";
import IEstimationPoint, { DEFAULTROOM } from "./room/[id]/interface";
import { useEffect, useState } from "react";
import Utils from "@/utils/utils";
import { useRouter } from 'next/navigation'
import { useRoomContext } from "@/context/ws";
import { MyProvider, useMyContext } from "@/context/MyContext";


export default function Home() {
  const [roomName, setRoomName] = useState<string>("room-for-estimate");
  const [userName, setUserName] = useState<string>("");
  const router = useRouter()
  const { room, setRoom, ws, setWs } = useMyContext();

  useEffect(() => {
    const roomData: IEstimationPoint = JSON.parse(room)
    setUserName(roomData.Member.UserName)
  }, [])

  const onSetRoomName = (e: any) => {
    setRoomName(e.target.value)
  }

  const onSetUserName = (e: any) => {
    setUserName(e.target.value)
  }

  const onJoinRoom = (e: any) => {
    e.preventDefault()
    if (roomName && userName) {
      const roomData: IEstimationPoint = JSON.parse(room)
      roomData.Member.UserName = userName
      roomData.Member.ID = Utils.GenUserID();
      roomData.RoomID = roomName
      setRoom(JSON.stringify(roomData))

      router.push(`/room/${roomName}`)
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">ระบบ Point Estimation</h1>
          <p className="py-6">ใส่ชื่อและเลขห้องเพิ่อเข้าสู่ระบบ</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Room ID</span>
              </label>
              <input type="text" placeholder="Room ID" className="input input-bordered"
                value={roomName}
                disabled
              // onChange={onSetRoomName} 
              />
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered"
                value={userName}
                required
                onChange={onSetUserName} />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={onJoinRoom}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}