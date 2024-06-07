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

interface ColumnProps {
  title: string;
  bgColor: EbgColor;
  color: EbgColor;
  children: React.ReactNode;
  addNewCard: (data: ICard) => void;
}


interface CardProps {
  content: ICard
  bgColor: EbgColor;
  color: EbgColor;
  title?: string // pass from parent components
  editCard: (type: EbgColor, card: ICard) => void;
  removeCard: (type: EbgColor, idCard: string) => void
}

interface ICard {
  userID: string;
  idCard: string;
  content: string;
  like: number;
}

export type { ColumnProps, CardProps, ICard }