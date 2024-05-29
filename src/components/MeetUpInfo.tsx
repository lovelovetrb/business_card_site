
import { MeetUpInfoType } from "@/types";

type Props = {
  info: MeetUpInfoType;
};

const MeetUpInfo = ({ info }: Props) => {
  console.log(info)
  return (
    <div className="text-center leading-8">
      {info.date && <p>私は、<span className="marker"> {info.date}  </span> に</p>}
      {info.place && <p><span className="marker"> {info.place} </span>で行われた</p>}
      {info.eventName && <p><span className="marker"> {info.eventName} </span>で</p>}
      <p>名刺交換をさせていただきました!</p>
      <p>ありがとうございました！</p>
    </div>
  );
}

export default MeetUpInfo;
