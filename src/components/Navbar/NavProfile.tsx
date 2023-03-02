const iconWrapper: string =
  "w-11 h-11 p-3 rounded-full border border-primary-300 cursor-pointer hover:bg-primary-300";

const NavProfile = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className={iconWrapper}>
        <img
          className="w-auto object-cover"
          src="notification.svg"
          alt="notification"
        />
      </div>

      <img
        className="w-11 h-auto object-cover"
        src="/profile.png"
        alt="profile"
      />
    </div>
  );
};

export default NavProfile;
