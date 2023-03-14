import { useParams } from "react-router-dom";
import useMessage from "../../store/messageStore";
import messages from "../../utils/message";

const iconWrapperStyle: string =
  "h-[44px] w-[44px] border border-primary-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-200 transition-all ease-in-out md:w-[52px] md:h-[52px]";
const iconStyle: string = "w-5 h-5 object-cover md:w-6 md:h-6";

const MessageRoom = () => {
  const [isOpen, setIsOpen] = useMessage((state) => [
    state.isOpen,
    state.handleOpen,
  ]);
  const { roomName } = useParams();

  const message = messages.find((message) => message.link === roomName);

  return (
    <div
      className={`${!isOpen ? "absolute inset-0 translate-x-full" : ""
        } w-full md:transform-none md:static md:w-8/12`}
    >
      <div className="bg-primary-100 px-6 py-8 md:py-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            onClick={() => setIsOpen(false)}
            className="w-5 h-5 object-cover cursor-pointer md:hidden"
            src="/arrow-back.svg"
            alt="arrow-back"
          />

          <div className="flex items-center gap-3">
            <img
              className="w-[44px] h-[44px] object-cover rounded-full md:w-[52px] md:h-[52px]"
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
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className={iconWrapperStyle}>
            <img className={iconStyle} src="/video-call.svg" alt="video-call" />
          </div>
          <div className={iconWrapperStyle}>
            <img className={iconStyle} src="/voice-call.svg" alt="voice-call" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageRoom;
