import ProfileLayout from "../../components/Layouts/ProfileLayout";
import { SwitchTab, SwitchNotification } from "../../components/Switch";
import dropdown from "../../assets/arrow.svg";
import { useCallback, useState } from "react";
import useSettingStore from "../../store/settingStore";
import { shallow } from "zustand/shallow";
import { SelectDropdown } from "../../components/Field";

const timezoneWrapperStyle: string =
  "cursor-pointer py-4 px-5 rounded-xl border flex items-center gap-4 md:w-full md:gap-0 md:justify-between";

const Settings = () => {
  const selectedTab = useSettingStore((state) => state.selectedTab);

  return (
    <>
      <ProfileLayout
        titleProfile="Settings"
        background="primary"
        children={<SwitchTab screenDisplay="md:hidden" />}
      />

      <div className="bg-primary-200 text-secondary-100 p-6">
        <div className="bg-primary-100 flex flex-col gap-8 p-5 rounded-xl md:p-8">
          <SwitchTab screenDisplay="hidden md:flex md:p-0 border-b border-primary-300" />
          {selectedTab === "general" ? <GeneralTab /> : <NotificationTab />}
        </div>
      </div>
    </>
  );
};

type Select = "language" | "timezone" | "";

const GeneralTab = () => {
  const [timeZone, setTimeZone] = useState<"12 hour" | "24 hour">("24 hour");
  const [isSelect, setIsSelect] = useState<Select>("");

  return (
    <div className="flex flex-col gap-36 md:gap-16">
      <div className="flex flex-col gap-6 md:w-2/6">
        <div className="flex flex-col gap-4 relative">
          <p className="font-semibold text-sm">Language</p>
          <div
            onClick={() =>
              setIsSelect((prevSelect) =>
                prevSelect === "" || prevSelect === "timezone" ? "language" : ""
              )
            }
            className="cursor-pointer font-medium text-xs flex items-center justify-between px-5 py-4 rounded-xl border border-primary-300"
          >
            <p>English (Default)</p>
            <img
              className="w-5 h-5 object-cover"
              src={dropdown}
              alt="dropdown"
            />
          </div>

          {isSelect === "language" && <SelectDropdown />}
        </div>

        <div className="flex flex-col gap-4 relative">
          <p className="font-semibold text-sm">Timezone</p>
          <div
            onClick={() =>
              setIsSelect((prevSelect) =>
                prevSelect === "" || prevSelect === "language" ? "timezone" : ""
              )
            }
            className="cursor-pointer font-medium text-xs flex items-center justify-between px-5 py-4 rounded-xl border border-primary-300"
          >
            <p>English (Default)</p>
            <img
              className="w-5 h-5 object-cover"
              src={dropdown}
              alt="dropdown"
            />
          </div>
          {isSelect === "timezone" && <SelectDropdown />}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold text-sm">Timezone</p>
          <div className="flex items-center gap-4 md:gap-8">
            <div
              onClick={() => setTimeZone("24 hour")}
              className={`${timeZone === "24 hour"
                  ? "border-tertiary-100"
                  : "border-primary-300"
                } ${timezoneWrapperStyle}`}
            >
              <p className="font-medium text-xs">24 Hours</p>
              <span
                className={`${timeZone === "24 hour"
                    ? "border-4 border-tertiary-100"
                    : "border-2 border-primary-300"
                  } w-5 h-5 rounded-full`}
              ></span>
            </div>

            <div
              onClick={() => setTimeZone("12 hour")}
              className={`${timeZone === "12 hour"
                  ? "border-tertiary-100"
                  : "border-primary-300"
                } ${timezoneWrapperStyle}`}
            >
              <p className="font-medium text-xs">12 Hours</p>
              <span
                className={`${timeZone === "12 hour"
                    ? "border-4 border-tertiary-100"
                    : "border-2 border-primary-300"
                  } w-5 h-5 rounded-full`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full py-3 rounded-xl bg-tertiary-100 text-primary-100 text-sm font-semibold md:w-2/6">
        Save Changes
      </button>
    </div>
  );
};

interface Notification {
  message: boolean;
  taskUpdate: boolean;
  taskDeadline: boolean;
  mentorHelp: boolean;
}

const NotificationTab = (): JSX.Element => {
  const [notificationStore, setNotificationStore] = useSettingStore(
    (state) => [state.notification, state.setNotification],
    shallow
  );
  const [notification, setNotification] =
    useState<Notification>(notificationStore);

  const handleNotification = useCallback(
    (name: keyof Notification) => {
      setNotification((prevNotification) => ({
        ...prevNotification,
        [name]: !prevNotification[name],
      }));
    },
    [setNotification]
  );

  const handleSavedChanges = (): void => {
    setNotificationStore(notification);
    alert("Saved Changes");
  };

  return (
    <div className="flex flex-col gap-36 md:gap-16">
      <div className="flex flex-col gap-6 font-semibold text-sm text-secondary-100 md:w-2/6">
        <SwitchNotification
          isActive={notification.message}
          setIsActive={() => handleNotification("message")}
          label="Message"
        />
        <SwitchNotification
          isActive={notification.taskUpdate}
          setIsActive={() => handleNotification("taskUpdate")}
          label="Task Update"
        />
        <SwitchNotification
          isActive={notification.taskDeadline}
          setIsActive={() => handleNotification("taskDeadline")}
          label="Task Deadline"
        />
        <SwitchNotification
          isActive={notification.mentorHelp}
          setIsActive={() => handleNotification("mentorHelp")}
          label="Mentor Help"
        />
      </div>
      <button
        onClick={handleSavedChanges}
        className="w-full py-3 rounded-xl bg-tertiary-100 text-primary-100 font-semibold text-sm md:w-2/6"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
