interface IProps {
  point: string,
  useCard: string,
  setUseCard: any,
  estimationPoints: string[],
}

export default function CardPoint(props: IProps) {
  return (

    <div className={`w-20 h-28 flex rounded-lg items-center justify-center shadow-lg cursor-pointer
     ${props.point === props.useCard ? "bg-sky-400" : ""}
     ${props.estimationPoints.includes(props.point) ? "border-4 border-lime-500" : ""}`}
      onClick={() => props.setUseCard(props.point)}>
      {props.point}
    </div>
  );
}