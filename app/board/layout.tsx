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
        <div className="fixed navbar bg-purple-500 shadow-lg z-10">
          <div className="navbar-start">
          </div>
          <div className="navbar-center">
            <a className="text-xl font-bold text-white">Sprint Retrospective Board</a>
          </div>
          <div className="navbar-end">
            <div className={`tooltip tooltip-left ${tooltip ? "tooltip tooltip-open" : ""}`}
              data-tip="Sign Off"
              onMouseOver={() => setTooltip(true)}
              onMouseLeave={() => setTooltip(false)}>
              <button className="btn btn-ghost btn-circle" onClick={onSignOff}>
                <SignOff colorClass="text-purple-200" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-16">
          {children}
        </div>
      </div>
    </>
  )
}