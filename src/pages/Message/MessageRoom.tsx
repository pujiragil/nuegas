import { useParams } from "react-router-dom";
import messages from "../../utils/message";

const MessageRoom = () => {
  const { roomName } = useParams();

  const message = messages.find((message) => message.link === roomName);

  return (
    <div className="hidden md:block md:w-8/12">
      <div className="bg-primary-100 py-6 px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-[52px] h-[52px] object-cover rounded-full"
            src="/profile.png"
            alt="profile"
          />
          <div className="space-y-2">
            <p className="font-semibold text-sm text-secondary-100">
              {message?.user.name}
            </p>
            {message?.user.isOnline ? (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25C78B]"></span>
                <p className="font-semibold text-xs text-secondary-100">
                  Online
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DB5962]"></span>
                <p className="font-semibold text-xs text-secondary-100">
                  Offline
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="h-[52px] w-[52px] border border-primary-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-200 transition-all ease-in-out">
            <img
              className="w-6 h-6 object-cover"
              src="/video-call.svg"
              alt="video-call"
            />
          </div>
          <div className="h-[52px] w-[52px] border border-primary-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-200 transition-all ease-in-out">
            <img
              className="w-6 h-6 object-cover"
              src="/voice-call.svg"
              alt="voice-call"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageRoom;
