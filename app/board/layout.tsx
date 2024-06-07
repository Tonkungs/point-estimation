"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import SignOff from "../room/[id]/components/sign-off";

export default function RoomLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<boolean>(false)
  const onSignOff = () => {
    router.push("/")
  }

  return (
    <>
      <div className="bg-base-200">
        <div className="navbar bg-base-100 shadow-lg">
          <div className="navbar-start">
          </div>
          <div className="navbar-center">
            <a className="text-xl font-bold">Sprint Retrospective Board</a>
          </div>
          <div className="navbar-end">
            <div className={`tooltip tooltip-left ${tooltip ? "tooltip tooltip-open" : ""}`}
              data-tip="Sign Off"
              onMouseOver={() => setTooltip(true)}
              onMouseLeave={() => setTooltip(false)}>
              <button className="btn btn-ghost btn-circle" onClick={onSignOff}>
                <SignOff />
              </button>
            </div>

          </div>
        </div>
        <div className="flex justify-center">
          {children}
        </div>
      </div>
    </>
  )
}