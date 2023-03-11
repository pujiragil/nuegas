import ProfileLayout from "../../components/Layouts/ProfileLayout";

const Message = () => {
  return (
    <>
      <ProfileLayout titleProfile="Message" background="primary">
        <div className="px-6 pb-6 md:hidden">
          <div className="flex items-center gap-5 py-3.5 px-7 rounded-xl border border-primary-300 focus-within:ring-1 focus-within:ring-primary-300">
            <input
              className="border-none outline-none w-full text-xs font-base text-secondary-100"
              placeholder="Search Name"
            />
            <img
              className="w-5 h-5 object-cover"
              src="/search.svg"
              alt="search"
            />
          </div>
        </div>
      </ProfileLayout>
      <div className="flex">
        <div className="p-6 bg-primary-100 w-full md:space-y-8 md:w-4/12">
          <div className="hidden md:flex items-center gap-5 py-3.5 px-7 rounded-xl border border-primary-300 focus-within:ring-1 focus-within:ring-primary-300">
            <input
              className="border-none outline-none w-full text-xs font-base text-secondary-100"
              placeholder="Search Name"
            />
            <img
              className="w-5 h-5 object-cover"
              src="/search.svg"
              alt="search"
            />
          </div>

          <div className="flex flex-col divide-y divide-primary-300">
            <ChatPerson isActive={true} />
            <ChatPerson isActive={false} />
            <ChatPerson isActive={false} />
            <ChatPerson isActive={false} />
            <ChatPerson isActive={false} />
            <ChatPerson isActive={false} />
            <ChatPerson isActive={false} />
            <ChatPerson isActive={false} />
          </div>
        </div>

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
                  Angel Saris
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25C78B]"></span>
                  <p className="font-semibold text-xs text-secondary-100">
                    Online
                  </p>
                </div>
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
      </div>
    </>
  );
};

const ChatPerson = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div
        className={`flex items-center gap-3 py-2.5 px-5 rounded-xl ${isActive ? "bg-primary-200" : null
          }`}
      >
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="/profile.png"
          alt="profile"
        />
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm text-secondary-100">
              Angel Saris
            </p>
            <p className="font-base text-xs text-secondary-300">1m Ago</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-base text-xs text-secondary-100">
              Thank you very much...
            </p>
            <span className="w-2 h-2 rounded-full bg-[#DB5962]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
