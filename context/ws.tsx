"use client"
import { DEFAULTROOM } from "@/app/room/[id]/interface";
import useLocalStorage from "@/hook/localstorage";
import { createContext, ReactNode, useContext, useState } from "react";

type ThemeType = {
  room: string;
  setRoom: React.Dispatch<React.SetStateAction<string>>
  ws: WebSocket | undefined
  setWs: React.Dispatch<React.SetStateAction<WebSocket | undefined>>
};

const RoomContext = createContext<ThemeType>({} as ThemeType);

interface MyProviderProps {
  children: ReactNode;
}

export const RoomProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [room, setRoom] = useLocalStorage<string>('server-estimate', JSON.stringify(DEFAULTROOM));
  const [ws, setWs] = useState<WebSocket>();
  return (
    <RoomContext.Provider value={{ room, setRoom, ws, setWs }}>
      {children}
    </RoomContext.Provider>
  );
};

// สร้าง custom hook สำหรับใช้งาน Context
export const useRoomContext = () => {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error('useRoomContext must be used within a RoomProvider');
  }
  return context;
};