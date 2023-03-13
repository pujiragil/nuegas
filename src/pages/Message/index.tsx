import ProfileLayout from "../../components/Layouts/ProfileLayout";
import { NavLink, Outlet } from "react-router-dom";
import { FC } from "react";
import messages from "../../utils/message";

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
            {messages.map((message) => (
              <ChatUserLink
                key={message.id}
                link={message.link}
                user={message.user}
              />
            ))}
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

interface ChatUserLinkProps {
  user: {
    avatar: string;
    name: string;
    isOnline: boolean;
  };
  link: string;
}

const ChatUserLink: FC<ChatUserLinkProps> = ({ user, link }) => {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <NavLink
        to={link}
        className={`flex items-center gap-3 py-2.5 px-5 rounded-xl ${user.isOnline ? "bg-primary-200" : null
          }`}
      >
        <img
          className="w-12 h-12 object-cover rounded-full"
          src={user.avatar}
          alt="profile"
        />
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm text-secondary-100">
              {user.name}
            </p>
            <p className="font-base text-xs text-secondary-300">1m Ago</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-base text-xs text-secondary-100">
              Thank you very much...
            </p>
            {user.isOnline ? (
              <span className="w-2 h-2 rounded-full bg-[#25C78B]"></span>
            ) : (
              <span className="w-2 h-2 rounded-full bg-[#DB5962]"></span>
            )}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Message;
