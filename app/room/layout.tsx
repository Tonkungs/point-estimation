"use client"
import { useRouter } from "next/navigation";
import SignOff from "./[id]/components/sign-off";
import { useState } from "react";

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
            <a className="text-xl font-bold">Point estimation</a>
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
        <div className=" py-5">
          {children}
        </div>
      </div>
    </>
  )
}