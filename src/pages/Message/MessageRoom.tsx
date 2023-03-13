import { useParams } from "react-router-dom";

const MessageRoom = () => {
  const { roomName } = useParams();

  console.log(roomName);

  return <div>MessageMentor</div>;
};

export default MessageRoom;
