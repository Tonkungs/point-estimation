
export interface IMember {
  ID: string;
  UserName: string;
  Point: string;
}

export default interface IEstimationPoint {
  RoomID: string;
  Points: string[];
  IsHide: boolean;
  Member: IMember;
  Members: IMember[];
}

export const DEFAULTROOM: IEstimationPoint = {
  RoomID: "",
  Points: [],
  IsHide: true,
  Member: {
    ID: "",
    UserName: "",
    Point: "",
  },
  Members: [],
}

export interface IWSRoom {
  action: string;
  roomID: string;
  userData: {
    ID: string;
    UserName: string;
    Point: string;
  }
}

export const USER_JOIN_ROOM: IWSRoom = {
  action: "JOIN_ROOM",
  roomID: "",
  userData: {
    ID: "",
    UserName: "",
    Point: ""
  }
}