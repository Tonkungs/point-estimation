interface IProps {
  point: string,
  useCard: string,
  setUseCard: any,
  estimationPoints: string[],
  // isHide: boolean
}

export default function CardPoint(props: IProps) {
  return (

    <div className={`w-20 h-28 flex rounded-lg items-center justify-center shadow-lg cursor-pointer
     ${props.point === props.useCard ? "bg-cus-cream" : ""}
     ${props.estimationPoints.includes(props.point) ? "border-4 border-lime-cus" : ""}`}
      onClick={() => props.setUseCard(props.point)}>
      <span className="text-3xl text-gray-500">{props.point}</span>
    </div>
  );
}