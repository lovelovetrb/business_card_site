
import { MeetUpInfoType } from "./types";

const MeetUpInfo = ({ info }: MeetUpInfoType) => {
  console.log(info)
  return (
    <div className="text-center">
      {info.date && <p>私は、<span className="marker"> {info.date}  </span> に</p>}
      {info.place && <p><span className="marker"> {info.place} </span>で行われた</p>}
      {info.eventName && <p><span className="marker"> {info.eventName} </span>で</p>}
      <p>名刺交換をさせていただきました!</p>
      <p>ありがとうございました！</p>
    </div>
  );
}

export default MeetUpInfo;
