"use client"
import { DEFAULTROOM } from '@/app/room/[id]/interface';
import useLocalStorage from '@/hook/localstorage';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// กำหนดประเภทสำหรับ Context
interface MyContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  room: string;
  setRoom: React.Dispatch<React.SetStateAction<string>>
  ws: WebSocket | undefined
  setWs: React.Dispatch<React.SetStateAction<WebSocket | undefined>>
  connect: () => void
}

// สร้าง Context พร้อมกับค่าเริ่มต้น
const MyContext = createContext<MyContextType | undefined>(undefined);

// กำหนดประเภทสำหรับ Provider component props
interface MyProviderProps {
  children: ReactNode;
}

// สร้าง Provider component
export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [state, setState] = useState<string>("Initial State");
  const [room, setRoom] = useLocalStorage<string>('server-estimate', JSON.stringify(DEFAULTROOM));
  const [ws, setWs] = useState<WebSocket>();
  const HOST_WS: string = process.env.NEXT_PUBLIC_WEB_SOCKET_HOST as string
  function connect() {
    const socket = new WebSocket(HOST_WS);
    // const socket = new WebSocket('wss://quickest-successful-chevre.glitch.me');

    setWs(socket);

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }
  useEffect(() => {
    connect()
    const wsc: WebSocket = ws as WebSocket
    return () => {
      wsc.close();
    };
  }, []);

  return (
    <MyContext.Provider value={{
      state, setState,
      room, setRoom,
      ws, setWs,
      connect
    }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
