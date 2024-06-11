import { IMember } from "@/app/room/[id]/interface";

export enum EbgColor {
  GREEN = "green",
  RED = "red",
  PURPLE = "purple",
}

export enum ESORTTYPE {
  ASC = "asc",
  DESC = "desc",
  NONE = "none",
}


export enum CARDTYPE {
  START = "START",
  END = "END",
  CONTINUE = "CONTINUE",
}

export enum EActionBoard {
  JOIN_BOARD = "JOIN_BOARD",
  LEAVE_BOARD = "LEAVE_BOARD",
  EDITING_BOARD = "EDITING_BOARD",
  LIKE_BOARD = "LIKE_BOARD",
  REMOVE_BOARD = "REMOVE_BOARD",
  SORTING_BOARD = "SORTING_BOARD",
  IS_TIME_BOARD = "IS_TIME_BOARD",
  IS_BLUR_BOARD = "IS_BLUR_BOARD",
  IS_EDIT_BOARD = "IS_EDIT_BOARD",
  IS_POINT_BOARD = "IS_POINT_BOARD",
}

interface ICard {
  UserID: string;
  UserName: string;
  CardID: string;
  Type: CARDTYPE;
  Content: string;
  Like: number;
}

interface IBoard {
  RoomID: string;
  Boards: ICard[];
  Member: IMember;
  Members: IMember[];
  SortType: ESORTTYPE;
  IsTime: boolean;
  TimeStart: string;
  IsBlur: boolean;
  IsEdit: boolean;
  IsPoint: boolean;
}

interface IWSBoard {
  action: EActionBoard;
  roomID: string;
  userData: {
    ID: string;
    UserName: string;
    CardID: string;
    Content: string;
    Type: CARDTYPE;
    Like: number;
  };
}

export const USER_JOIN_BOARD: IWSBoard = {
  action: EActionBoard.JOIN_BOARD,
  roomID: "",
  userData: {
    ID: "",
    UserName: "",
    CardID: "",
    Content: "",
    Type: CARDTYPE.START,
    Like: 0,
  }
}

const defaultMember: IMember = {
  ID: "",
  UserName: "",
  Point: "",
}

export const DEFAULTBOARD: IBoard = {
  RoomID: "",
  Boards: [],
  Member: defaultMember,
  Members: [],
  SortType: ESORTTYPE.NONE,
  IsTime: false,
  TimeStart: "",
  IsBlur: false,
  IsEdit: false,
  IsPoint: false,
};
// End Board




interface ColumnProps {
  title: string;
  bgColor: EbgColor;
  color: EbgColor;
  children: React.ReactNode;
  CardType: CARDTYPE,
  IsEdit: boolean | undefined
  addNewCard: (data: ICard) => void;
  sort: (sortType: ESORTTYPE) => void;
}


interface CardProps {
  content: ICard
  bgColor: EbgColor;
  color: EbgColor;
  title?: string // pass from parent components
  editCard: (type: CARDTYPE, card: ICard) => void;
  removeCard: (type: CARDTYPE, idCard: string) => void
  isBlur?: boolean
  isEdit: boolean
  isPoint: boolean
  CardType?: CARDTYPE// pass from parent components
}

export type {
  ColumnProps, CardProps, ICard, IBoard,
  IWSBoard,
}