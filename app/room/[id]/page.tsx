"use client"
import { ESTIMATION_POINT } from "@/constants/point";
import CardPoint from "./components/card-point";
import { useEffect, useState } from "react";
import IEstimationPoint, { DEFAULTROOM, IMember, IWSRoom, USER_JOIN_ROOM } from "./interface";
import BarChart from "./components/bar-chart";
import { useMyContext } from "@/context/MyContext";
import { useRouter } from 'next/navigation'

function getEstimationPoints(data: IEstimationPoint): number[] {

  let pointCount = new Map<string, number>();
  ESTIMATION_POINT.map((point) => {
    const resultFilter = data.Members.filter((member) => member.Point === point)
    pointCount.set(point, resultFilter.length)
  })

  const result: number[] = []
  pointCount.forEach((value) => result.push(value))

  return result
}

export default function Page({ params }: { params: { id: string } }) {
  const [useCard, setUseCard] = useState<string>("");
  const [dataEsti, setDataEsti] = useState<IEstimationPoint>(DEFAULTROOM);
  const [estimationPoints, setEstimationPoints] = useState<string[]>([]);

  const { room, ws } = useMyContext();
  const router = useRouter()

  useEffect(() => {
    const roomData: IEstimationPoint = JSON.parse(room)
    if (ws) {

      const socket: WebSocket = ws as WebSocket
      socket.onmessage = (event) => {
        const dataRoom = JSON.parse(event.data)
        setDataEsti(dataRoom);

        dataRoom.Members.map((member: IMember) => {
          if (member.ID === roomData.Member.ID) {
            setUseCard(member.Point)
          }
        })

        setEstimationPoints(dataRoom.Points)
      };



      joinRoom()
      return () => {
        socket.close();
      }
    } else {
      router.push(`/`)
    }
  }, []);

  const joinRoom = () => {
    if (ws) {
      const roomData: IEstimationPoint = JSON.parse(room)

      const usedd = USER_JOIN_ROOM
      usedd.roomID = params.id
      usedd.userData.ID = roomData.Member.ID
      usedd.userData.UserName = roomData.Member.UserName

      ws.send(JSON.stringify(usedd));
    }
  };

  const selectPoint = (point: string) => {
    setUseCard(point)

    if (ws) {
      const roomData: IEstimationPoint = JSON.parse(room)

      const usedd: IWSRoom = {
        action: "ESTIMATE_POINT",
        roomID: params.id,
        userData: {
          ID: roomData.Member.ID,
          UserName: roomData.Member.UserName,
          Point: point,
        }
      }

      ws.send(JSON.stringify(usedd));
    }
  }

  const deletePoint = () => {
    if (ws) {
      const roomData: IEstimationPoint = JSON.parse(room)

      const usedd: IWSRoom = {
        action: "DELETED_POINT",
        roomID: params.id,
        userData: {
          ID: roomData.Member.ID,
          UserName: roomData.Member.UserName,
          Point: useCard,
        }
      }
      ws.send(JSON.stringify(usedd));
    }
  }

  const setHidePoint = () => {
    if (ws) {
      const roomData: IEstimationPoint = JSON.parse(room)

      const usedd: IWSRoom = {
        action: "SHOW_HIDE_POINT",
        roomID: params.id,
        userData: {
          ID: roomData.Member.ID,
          UserName: roomData.Member.UserName,
          Point: useCard,
        }
      }
      ws?.send(JSON.stringify(usedd));
    }
  }

  return (
    <div className="md:container md:mx-auto bg-white my-5 rounded-lg shadow-lg">
      {/* <button className="btn btn-primary" onClick={joinRoom}>JOIN</button> */}
      <div className="text-center text-xl font-bold py-5">Room Name:  {params.id}</div>
      <div className="divider"></div>
      <div className="text-sm font-bold py-5">Please select Point Below.</div>
      <div className="cards flex flex-wrap gap-8 my-3	">
        {ESTIMATION_POINT.map((point) => (
          <CardPoint key={point} point={point} useCard={useCard} setUseCard={selectPoint}
            estimationPoints={estimationPoints}
          // isHide={dataEsti.IsHide}
          />
        ))}
      </div>
      <div className="divider"></div>
      <div className="chart h-72 my-3	flex justify-center">
        {
          dataEsti.IsHide ? <div className="skeleton w-full h-64"></div> : <BarChart className="w-full h-64"
            Points={getEstimationPoints(dataEsti)} PointMax={dataEsti.Members.length} />
        }

      </div>
      <div className="divider"></div>
      <div className="result my-3	">
        <div className="bt-group flex">
          <div className="result-text flex-1 text-lg">
            Results
          </div>
          <div className="flex-1">
            <button className="btn button-pink" onClick={deletePoint}>Delete Estimate</button>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="btn button-mint" onClick={setHidePoint}>{dataEsti.IsHide ? "Show Point" : "Hide Point"}</button>
          </div>
        </div>
      </div>
      <div className="table-user py-3	">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Point</th>
              </tr>
            </thead>
            <tbody>
              {dataEsti.Members.map((member, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{member.UserName}</td>
                  <td>{(member.Point === "" ? "" :
                    <div className="badge badge-outline">{dataEsti.IsHide ? "SP" : member.Point}</div>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
} 